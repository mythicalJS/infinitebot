module.exports = {
	name: 'ban',
	discription: 'bans the member you tagged!',
	execute(message, args) {
		if(!message.member.hasPermission('KICK_MEMBERS')) {
			message.channel.send('You dont have enough permissions to do that!');
			return;
		}
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			if (member) {
				member
					.ban({
						reason: 'They were bad!',
					})
					.then(() => {
						message.reply(`Successfully banned ${user.tag}`);
					})
					.catch(err => {
						message.reply('I was unable to ban the member');
						console.error(err);
					});
			} else {
				message.reply('That user isn\'t in this guild!');
			}
		} else {
			message.reply('You didn\'t mention the user to ban!');
		}
	},
};