const Discord = require('discord.js');

module.exports = {
	name: 'sinfo',
	discription: 'discription',
	execute(message, args) {
		message.channel.send({ embed: {
			color: 3447003,
			title: 'Server info:',
			description: 'This is all the Infomation you need to know about our server!',
			fields: [
				{
					name: 'owner name::',
					value: `${message.guild.owner.user.tag}`,
				},
				{
					name: 'member count:',
					value: `${message.guild.memberCount}`,
				},
				{
					name: 'Server creation date:',
					value: `${message.guild.createdAt}`,
				},
				{
					name: 'Channel count:',
					value: `${message.guild.channels.count}`,
				},
				{
					name: 'bot help',
					value: 'If you have any suggestions for **comamnds** and for any **bugs** to fix please contact __🅼🆈🆃🅷™#1537__ for help thanks!',
				},
				{
					name: 'Bot version',
					value: 'this bot\'s version is: 1.0(beta)',
				},
			],
			timestamp: new Date(),
		},
		});
	},
};