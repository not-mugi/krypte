import path from "path";
import { $, usePowerShell } from "zx";

export async function generateDts(pkgPath: string) {
  let tsBuild = "tsconfig.build.json";
  if (process.platform === "win32") {
    usePowerShell();
  }
  const tsconfig = path.resolve(pkgPath, tsBuild);
  await $`yarn tsc -p ${tsconfig}`;
}
