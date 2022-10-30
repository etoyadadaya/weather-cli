import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(`${chalk.bgRed(' ERROR ')} ${error}`);
};

const printSuccess = (message) => {
    console.log(`${chalk.bgGreen(' MESSAGE ')} ${message}`);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        No parameters - weather output
        -s [CITY] to set the city
        -s to output HELP
        -t [API_KEY] save the token
        `
    );
};

export { printError, printSuccess, printHelp };
