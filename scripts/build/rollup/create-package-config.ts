import { globSync } from "glob";
import { RollupOptions } from "rollup";
import { EXTERNALS } from "./externals";
import path, { extname, relative } from "path";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";
import nodeResolve from "@rollup/plugin-node-resolve";
import { generateScopedName } from "hash-css-selector";
import { getPath } from "../../others/path";

export function createTwConfig(
  _pkg_name: string,
  pkgPath: string
): RollupOptions {
  const plugins = [
    postcss({
      extract: true,
      modules: { generateScopedName },
      minimize: true,
    }),
  ];
  return {
    input: "styles/main.css",
    output: {
      format: "es",
      file: path.resolve(pkgPath, "lib/main.css"),
    },
    plugins,
  };
}

export function createSrcConfig(
  _pkg_name: string,
  pkgPath: string
): RollupOptions {
  const pkgSrcPath = "pkgs/" + _pkg_name + "/src";
  const tsconfig = getPath("tsconfig.json");

  const plugins = [
    nodeResolve({
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }),
    esbuild({
      tsconfig,
    }),
  ];

  return {
    external: EXTERNALS,
    input: Object.fromEntries(
      globSync(`${pkgSrcPath}/**/*.{ts,tsx}`, {
        ignore: [],
      }).map((file) => [
        relative(pkgSrcPath, file.slice(0, file.length - extname(file).length)),
        path.resolve(pkgPath, relative(path.resolve(pkgPath), file)),
      ])
    ),
    output: [
      {
        format: "es",
        entryFileNames: "[name].mjs",
        dir: path.resolve(pkgPath, "esm"),
        preserveModules: true,
        sourcemap: true,
        assetFileNames: "assets/[name][extname]",
      },
      {
        format: "cjs",
        entryFileNames: "[name].cjs",
        dir: path.resolve(pkgPath, "cjs"),
        preserveModules: true,
        sourcemap: true,
        assetFileNames: "assets/[name][extname]",
        interop: "auto",
      },
    ],
    plugins,
  };
}
