module.exports = {
	name: 'notedebug',
	description: 'Add notes about test session',
	execute(message, args) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    ssconst fs = require('fs');
    fs.appendFileSync('./logs/' + sessionid + '.txt', 'Note by' + message.author.username + '\nNote:' + args.join(' ') +'\n\n');
    const debugnote = args.join(' ')
    const notedebug = new Discord.RichEmbed()
	.setColor('#1a1aff')
	.setTitle('Debug Mode Note')
	.addField('Test session ID', sessionid)
    .addField('Current date/time', dateTime)
    .addField('Note', debugnote)

    client.channels.get(`683751300063690885`).send(notedebug);
  }
    };