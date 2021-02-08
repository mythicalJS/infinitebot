const _os = require('os');

exports.platform = function() {
	return process.platform;
};

exports.cpuCount = function() {
	return _os.cpus().length;
};

exports.sysUptime = function() {
	// seconds
	return _os.uptime();
};

exports.processUptime = function() {
	// seconds
	return process.uptime();
};


// Memory
exports.freemem = function() {
	return _os.freemem() / (1024 * 1024);
};

exports.totalmem = function() {

	return _os.totalmem() / (1024 * 1024);
};

exports.freememPercentage = function() {
	return _os.freemem() / _os.totalmem();
};

exports.freeCommand = function(callback) {
	_os.cpuUsage(callback);
};