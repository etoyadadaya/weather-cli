import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan(' HELP ')}
		No parameters - weather output
		-s [CITY] to set the city
		-h to withdraw help
		-t [API_KEY] to save the token
		`
	);
};

const printWeather = (res, icon) => {
	console.log(
		dedent`${chalk.bgYellow(' WEATHER ')} Weather in the city: ${chalk.bgMagenta(res.name)}
		${icon}${res.weather[0].description.toUpperCase()}
		Temperature: ${Math.round(res.main.temp)}°C (Feels like: ${Math.round(res.main.feels_like)}°C)
		Humidity: ${res.main.humidity}%
		Wind speed: ${res.wind.speed} m/s
		`
	);
};

export { printError, printSuccess, printHelp, printWeather };
