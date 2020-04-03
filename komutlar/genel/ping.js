const Discord = require("discord.js");

module.exports = {
    komut: "ping", 
    açıklama: "Botun pingini ölçer", 
    kategori: "genel", 
    alternatifler: ['ping','p'],
    kullanım: "!!!ping", 
    yetki: '',
};
                 
module.exports.baslat = (client, message) => {
    //mesaj gönderme
   const embed = new Discord.RichEmbed()
   message.channel.send({embed: {
    color: 000000,
    author: {
      name: message.author.username + '#3602',
      icon_url: message.author.avatarURL
    },
    title: "Davet linki",
    url: "https://discordapp.com/oauth2/authorize?client_id=692826968894210170&scope=bot&permissions=2080898303",
    description: "Botumuzun ve sizin ping değerleriniz eşittir.",
    thumbnail: "https://cdn.discordapp.com/attachments/694480596860272692/695213412623581244/35489016-352-k712995.jpg",
    fields: [{
        name: "Pinginiz",
        value: ('Botun gecikme süresi:', Math.round(client.ping) + 'MS')
      },
      {
        name: "Botu yaparken kullandığım dil",
        value: "JScript"
      },
      {
        name: "Botun gecikme süresi",
        value:('Botun gecikme süresi:', Math.round(client.ping) + 'MS')
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "**_Developed by Persak#3602**"
    }
  }
})
} ;