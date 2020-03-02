module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	execute(message, args) {
        message.channel.send('This command is currently unavailable.')
        return;
	},
};