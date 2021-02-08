const Discord = require('discord.js');
const client = new Discord.Client();
const { Random } = require('random-discord');
const random = new Random();

module.exports = {
	name: 'meme',
	discription: 'discription',
	execute(message, args) {
		async function meme() {

			const data = await random.getMeme();
			message.channel.send(data);
		}
		meme();
	},
};