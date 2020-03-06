module.exports = {
    name: 'bam',
    description: 'bams the user',
    execute(message, args) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const fs = require('fs');
    const user = message.mentions.users.first() || message.author;
    message.channel.send( user + ' ' + 'is ̶n͢ow b̕&̡.̷ 👍̡!');
    },
};