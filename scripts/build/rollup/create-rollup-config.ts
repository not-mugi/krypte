import { getPath } from "../../others/path";
import { globSync } from "glob";
import { RollupOptions } from "rollup";
import { generateScopedName } from "hash-css-selector";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";
import path, { extname, relative } from "path";
import nodeResolve from "@rollup/plugin-node-resolve";

export function createTailwindConfig(pkgPath: string): RollupOptions {
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

export function createConfig(
  pkgName: string,
  pkgPath: string,
  rootDir = "/src",
  externals: Array<string> = []
): RollupOptions {
  const input = "pkgs/" + pkgName + rootDir;
  const tsconfig = getPath("tsconfig.json");
  const plugins = [
    nodeResolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }),
    esbuild({ tsconfig }),
  ];

  return {
    external: externals,
    input: Object.fromEntries(
      globSync(`${input}/**/*.{ts,tsx}`, { ignore: [] }).map((file) => [
        relative(input, file.slice(0, file.length - extname(file).length)),
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
