#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { buildPackage } from "./build-package";

yargs(hideBin(process.argv))
  .command(
    "pkg [pkg_name]",
    "build a package",
    (yargs) => {
      return yargs.positional("pkg_name", {
        describe: "package name to build",
        default: "all",
      });
    },
    async (argv) => {
      if (argv.pkg_name !== "all") {
        await buildPackage(argv.pkg_name);
      }
    }
  )
  .option("pkg_name", {
    alias: "p",
    describe: "package name to build",
    type: "string",
  })
  .parse();
