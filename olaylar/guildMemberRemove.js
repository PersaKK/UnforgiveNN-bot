//guildMemberAdd = bir kişi sunucuya girdiğinde çalışacak fonsksiyon
//guildMemberRemove = bir kişi sunucudan çıktığında çalışacak fonsksiyon

module.exports = (client,member) => {

    var kanal = client.channels.get("694987241470165113") 
       kanal.send(`:outbox_tray: | **${member.user.username}** adlı kişi sunucudan malesef ki ayrıldı. `)
}