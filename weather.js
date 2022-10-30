#!/usr/bin/env node
import { getArgs } from './helpers/args.js'

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);

    if (args.h) {
        // HELP output
    }

    if (args.s) {
        // SAVE city
    }

    if (args.t) {
        // SAVE token
    }

    // OUTPUT weather
};

initCLI();
