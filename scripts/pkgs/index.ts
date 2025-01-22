import fs from "fs-extra";
import path from "path";

const PKG_DIR = path.posix.resolve("pkgs");

export function locatePackage(pkgName: string): string | void {
  const pkgPath = path.join(PKG_DIR, pkgName);
  if (fs.pathExistsSync(pkgPath)) {
    return pkgPath;
  }
}

export function locatePackageJson(pkgName: string): string | void {
  const pkgJsonPath = path.join(PKG_DIR, pkgName, "package.json");
  if (fs.pathExistsSync(pkgJsonPath)) {
    return pkgJsonPath;
  }
}

export function getPackageJson(
  pkgName: string
): { [key: string]: string } | void {
  const pkgJsonPath = locatePackageJson(pkgName);
  if (!pkgJsonPath) {
    return void 0;
  }
  return fs.readJsonSync(pkgJsonPath);
}

export function getPackageSourcePath(pkgPath: string) {
  return path.join(pkgPath, "src");
}

export function isCorePkg(pkgJson: { [key: string]: string | boolean }) {
  return pkgJson?.isCore === true;
}

export function isDtsPkg(pkgJson: { [key: string]: string }) {
  return pkgJson?.main!.trim().length === 0;
}
