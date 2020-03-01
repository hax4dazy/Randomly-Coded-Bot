# Commands
This bot loads all its commands from the directory `/commands`.'

Example name of command file: `command.js`

Example code:
```module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};```
