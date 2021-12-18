module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Khởi động lại Bot",
	commandCategory: "Hệ thống",
	usages: "",
	cooldowns: 5
};


module.exports.run = async ({ api, event, args }) => {

             const permission = ["100005463556532"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Bạn Chưa Đủ Tuổi! 😼", event.threadID, event.messageID);
 

	const { threadID, messageID } = event;
	return api.sendMessage(`Đã yêu cầu hệ thống khởi động lại\nThành công hay ko thì ko thì ...  còn tùy!`, threadID, () => process.exit(1));
}