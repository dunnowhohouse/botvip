const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "AI",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "DECAO",
  description: "AI.js",
  commandCategory: "Tự động",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

////////////////////////////////////// BOT //////////////////////////////////////
  var tl = ["Bạn kêu tôi có việc gì?", "Sử dụng callad để liên lạc với DECAO.", "Em là BOT cute nhất hành tinh.", "Nói gì thế con lợn.", "Em đây.", "Sao thế công chúa.", "Đừng spam em nha, cậu chủ em mệt lắm rồi.", "Nói đi em ơi.", "Tao đang nghe."];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };
////////////////////////////////////// BOT //////////////////////////////////////

////////////////////////////////////// AI ///////////////////////////////////////

  if ((event.body.toLowerCase() == "Ừ") || (event.body.toLowerCase() == "Ừ")) {
    return api.sendMessage("Vcl ừ? Biết dạ không vậy?", threadID);
  };

////////////////////////////////////// AI ///////////////////////////////////////
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }