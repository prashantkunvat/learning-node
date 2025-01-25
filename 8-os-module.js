const os = require("os");

const userName = os.userInfo();
console.log(userName);

const osUptime = os.uptime();

console.log(osUptime);

const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem(),
};

console.log(currentOs);
