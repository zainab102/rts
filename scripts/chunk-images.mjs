import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const publicRoot = join(root, "public");
const sidecarRoot = join(root, "photos");
const rooms = ["office", "hall", "kitchen", "sales", "washroom", "entrance"];
const chunkChars = 16000;

await rm(sidecarRoot, { recursive: true, force: true });

for (const room of rooms) {
  const dir = join(publicRoot, room);
  const entries = await readdir(dir);
  await mkdir(join(sidecarRoot, room), { recursive: true });
  for (const name of entries) {
    if (!/\.(png|jpg|jpeg|webp)$/i.test(name)) continue;
    const bytes = await readFile(join(dir, name));
    const encoded = bytes.toString("base64");
    const parts = Math.ceil(encoded.length / chunkChars);
    for (let i = 0; i < parts; i++) {
      const slice = encoded.slice(i * chunkChars, (i + 1) * chunkChars);
      const part = String(i).padStart(2, "0");
      const dest = join(sidecarRoot, room, `${name}.b64.${part}`);
      await writeFile(dest, slice);
    }
    console.log(`${room}/${name} ${bytes.length}B -> ${parts} chunks`);
  }
}
