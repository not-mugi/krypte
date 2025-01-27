import path from "path";
import { $, usePowerShell } from "zx";

export async function generateCoreDts(pkgPath: string) {
  let apiExtractor = "api-extractor.json";
  if (process.platform === "win32") {
    usePowerShell();
  }
  const extractorPath = path.resolve(pkgPath, apiExtractor);
  await $`yarn api-extractor run --local --config ${extractorPath}`;
}

export async function generateDts(pkgPath: string) {
  let tsBuild = "tsconfig.build.json";
  if (process.platform === "win32") {
    usePowerShell();
  }
  const tsconfig = path.resolve(pkgPath, tsBuild);
  await $`yarn tsc -p ${tsconfig}`;
}
