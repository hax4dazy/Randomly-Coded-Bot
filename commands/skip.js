module.exports = {
	name: 'play',
	description: 'Skips the current song',
	execute(message, args) {
		message.channel.send('The current song has been skipped!');
	},
};