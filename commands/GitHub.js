module.exports = {
	name: 'github',
	discription: 'this is the basic help command!',
	execute(message, args) {
		message.channel.send({ embed: {
			color: 3447003,
			title: 'My GitHub!',
			description: 'You can cutomise my bot to be your own!',
			fields: [{
				name: 'GitHub',
				value: '**This is my GitHub! feel free to copy all the code from here! hope you enjoy your coding experiance! ```PS: this code is 100% JavaScript!``` [GitHub](https://github.com/MYTHICALWYT/discorrdjsBot)**',
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