import os from "os";
import path from "path";
import { $ } from "zx";
export async function generateDts(pkgPath: string) {
  let tsBuild = "tsconfig.build.json";
  if (os.platform() === "win32") {
    tsBuild = "\tsconfig.build.json";
  }
  await $`yarn tsc -p ${path.join(pkgPath, tsBuild)}`;
}
