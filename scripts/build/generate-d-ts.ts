import path from "path";
import { $ } from "zx";
export async function generateDts(pgkPath: string) {
  const tsProject = path.join(pgkPath, "tsconfig.build.json");
  try {
    await $`yarn tsc -p ${tsProject}`;
  } catch (error) {
    console.log("bad");
    console.log(error);
  }
}
