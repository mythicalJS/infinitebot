const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'isus',
	discription: 'discription',
	execute(message, args) {

		if(message.mentions.members.size == 1) {
			const member = message.mentions.members.first();
			message.channel.send(`${message.author} made ${member} sus...`);
		}
	},
};