#!/usr/bin/env node
import { Command } from "commander";
import UI from "../lib/ui";

const bootstrap = () => {
  const program = new Command();
  program
    .usage("<command> [options]")
    .version(
      require("../package.json").version,
      "-v, --version",
      "Output the current version."
    )
    .helpOption("-h, --help", "Output usage information.");

  program
    .command("ui")
    .description("start and open the kunpeng-cli ui")
    .option(
      "-p, --port <port>",
      "Port used for the UI server (by default search for available port)"
    )
    .action((options) => {
      UI(options);
    });
  program.parse(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
};

bootstrap();
