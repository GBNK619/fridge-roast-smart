import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My smart fridge updated its firmware and now it won't open until I agree to the terms — for a fridge.";

// Gate validation: the entry must be 1-200 characters and not only whitespace.
if (line.length < 1 || line.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${line.length}`,
  );
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
console.log(`wrote entry.txt (${line.length} characters): ${line}`);
