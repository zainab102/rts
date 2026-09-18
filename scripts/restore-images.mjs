import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";

const root = process.cwd();
const sidecarRoots = [join(root, "photos"), join(root, "public")];
const publicRoot = join(root, "public");

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  if (!(await exists(dir))) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".git" ||
        entry.name === ".next" ||
        entry.name === "_parts"
      ) {
        continue;
      }
      files.push(...(await walk(path)));
    } else if (/\.b64\.\d+$/.test(entry.name)) {
      files.push(path);
    }
  }
  return files;
}

function destFrom(b64Path, sidecarRoot) {
  const withoutSidecar = b64Path.replace(/\.b64\.\d+$/, "");
  return join(publicRoot, relative(sidecarRoot, withoutSidecar));
}

function indexes(parts) {
  return parts
    .map((part) => Number(part.match(/\.b64\.(\d+)$/)[1]))
    .sort((a, b) => a - b);
}

function isContiguous(parts) {
  const nums = indexes(parts);
  if (nums.length === 0 || nums[0] !== 0) return false;
  return nums.every((n, i) => n === i);
}

function isJpeg(buf) {
  return buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
}

function isWebp(buf) {
  return (
    buf.subarray(0, 4).toString("ascii") === "RIFF" &&
    buf.subarray(8, 12).toString("ascii") === "WEBP"
  );
}

function isValidPhoto(buf) {
  return buf.length >= 50_000 && (isJpeg(buf) || isWebp(buf));
}

function photoScore(buf) {
  if (!isValidPhoto(buf)) return -1;
  // Prefer full JPEG over lighter WebP so Vercel can serve image/jpeg.
  return (isJpeg(buf) ? 1_000_000_000 : 0) + buf.length;
}

const groups = new Map();
for (const sidecarRoot of sidecarRoots) {
  for (const path of await walk(sidecarRoot)) {
    const dest = destFrom(path, sidecarRoot);
    const key = dest;
    const current = groups.get(key) ?? [];
    current.push(path);
    groups.set(key, current);
  }
}

if (groups.size === 0) {
  console.log("no photo sidecars found");
  process.exit(0);
}

for (const [dest, parts] of groups) {
  const byRoot = new Map();
  for (const part of parts) {
    const rootName = part.startsWith(join(root, "photos"))
      ? "photos"
      : "public";
    const list = byRoot.get(rootName) ?? [];
    list.push(part);
    byRoot.set(rootName, list);
  }

  const candidates = ["photos", "public"]
    .map((name) => byRoot.get(name))
    .filter(Boolean);

  const decoded = [];
  for (const candidate of candidates) {
    candidate.sort();
    if (!isContiguous(candidate)) {
      console.log(`skip incomplete ${dest}`);
      continue;
    }
    const encoded = (
      await Promise.all(candidate.map((part) => readFile(part, "utf8")))
    )
      .join("")
      .replace(/\s+/g, "");
    const buf = Buffer.from(encoded, "base64");
    const score = photoScore(buf);
    if (score < 0) {
      console.log(`skip invalid ${dest} (${buf.length}B)`);
      continue;
    }
    decoded.push({ buf, score });
  }

  decoded.sort((a, b) => b.score - a.score);
  if (decoded.length === 0) {
    console.log(`missing ${dest}`);
    continue;
  }

  const { buf } = decoded[0];
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  console.log(`restored ${dest} (${buf.length}B)`);
}
