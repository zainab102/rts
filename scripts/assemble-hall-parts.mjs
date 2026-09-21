import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const partsRoot = join(root, "photos/hall/_parts");
const outRoot = join(root, "photos/hall");

const entries = await readdir(partsRoot);
const groups = new Map();
for (const name of entries) {
  const m = name.match(/^(.*)\.(\d{2})$/);
  if (!m) continue;
  const [, base, idx] = m;
  const list = groups.get(base) ?? [];
  list.push({ idx: Number(idx), name });
  groups.set(base, list);
}

let wrote = 0;
for (const [base, list] of groups) {
  list.sort((a, b) => a.idx - b.idx);
  for (let i = 0; i < list.length; i++) {
    if (list[i].idx !== i) throw new Error(`gap in ${base} at ${i}`);
  }
  const content = (
    await Promise.all(list.map((p) => readFile(join(partsRoot, p.name), "utf8")))
  ).join("");
  await writeFile(join(outRoot, base), content);
  wrote++;
  console.log(`wrote ${base} (${content.length})`);
}
console.log(`assembled ${wrote} sidecars`);
