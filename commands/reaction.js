module.exports = {
	name: 'fruits',
	discription: 'reacts to your message with fuites!',
	execute(message, args) {
		{
			message.react('🍎');
			message.react('🍊');
			message.react('🍇');
		}
	},
};