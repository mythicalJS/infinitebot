module.exports = {
	name: 'args',
	discription: 'info about the args.',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You have not provided any arguments, ${message.author}`);
		} else if (args[0] === 'rex') {
			return message.channel.send('*Trex noises*');
		} else if (args[0] === 'rextronics007') {
			return message.channel.send('is a lovely guy!');
		} else if (args[0] === 'info') {
			return message.channel.send('do the `r$help` command for all command lists! Bot version `1.0(BETA)`');
		}

		message.channel.send(`Arguments: ${args}\n**Arguments Length = ${args.length}**`);
	},
};