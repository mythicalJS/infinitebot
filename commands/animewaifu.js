const Discord = require('discord.js');
const client = new Discord.Client();
const { Random } = require('random-discord');
const random = new Random();

module.exports = {
	name: 'waifu',
	discription: 'discription',
	execute(message, args) {
		async function waifupic() {

			const data = await random.getAnimeImgURL('waifu');
			message.channel.send(data);
		}
		waifupic();
	},
};