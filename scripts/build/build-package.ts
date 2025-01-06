import chalk from "chalk";
import { createLogger } from "../others/logger";
import { getPackageJson, locatePackage } from "../pkgs";
import { generateDts } from "./generate-d-ts";
import { createPkgConfig } from "./rollup/create-package-config";

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
    logger.info(`Generating ${pkgName} *.d.ts files...`);
    await generateDts(pkgPath);

    const rollupConfig = createPkgConfig(pkgPath);

    console.log(rollupConfig);
  } catch (error) {
    logger.error(`Failed to build package ${pkgName}`);
    logger.error(error);
    process.exit(1);
  }

  logger.success("Package built successfully!");
}
