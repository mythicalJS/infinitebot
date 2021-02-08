const Discord = require('discord.js');
const ainasepics = require('ainasepics');
const { happy } = require('ainasepics');

module.exports = {
	name: 'happygif',
	discription: 'discription',
	execute(message, args) {

		const happyGif = ainasepics.happy();
		const embed = new Discord.MessageEmbed()

			.setTitle('anime GIF:')
			.setDescription(`requested by: ${message.author.username}`)
			.setImage(happyGif);
		message.channel.send(embed);
	},
};