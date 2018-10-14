var os = require('os');

function getOSinfo() {

	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var upTime = os.uptime();
	var userInfo = os.userInfo();

	if(type === 'Darwin'){
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
	console.log('Sytem', type);
	console.log('Release', release);
	console.log('cpu', cpu);
	console.log('Sytem uptime: ~', (upTime/60).toFixed(0), 'min');
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;
