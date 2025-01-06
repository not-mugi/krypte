import pkgJson from "../../../package.json";

export const EXTERNALS = [
  "react",
  "react/jsx-runtime",
  ...Object.keys({
    ...pkgJson.dependencies,
    ...pkgJson.devDependencies,
  }),
];
