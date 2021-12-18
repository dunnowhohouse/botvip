const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ERROR ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ERROR ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ DECAO ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ DECAO ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ DECAO ] » `) + data);
			break;
	}
}