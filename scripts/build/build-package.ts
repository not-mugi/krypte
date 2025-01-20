import chalk from "chalk";
import { generateDts, generateCoreDts } from "./generate-d-ts";
import { createLogger } from "../others/logger";
import { isCorePkg, isDtsPkg, locatePackage, getPackageJson } from "../pkgs";
import {
  createConfig,
  createTailwindConfig,
} from "./rollup/create-rollup-config";
import { compile } from "./rollup/compile";
import { PKG_EXTERNALS, WORKSPACE_EXTERNALS } from "./rollup/externals";

const logger = createLogger("build-package");

export async function buildPackage(pkgName: string) {
  const pkgPath = locatePackage(pkgName);
  const pkgJson = getPackageJson(pkgName);

  if (!pkgPath || !pkgJson) {
    logger.error(`Package ${pkgName} not found!`);
    process.exit(1);
  }

  const dtsPkg = isDtsPkg(pkgJson);
  const corePkg = isCorePkg(pkgJson);
  const chalkPkgName = chalk.cyan(pkgJson.name);

  logger.info(`Building package ${chalkPkgName}...`);

  try {
    if (dtsPkg) {
      logger.info(
        `Couldn't find main entry file. Assumed package ${chalkPkgName} is a library.`
      );
      logger.info(`Skipping build for ${chalkPkgName}`);
      return;
    }

    logger.info(`Generating ${chalkPkgName} *.d.ts files...`);

    await generateDts(pkgPath);
    /** compile types as inline for core pkgs */
    corePkg && (await generateCoreDts(pkgPath));

    if (!corePkg) {
      logger.info(`Generating ${chalkPkgName} tailwind css files...`);
      const twConfig = createTailwindConfig(pkgPath);
      await compile(twConfig);
    }

    const rootDir = "/src";
    const externals = corePkg ? WORKSPACE_EXTERNALS : PKG_EXTERNALS(pkgName);
    const config = createConfig(pkgName, pkgPath, rootDir, externals);

    logger.info(`Compiling ${chalkPkgName} with rollup`);
    await compile(config);
  } catch (error) {
    logger.error(`Failed to build package ${chalkPkgName}`);
    logger.error(error);
    process.exit(1);
  }

  logger.success("Package built successfully!");
}
