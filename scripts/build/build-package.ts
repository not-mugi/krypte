import chalk from "chalk";
import { createLogger } from "../others/logger";
import { getPackageJson, isCorePkg, locatePackage, mustCompile } from "../pkgs";
import { generateDts } from "./generate-d-ts";
import {
  createConfig,
  createTailwindConfig,
} from "./rollup/create-package-config";
import { compile } from "./rollup/compile";

const logger = createLogger("build-package");

export async function buildPackage(_pkg_name: string) {
  const pkgPath = locatePackage(_pkg_name);
  const pkgJson = getPackageJson(_pkg_name);

  if (!pkgPath || !pkgJson) {
    logger.error(`Package ${_pkg_name} not found!`);
    process.exit(1);
  }
  const chalkPkgName = chalk.cyan(pkgJson.name);
  const corePkg = isCorePkg(pkgJson);

  logger.info(`Building package ${chalkPkgName}...`);

  try {
    if (!corePkg) {
      // Generate *.d.ts files for non-core packages
      logger.info(`Generating ${chalkPkgName} *.d.ts files...`);
      await generateDts(pkgPath);

      // Generate tailwind css files
      logger.info(`Generating ${chalkPkgName} tailwind css files...`);
      const twConfig = createTailwindConfig(pkgPath);
      await compile(twConfig);
    }

    // Skip build for non-core packages without main entry file
    if (!mustCompile(pkgJson)) {
      // prettier-ignore
      logger.info( `Couldn't find main entry file. Assumed package ${chalkPkgName} is a library.`);
      logger.info(`Skipping build for ${chalkPkgName}`);
      return;
    }

    // const rollupConfig = createSrcConfig(_pkg_name, pkgPath);
    // logger.info(`Compiling ${chalkPkgName} with rollup`);
    // await rollupCompile(rollupConfig);
  } catch (error) {
    logger.error(`Failed to build package ${chalkPkgName}`);
    logger.error(error);
    process.exit(1);
  }

  logger.success("Package built successfully!");
}
