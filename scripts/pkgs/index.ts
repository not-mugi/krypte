import fs from "fs-extra";
import path from "path";

const PKG_DIR = path.resolve("pkgs");

export function locatePackage(pkgName: string): string | void {
  const pkgPath = path.join(PKG_DIR, pkgName);
  console.log("locatePkg", pkgPath);
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

export function getPackageJson(pkgName: string): { [key: string]: any } | void {
  const pkgJsonPath = locatePackageJson(pkgName);
  if (!pkgJsonPath) {
    return void 0;
  }
  return fs.readJsonSync(pkgJsonPath);
}
