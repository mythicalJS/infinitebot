module.exports = {
	name: 'servers',
	discription: 'list of servers i made or od in!',
	execute(message, args) {
		message.channel.send({ embed: {
			color: 3447003,
			title: 'Best servers.',
			description: 'The srvers im owner in or i made!',
			fields: [{
				name: 'Hangout',
				value: '**Hangout is a chill, fun, community server! join here >>>[HANGOUT](https://discord.gg/TynNY5NP8v)<<<**',
			},
			{
				name: '𝓘𝓡𝓞𝓗\'𝓢 ℂ𝕃𝔸ℕ',
				value: '**𝓘𝓡𝓞𝓗\'𝓢 ℂ𝕃𝔸ℕ is a fun, chill, communty server! join here >>>[𝓘𝓡𝓞𝓗\'𝓢 ℂ𝕃𝔸ℕ](https://discord.gg/T3w43tRn4z)<<<**',
			},
			{
				name: 'Code Crew',
				value: '**Code Crew is a coding, fun, community server supports all type of coding javascript, html, python and more! you can join our server here >>>[Coding Crew](https://discord.gg/NWSsyKKfSY)<<<**',
			},
			{
				name: 'INF!',
				value: '**INF! is the support server for this bot, its also a community server! join here >>>[INF!](https://discord.gg/6baWhyzzcw)<<<**',
			},
			{
				name: 'bot help',
				value: 'If you have any suggestions for **comamnds** and for any **bugs** to fix please contact __🅼🆈🆃🅷™#1537__ for help thanks!',
			},
			{
				name: 'Bot version',
				value: 'this bot\'s version is: 1.0(beta)',
			},
			],
			timestamp: new Date(),
		},
		});
	},
};