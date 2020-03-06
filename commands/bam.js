module.exports = {
    name: 'bam',
    description: 'bams the user',
    execute(message, args) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const fs = require('fs');
    message.channel.send('I am going to kermit sudoku')
    },
};