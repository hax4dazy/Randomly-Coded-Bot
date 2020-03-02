module.exports = {
	name: 'play',
	description: 'Plays the given song in the vc the user is in (not this is not the song handeling. That is in the main JS file for the bot)',
	execute(message, args) {
		message.channel.send('Your song has been added to the queue!');
	},
};