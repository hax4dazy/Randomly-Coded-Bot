module.exports = {
	name: 'argtest',
	description: 'Tests the arugements',
	execute(message, args) {
        message.channel.send('You included: '+args)
	},
};