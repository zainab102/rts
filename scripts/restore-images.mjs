import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git" || entry.name === ".next") {
        continue;
      }
      files.push(...(await walk(path)));
    } else if (entry.name.endsWith(".b64")) {
      files.push(path);
    }
  }
  return files;
}

const files = await walk(process.cwd());
if (files.length === 0) {
  process.exit(0);
}

for (const b64Path of files) {
  const dest = b64Path.slice(0, -4);
  const encoded = (await readFile(b64Path, "utf8")).replace(/\s+/g, "");
  await writeFile(dest, Buffer.from(encoded, "base64"));
  console.log(`restored ${dest}`);
}
