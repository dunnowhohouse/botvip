module.exports.config = {
	name: "upt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai - JRT",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "Hệ thống",
	cooldowns: 5,
	dependencies: {
		"pidusage": "",
		"fast-speedtest-api": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event,arg, Users }) => {
	const axios = global.nodemodule["axios"];
	const fast = global.nodemodule["fast-speedtest-api"];
	const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 2500,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
	const ketqua = await speedTest.getSpeed()
  const request = require('request');
    let name = await Users.getNameUser(event.senderID)
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - D/MM/YYYY ");
	const timeStart = Date.now();
	let today = new Date();
 return api.sendMessage("", event.threadID, () => api.sendMessage(`
❯ Chào ${name}
❯ ${gio}
❯ Uptime: ${hours}:${minutes}:${seconds}
❯ Prefix:    ${global.config.PREFIX}
❯ Version: BangDEV
❯ N dùng:  ${global.data.allUserID.length}
❯ Nhóm:   ${global.data.allThreadID.length}
❯ Cpu:       ${pidusage.cpu.toFixed(1)}
❯ Ram:      ${byte2mb(pidusage.memory)}
❯ Ping:      ${Date.now() - timeStart}ms
❯ Tốc độ : ${ketqua} Mbps`, event.threadID, event.messageID));
}