import chalk from "chalk";
import { createLogger } from "../others/logger";
import { getPackageJson, locatePackage } from "../pkgs";
import { generateDts } from "./generate-d-ts";
import {
  createSrcConfig,
  createTwConfig,
} from "./rollup/create-package-config";
import { rollupCompile } from "./rollup/compile";

const logger = createLogger("build-package");

export async function buildPackage(_pkg_name: string) {
  const pkgPath = locatePackage(_pkg_name);
  const pkgJson = getPackageJson(_pkg_name);

  if (!pkgPath || !pkgJson) {
    logger.error(`Package ${_pkg_name} not found!`);
    process.exit(1);
  }
  const pkgName = chalk.cyan(pkgJson.name);

  logger.info(`Building package ${pkgName}...`);

  try {
    // Generate *.d.ts files
    logger.info(`Generating ${pkgName} *.d.ts files...`);
    await generateDts(pkgPath);

    // Compile tailwind css
    logger.info(`Generating ${pkgName} tailwind css files...`);
    const twConfig = createTwConfig(_pkg_name, pkgPath);
    await rollupCompile(twConfig);

    // Compile with rollup
    const rollupConfig = createSrcConfig(_pkg_name, pkgPath);
    logger.info(`Compiling ${pkgName} with rollup`);
    await rollupCompile(rollupConfig);
  } catch (error) {
    logger.error(`Failed to build package ${pkgName}`);
    logger.error(error);
    process.exit(1);
  }

  logger.success("Package built successfully!");
}
