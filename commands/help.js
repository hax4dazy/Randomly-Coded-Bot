const { prefix } = require('../config.json');
module.exports = {
	name: 'help',
	description: 'List all available commands.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
    const data = [];
    const { commands } = message.client;

    if (!args.length) {
    // ...
    data.push('--Available Commands--');
data.push(commands.map(command => command.name).join('\n'));
data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

return message.author.send(data, { split: true })
	.then(() => {
		if (message.channel.type === 'dm') return;
		message.reply('I\'ve sent you my commands in your direct messages.');
	})
	.catch(error => {
		console.error(`Direct message error\: ${message.author.tag}.\n`, error);
		message.reply('I can\'t seem to reach you via DMs. Do you happen to have DMs disabled?');
	});
}
	},
};