module.exports = {
	name: 'kill',
	description: 'Kills the bot, can\'t be restarted via command.',
	execute(message, args) {
		process.exit()
	},
};