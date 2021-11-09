#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const ui_1 = require("../lib/ui");
const bootstrap = () => {
    const program = new commander_1.Command();
    program
        .usage("<command> [options]")
        .version(require("../package.json").version, "-v, --version", "Output the current version.")
        .helpOption("-h, --help", "Output usage information.");
    program
        .command("ui")
        .description("start and open the kunpeng-cli ui")
        .option("-p, --port <port>", "Port used for the UI server (by default search for available port)")
        .action((options) => {
        ui_1.default(options);
    });
    program.parse(process.argv);
    if (!process.argv.slice(2).length) {
        program.outputHelp();
    }
};
bootstrap();
