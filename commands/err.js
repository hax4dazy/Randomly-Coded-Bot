module.exports = {
    name: 'err',
    description: 'Error lookup using BETCH',
    execute(message, args) {
        const bent = require('bent');
        const getJSON = bent('json');
        const ErrorName = msg.content.split(' ')[1];
        getJSON('err.teamatlasnx.com/api/betch/' + ErrorName)
        .then(body => {
            const errorinfo = body.errorinfo[0];

    	const ErrorLookupEmbed = new Discord.RichEmbed()
            ErrorLookupEmbed.setDescription(errorinfo.ErrorName)
        message.channel.send(ErrorLookupEmbed)
        })
    },
};