#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { buildPackage } from "./build-package";

yargs(hideBin(process.argv))
  .command(
    "pkg [pkg]",
    "build a package",
    (yargs) => {
      return yargs.positional("pkg", {
        describe: "package name to build",
        default: "all",
      });
    },
    async (argv) => {
      if (argv.pkg !== "all") {
        await buildPackage(argv.pkg);
      }
    }
  )
  .option("pkg", {
    alias: "p",
    type: "string",
    describe: "package name to build",
    choices: ["all", "web", "ami-mugi"],
    demandOption: true,
  })
  .parse();
