import chalk from "chalk";
import { generateDts } from "./generate-d-ts";
import { createLogger } from "../others/logger";
import { isCorePkg, isLibPkg, locatePackage, getPackageJson } from "../pkgs";
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

  logger.info(`Building package ${chalkPkgName}...`);

  try {
    // Skip build for lib core packages without main entry file
    if (!isLibPkg(pkgJson)) {
      // prettier-ignore
      logger.info( `Couldn't find main entry file. Assumed package ${chalkPkgName} is a library.`);
      logger.info(`Skipping build for ${chalkPkgName}`);
      return;
    }

    logger.info(`Generating ${chalkPkgName} *.d.ts files...`);
    await generateDts(pkgPath);

    // Generate tailwind css for non-core packages
    if (!isCorePkg(pkgJson)) {
      logger.info(`Generating ${chalkPkgName} tailwind css files...`);
      const twConfig = createTailwindConfig(pkgPath);
      await compile(twConfig);
    }

    // Compile main bundle
    const config = createConfig(_pkg_name, pkgPath);
    logger.info(`Compiling ${chalkPkgName} with rollup`);
    await compile(config);
  } catch (error) {
    logger.error(`Failed to build package ${chalkPkgName}`);
    logger.error(error);
    process.exit(1);
  }

  logger.success("Package built successfully!");
}
