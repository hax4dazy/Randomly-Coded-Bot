const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('error', error => {
    console.error('an error has occured', error);
});


// login to Discord with your app's token
client.login(token);
var fs = require("fs");

