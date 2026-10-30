import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const bundle = JSON.parse(await readFile(path.join(root, "vendor/threeui/sylva-hero.json"), "utf8"));
let failures = 0;
for (const entry of [...bundle.files, ...bundle.assets]) {
  const relative = entry.path === 'public/landing-pages/inner-green-3d.html'
    ? `vendor/threeui/${entry.path}`
    : entry.path.startsWith("public/") ? entry.path : `vendor/threeui/${entry.path}`;
  try {
    const data = await readFile(path.join(root, relative));
    const hash = createHash("sha256").update(data).digest("hex");
    if (hash !== entry.sha256 || data.length !== entry.bytes) throw new Error(`Expected ${entry.sha256} (${entry.bytes} bytes), got ${hash} (${data.length} bytes)`);
    console.log(`PASS ${entry.path}`);
  } catch (error) {
    failures++;
    console.error(`FAIL ${entry.path}: ${error.message}`);
  }
}
if (failures) process.exitCode = 1;
else console.log("All 10 registered files and assets match the requested revision.");
