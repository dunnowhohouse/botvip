/** Mod lại module "bot.js" nếu muốn nó hiển thị ảnh **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/

module.exports.config = {
	name: "adm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DECAO",
	description: "Thông tin người điều hành bot",
	commandCategory: "Hệ thống",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`
Thông tin quản trị viên:
Họ và tên: Nguyen Ba Son
Thường trú: Hà Nội, Việt Nam
Giới tính: Nam
Facebook: /nbsdesignervn
`, event.threadID, event.messageID);