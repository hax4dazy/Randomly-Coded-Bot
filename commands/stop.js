module.exports = {
	name: 'play',
	description: 'Stops the current song from playing',
	execute(message, args) {
		message.channel.send('Music has been stopped!');
	},
};