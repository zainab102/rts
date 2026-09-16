import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".git" ||
        entry.name === ".next"
      ) {
        continue;
      }
      files.push(...(await walk(path)));
    } else if (/\.b64(\.\d+)?$/.test(entry.name)) {
      files.push(path);
    }
  }
  return files;
}

function destPath(b64Path) {
  return b64Path.replace(/\.b64(?:\.\d+)?$/, "");
}

const files = await walk(join(process.cwd(), "public"));
if (files.length === 0) {
  console.log("no photo sidecars found");
  process.exit(0);
}

const groups = new Map();
for (const path of files) {
  const dest = destPath(path);
  const list = groups.get(dest) ?? [];
  list.push(path);
  groups.set(dest, list);
}

for (const [dest, parts] of groups) {
  parts.sort();
  const encoded = (
    await Promise.all(parts.map((part) => readFile(part, "utf8")))
  )
    .join("")
    .replace(/\s+/g, "");
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, Buffer.from(encoded, "base64"));
  console.log(`restored ${dest}`);
}
