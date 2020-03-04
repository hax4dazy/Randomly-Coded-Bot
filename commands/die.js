module.exports = {
    name: 'die',
    aliases: ['kill', 'fuck'],
    description: 'Kills the bot',
    execute(message, args) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const fs = require('fs');
    message.channel.send('I am going to kermit sudoku')
	setTimeout(() => { process.exit()}, 1000);
    },
};