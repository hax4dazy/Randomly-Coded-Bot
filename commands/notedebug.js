module.exports = {
  name: 'notedebug',
  aliases: ['debugnote', 'dnote', 'debuglog', 'logdebug'],
	description: 'Add notes about test session.',
	execute(message, args) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const fs = require('fs');
    fs.appendFileSync('./logs/' + sessionid + '.debuglog', 'Note by ' + message.author.username + '\nNote:' + args.join(' ') +'\n\n');
    message.reply('noted!');
    const debugnote = args.join(' ')
    const notedebug = new Discord.RichEmbed()
  	.setColor('#1a1aff')
  	.setTitle('Debug Mode Note')
	  .addField('Test session ID', sessionid)
    .addField('Current date/time', dateTime)
    .addField('Note', debugnote)
    .addField('Note added by', message.author.username)
    message.client.channels.get(`683751300063690885`).send(notedebug);
  }
    };