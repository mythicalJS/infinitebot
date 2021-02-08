const randomanime = require('random-anime');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'anime',
	discription: 'discription',
	execute(message, args) {
		const anime = randomanime.anime();
		const embed = new Discord.MessageEmbed()
			.setTitle('Anime image:')
			.setDescription(`By: ${message.author.username}`)
			.setImage(anime);
		message.channel.send(embed);
	},
};
