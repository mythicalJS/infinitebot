const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'help',
	discription: 'discription',
	execute(message, args) {
		const Helpembed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('INF bot commands:')
			.setDescription('Commands for INF! bot!')
			.setThumbnail('')
			.addFields(
				{ name: 'Mod comamnds:', value: '**`i$ban` (bans the tagged user!)\n`i$kick` (kicks the mentioned user!)**' },
				{ name: 'regular comamnds:', value: '**`i$avatar` (shows the avatar of the mentioned user and your one if no mentions!)\n`i$help` (prints this text)\n `i$servers` (send a message incuding the support server and more!)\n`i$Github` (sends a link to my GitHub)\n`i$invite` (Sends an invite link to add my bot to ur server)\n`i$say` (this says the message that you typed!)\n`i$sinfo` (Sends the server\'s info!)**' },
				{ name: 'Fun comamnds', value: '**`i$battledroid` (This is a StarWars refrance!)\n`i$fruits` (reacts to your message with fruits!)\n`i$sadness` (sends a message and a picture)\n`i$bump` (bumps your server!)\n`i$anime` (sends a random anime picture!)\n`i$snow` (This sends a snow GIF and a message!)\n `i$neko` (sends a random image of neko\n `i$happygif` (sends a happy anime GIF!)\n `i$hug` (Hugs the mentioned user!)\n `i$waifu` (sends a random picture of a waifu!)\n `i$meme` (sends a meme.)\n `i$cookie` (gives the member you mentioned a cookie!)\n `i$hug` (Sends a HUG gif!)\n `i$slap` (Slaps the user you mentioned!)**' },
				{ name: 'HELP', value: 'If you have any suggestions for **comamnds** and for any **bugs** to fix please contact __🅼🆈🆃🅷™#1537__ for help thanks!' },
				{ name: 'YouTube', value: 'My youtube is: [**ツMYTHICAL**](https://www.youtube.com/channel/UC7sSQFH6Vm1LPxAQqJVpMdA) hope you like this bot!)' },
				{ name: 'Bot version', value: 'this bot\'s version is: 1.0(beta)' },
			)
			.setTimestamp();
		message.author.send(Helpembed);
		message.react('✅');
	},
};
