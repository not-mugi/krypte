import pkgJson from "../../../package.json";

export const EXTERNALS = [
  ...Object.keys({
    ...pkgJson.dependencies,
    ...pkgJson.peerDependencies,
    ...pkgJson.devDependencies,
  }),
];
