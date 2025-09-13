require("./Encore")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//

// Bebas Ubah
global.owner = "2694065094"
global.nobot = "2694065094"
global.namaowner = "ᴇɴᴄᴏʀᴇ || また"
global.namaBot = "ᴇɴᴄᴏʀᴇ - ᴍᴅ|| また"
global.title = "ᴇɴᴄᴏʀᴇ || また"

// Jangan Di ubah
global.creator = `${owner}@s.whatsapp.net` 
global.foother = `© ${namaBot}`
global.versi = version
global.nama = namaBot 
global.namach = nama 
global.namafile = foother 
global.author = namaowner

// Bebas Ubah
// True = on || False = Off 
global.autoread = false
global.autotyping = false
global.Antilinkgc = false
global.Antilinkch = false
global.antispam = false
global.onlygc = false
global.autobio = false

// Set Payment
global.qris = "https://files.catbox.moe/iwpd4i.jpg"
global.dana = "085813708397"
global.gopay = "085813708397"

// ===={ Set Link }
global.ch = 'https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D'
global.idch = '120363186130999681@newsletter'
global.linkgc = 'https://chat.whatsapp.com/Dqs9rBPzA5kFCucZQD7OKq?mode=ems_copy_t'
global.yt = 'https://youtube.com/@fallzx-features'
global.nekorin = "https://api.nekorinn.my.id"
global.idgc = "120363399209756764@g.us"
// set prefix
global.setprefix = ".", "/", "#"

// User Sosmed
global.tt = "@fallzxlily"
global.yt = "@fallzx-features"
global.ig = "@fallxd_781"

// Setting Api cVPS
global.doToken = "APIKEY"
global.linodeToken = "APIKEY"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://"
global.apikey = "ptla" //ptla
global.capikey = "ptlc" //ptlc

// [ THEME URL & URL ] ========//
global.thumbnail = 'https://img1.pixhost.to/images/8567/638832946_lily.jpg'
global.thumnail2 = 'https://img1.pixhost.to/images/8575/638910466_lily.jpg'

// Settings reply ~~~~~~~~~//
global.mess = {
    owner: "Khusus Owner",
    prem: "Khusus Premium",
    group: "Khusus di Group Chat",
    admin: "Khusus Admin",
    botadmin: "Bot Harus Jadi Admin",
    private: "Khusus di Private Chat",
    done: "Sukses"
}

global.packname = nama
global.author = namaBot

//
global.gamewaktu = 60 // Game waktu
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
