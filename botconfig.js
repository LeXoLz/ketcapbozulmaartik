module.exports = {
  Admins: ["683287574076588103", "726822784474284145"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/VwqQkkVN5R", //Support Server Link
  Token: process.env.Token || "ODYwOTY0ODYxOTQ1MTg0Mjk2.YOC6Aw.TgFVUtIwXcFnT--g8jFTzK32PbI", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "860964861945184296", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "oAZvWXo0EyO2GpNBwqWDCDrjojDV3XgZ", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "neolusissus", //A Secret like a password
  IconURL:   "https://cdn.discordapp.com/avatars/860964861945184296/79ac00f6e49ca03a8b103995a9342557.png?size=128", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RED", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 8, //Bot Inviting Permissions
  Website: process.env.Website || "https://upgraded-ketcap.lexolz.repl.co", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  //If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.
  
  Presence: {
    status: "dnd", // You can show online, idle, and dnd
    name: "k!play ↪ neolus", // The message shown
    type: "STREAMING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

   // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink/
  // The default one should work fine, altho if you have issue with it, you can create your own or use another public lavalink.
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "lavalink.oops.wtf", //- The host name or IP of the lavalink server.
    port: 2000, // The port that lavalink is listening to. This must be a number!
    pass: "www.freelavalink.ga", //- The password of the lavalink server.
    secure: false, // Set this to true if the lavalink uses SSL. if not set it to false.
  },


  Spotify: {
    ClientID: process.env.Spotify_ClientID || "7449e4725086408f867b8e66d246d798", 
    ClientSecret: process.env.Spotify_ClientSecret || "62f64db7d88e42a3996c14106ff5fc23", 
  },
};
