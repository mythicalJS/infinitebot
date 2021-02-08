module.exports = {
	name: 'battledroid',
	discription: 'you will see 😀',
	execute(message, args) {
		message.channel.send('roger roger');
		message.channel.send('https://media.giphy.com/media/181OUQHOCfde0/giphy.gif');
		{
			message.react('🔫');
		}
	},
};