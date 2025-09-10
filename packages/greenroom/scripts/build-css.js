import { promises as fs } from "fs";
import path from "path";

// Copies CSS tokens to dist; no build step to keep it simple.
(async () => {
  const src = path.resolve(process.cwd(), "src", "styles", "tokens.css");
  const destDir = path.resolve(process.cwd(), "dist");
  const dest = path.join(destDir, "tokens.css");
  await fs.mkdir(destDir, { recursive: true });
  await fs.copyFile(src, dest);
})();
