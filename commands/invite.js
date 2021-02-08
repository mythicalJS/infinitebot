module.exports = {
	name: 'invite',
	discription: 'this command sends this bot\'s invite link!',
	execute(message, args) {
		message.channel.send({ embed: {
			color: 3447003,
			title: 'Invite link:',
			description: 'You can invite this bot by clicking [here](https://discord.com/api/oauth2/authorize?client_id=776437420098584588&permissions=8&scope=bot)!',
			fields: [{
				name: 'Bot version',
				value: 'this bot\'s version is: 1.0(beta)',
			},
			{
				name: 'bot help',
				value: 'If you have any suggestions for **comamnds** and for any **bugs** to fix please contact __🅼🆈🆃🅷™#1537__ for help thanks!',
			},
			],
			timestamp: new Date(),
		},
		});
	},
};