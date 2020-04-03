//guildMemberAdd = bir kişi sunucuya girdiğinde çalışacak fonsksiyon
//guildMemberRemove = bir kişi sunucudan çıktığında çalışacak fonsksiyon

module.exports = (client,member) => {

    var kanal = client.channels.get("694987241470165113")

    console.log(member.user.bot)
    if(member.user.bot === true) {
        kanal.send("Bu kişi bir bot ve bu sunucuya giriş yaptı. ")
    }
       kanal.send(`:inbox_tray: | <@${member.id}> adlı kişi sunucuya giriş yaptı.`)
}