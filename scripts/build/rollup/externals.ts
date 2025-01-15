import pkgJson from "../../../package.json";
import { getPackageJson } from "../../pkgs/index"

export const WORKSPACE_EXTERNALS = [
  ...Object.keys({
    ...pkgJson.dependencies,
    ...pkgJson.peerDependencies,
    ...pkgJson.devDependencies,
  }),
];

export const PKG_EXTERNALS = (pkgName : string) => {
  const pkgJson = getPackageJson(pkgName);

  return pkgJson ? [
    ...Object.keys({
      ...pkgJson.dependencies as {},
      ...pkgJson.devDependencies as {},
      ...pkgJson.peerDependencies as {},
    })
  ] : []
}