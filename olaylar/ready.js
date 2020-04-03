const chalk = require('chalk')
module.exports = (client) => {
      
    // WATCHING : !ping izliyor
    // LISTENING : !ping dinliyor
    // PLAYING : !ping oynuyor

    client.user.setActivity("!!!ping",{type: "WATCHING"} );

    var logmesajı = chalk.bold.red("Oynuyor kısmı basarı ile ayarlandı. \n")+
                chalk.italic.yellow("Persak : " + client.user.presence.game )          
    console.log(logmesajı)
}