const { neko } = require('akaneko');

module.exports = {
	name: 'neko',
	discription: 'discription',
	execute(message, args) {
		// Akaneko //
		const akaneko = require('akaneko');

		async function yourFunctionName() {
			message.channel.send(await akaneko.neko());
		}
		yourFunctionName();
	},
};