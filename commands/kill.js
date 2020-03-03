module.exports = {
	name: 'kill',
	description: 'Kills the bot, can\'t be restarted via command.',
	execute(message, args) {
		return;
		message.channel.send('Goodbye')
		process.exit()
	},
};