const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsams@gmail.com"
global.location="Lahore,Pakita"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Tanzania ";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Kalulu😎" 


global.devs = "255626753818" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255626753818";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.auto_react_status = process.env.AUTO_REACT_STATUS || 'true',
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255626753818,255xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_29_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1LFxuICAgICAgICAxMixcbiAgICAgICAgMjE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgMjI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibUxpS1V5eGM4ZVhOQ3BLeTRISytsK2V4NEdRVUIyL0FMYXV0SXh4alBiYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjY3NTM4MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE1NjVGODgzOTNBNUQwOEY1MEMwMDlCMzY4NjY3RkRGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc4MDgyODE4MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFQWQ1VzhwR1NiYTZiaUkxdkRiM0xRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjY2U2YzU2LTcxY2QtNGZiNC1iNzRjLTg3MjcyN2FhZWU4NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAxMjYsXG4gICAgICA2OSxcbiAgICAgIDE4MCxcbiAgICAgIDIxMCxcbiAgICAgIDEwMCxcbiAgICAgIDIwMSxcbiAgICAgIDE2MCxcbiAgICAgIDgzLFxuICAgICAgMjMwLFxuICAgICAgMTE3LFxuICAgICAgMjMwLFxuICAgICAgMTM2LFxuICAgICAgMjUzLFxuICAgICAgMjE0LFxuICAgICAgOTAsXG4gICAgICAyMjMsXG4gICAgICAxNjgsXG4gICAgICAxMTUsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDEyMyxcbiAgICAgIDI0NCxcbiAgICAgIDEyMyxcbiAgICAgIDEwMixcbiAgICAgIDQzLFxuICAgICAgNTYsXG4gICAgICAyMjIsXG4gICAgICAyOCxcbiAgICAgIDE5LFxuICAgICAgMTU1LFxuICAgICAgMjksXG4gICAgICAxNTgsXG4gICAgICAyMDgsXG4gICAgICAyMzQsXG4gICAgICAyMDgsXG4gICAgICAxNjcsXG4gICAgICAxMTIsXG4gICAgICAyNTEsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYS93OGNCRUlhUWxkRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndlUDRjc0l2Q1pNOFNTSUd6eU5hcmlsS29aYXBGNkx2TmpGZ0ZwaGdYMlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQk0zU1U1M0lGYzRZUU93L0l5eVIwSFoxS3J2WXJnK0hhYkpsZldoeVZhbk5ONGtRaW1rYmR4NnE2dVMyMDlKVHVvaWs1T0orR0Y4dTBDMnhFSjVhQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWWRyUmFrSkJKUThYVWgzK2ZSajZMVHFIU0dMNzZjWEFDamM5MlQrK1kzalF1SzUzNHF6RTNUK0tIcVB3VjRwZVcvT2dxN0hzN3Z0RnRsdE1TS2VPZ0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MjY3NTM4MTg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkthbHVsdSBKclwiLFxuICAgIFwibGlkXCI6IFwiMjMwMTUwMjM1MDA1MDM0OjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjY3NTM4MTg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzgwODI4MTc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXVIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBdUguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHcHArREUvdDhlWW9nQ0k5WXlkUWxxSXJ4Sy90em51Ukt6cEtqbjlGUS80PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxODQzOTA0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzgwODI4MTc2Njg1XCJ9Igp9"

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Kalulu 😎" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Kalulu - MD",
  ownername:process.env.OWNER_NAME|| "*KALULU*",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
