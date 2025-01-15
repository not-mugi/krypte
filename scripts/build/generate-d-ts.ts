import path from "path";
import { $, usePowerShell } from "zx";

export async function generateDts(pkgPath: string) {
  const apiExtractor = "api-extractor.json";
  const tsBuild = "tsconfig.build.json";
  if (process.platform === "win32") {
    usePowerShell();
  }
  const tsconfig = path.resolve(pkgPath, tsBuild);
  try {
  await $`yarn tsc -p ${tsconfig}`;
  const extractorPath = path.resolve(pkgPath, apiExtractor);
  await $`yarn api-extractor run --local --config ${extractorPath}`;
  } catch (error) {
    console.log(error) 
  }
}
