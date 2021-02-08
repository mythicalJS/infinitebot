const Discord = require('discord.js');
const client = new Discord.Client();
const randomanime = require('random-anime');
const ainasepics = require('ainasepics');

module.exports = {
	name: 'hug',
	discription: 'sends a hug gif!',
	execute(message, args) {
		const hug1Gif = ainasepics.hug();
		console.log(hug1Gif);

		const embed = new Discord.MessageEmbed()
			.setTitle('hug gif:')
			.setColor(0x00AE86)
			.setFooter(`Requested by: ${message.author.username}`)
			.setImage(`${hug1Gif}`);

		message.channel.send(embed);
	},
};