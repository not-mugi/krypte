import path from "path";
import { promises as fs } from "fs";
import signale from "signale";

export function getPath(fPath: string) {
  return path.posix.resolve(fPath);
}

export async function deleteArtifacts(
  pkgPath: string,
  directoriesToDelete: string[] = ["cjs", "dist", "esm", "lib"],
  logger: { info: (msg : string) => void; warn: (msg : string) => void } = new signale.Signale({ scope: "scripts-path" })
) {
  for (const dir of directoriesToDelete) {
    const dirPath = path.join(pkgPath, dir);
    try {
      await fs.rm(dirPath, { recursive: true, force: true });
    } catch (_err) {}
  }
}
