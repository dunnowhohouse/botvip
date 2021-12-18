//module cho mấy thằng lười đăng ký api
module.exports.config = {
    name: "covid",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JustGon", //Giữ Credit tôn trọng thằng làm ra
    description: "Lấy thông tin tình hình dịch covid",
    commandCategory: "Đa Phương tiện",
    usages: "[country]",
    cooldowns: 5,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args }) {

    var axios = require("axios");
    var fs = require("fs")
    var request = require("request")

    if (!args[1]) {
      let { data } = await axios.get('https://corona.lmao.ninja/v2/countries/viet%20nam')
    var nhiemvn = data.cases,
        chetvn = data.deaths,
        dieutrivn = data.recovered,
        dansovn = data.population,
        chauluc = data.continent
        var callback = () => api.sendMessage({body: 'Việt Nam\n' + `Nhiễm: ${nhiemvn}\n` + `Điều trị khỏi: ${dieutrivn}\n` + `Tử vong: ${chetvn}\n` + `Dân số : ${dansovn}\n` + `Châu Lục : ${chauluc}`,attachment: fs.createReadStream(__dirname + "/cache/covidjg.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/covidjg.png"),event.messageID);
    request(encodeURI('https://disease.sh/assets/img/flags/vn.png')).pipe(fs.createWriteStream(__dirname+'/cache/covidjg.png')).on('close',() => callback());
    } else {
    try {
        var location = args.join(" ")
        let { data } = await axios.get(`https://corona.lmao.ninja/v2/countries/${location}`)
        var nhiem = data.cases,
            chet = data.deaths,
            dieutri = data.recovered,
            danso = data.population,
            chauluc = data.continent
            var flag = data.countryInfo.flag
            var callback = () => api.sendMessage({body: `-----${location}-----\n` + `Nhiễm: ${nhiem}\n` + `Điều trị khỏi: ${dieutri}\n` + `Tử vong: ${chet}\n` + `Dân số : ${danso}\n` + `Châu Lục : ${chauluc}`,attachment: fs.createReadStream(__dirname + "/cache/covidjg.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/covidjg.png"),event.messageID);
            request(encodeURI(flag)).pipe(fs.createWriteStream(__dirname+'/cache/covidjg.png')).on('close',() => callback());
    } catch {
    api.sendMessage("Country not found or doesn't have any cases", event.threadID, event.messageID)
    }
    }
}