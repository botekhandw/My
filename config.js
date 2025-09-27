lconst fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3-WAQAR-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJiMjBnRThwMkNGVlBtSmZZTkRGbW5jTzdvN2Fzb0owV0xiSmdKWm9Hdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGFyU3Rydi9aY2NLYitVektHUXQ1RVI1SEJ3c0cxMEhvdUN2YjhLNFFqMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRmFMbUxIK2RTcXFUdWoxUmNwbGVnc1lZekNLY2g2K0lJblA4dzVWelVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwQVhjZE1aZ1IvT1V1QXB3NmZOOGlWcjBkazZSUzAyM0hiOVJGMldJVXpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVQUFd5NHAySGRHMy9vUUFQV0R0THVGdWdwQ25xa1ZQb3RFOFE4UVhMMkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJmWERRSGpzSXliMlAxMmdTYWNJUVltUjNOLzNVOUdDcURDM011NDZWUkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0RVQXplZk1hdlNzcDhFNE1MeVFnMzdoeG9VdE90Ylg5RjBrcHJoMFpVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVlUM3g4Qi9vcDIxMVV3QnRXSVFZOTBPT3NldDVrMnp1blRmNFJDNmFHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxLeHZNSWo3ZnhUWTJjbThJTGlPU2UxcTl3cVl5TU1OMzZmOUFWMFYvNkk3SDFVNTFNQlg1cVF0amoyU0gyRlAxdlVMQk9RMHZVcWhyYlE2SEdYekFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE3LCJhZHZTZWNyZXRLZXkiOiIreEhncFcxSzRvcUlZZjhiQnB6dlVwTW5VTzlPdUhxclpRL2xkK21VbzhJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJISkxESjI4TSIsIm1lIjp7ImlkIjoiOTQ3ODUzMTY4MzA6ODBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDU1OTYzNDMxNTY4OTM6ODBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbm52UEVHRU1IdDNNWUdHQ0VnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxRmd4Z0UySVk2WWI5Sy9tbkljdCtxT2E3eEtpOHdDQzdtbUtWV0tGNjBVPSIsImFjY291bnRTaWduYXR1cmUiOiJaSyt5Y2hyc3hPUHBZMHN5eWRSWGNnMUltUVdwZVBNaTNPQllOZEM2UjFnL2FNUmxuTGMzd2xFMVdvbU5XcXU4aElUM2U2Yk1ybU9vZEkwQUhudktDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidXRFYWZYWmlaRUpyc2hyVVl6RDNYZU9yc25VaUJqKzhBRTVLRDNYSlFIV2dVRXhzL1F4aHQxSkw2blhLdUl6c3gvZVA1RncrdUd2SVpORHZoK2FTQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NTMxNjgzMDo4MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhaFlNWUJOaUdPbUcvU3Y1cHlITGZxam11OFNvdk1BZ3U1cGlsVmloZXRGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg5MzQ3MjYsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-WAQAR-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yoie7u.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3-WAQAR-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E3-WAQAR-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-WAQAR-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-WAQAR-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yoie7u.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923495178663",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
