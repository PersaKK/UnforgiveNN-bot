const Discord = require("discord.js");

module.exports = {
    komut: "cleanup", 
    açıklama: "Kanaldaki mesajları siler", 
    kategori: "genel", 
    alternatifler: ['temizle','sil'],
    kullanım: "!!!temizle", 
    yetki: 'MANAGE_MESSAGES',
    args: [
{
    anahtar:"çıktı",
    soru:"Kaç adet mesaj silmek istersiniz?",
    tip:"sayi"
}       
    ]
};
module.exports.baslat = (client, message,args) => {

if(!message.guild){
    return;
}
var silinecekmesaj = Number(args.çıktı);

if(silinecekmesaj < 0) {
    message.channel.send("Lütfen sıfırdan büyük bir değer girin")
    return;
}
if(silinecekmesaj > 100) {
    message.channel.send("Lütfen 100'den aşağı bir değer giriniz")
    return;
}   
var silinecekmesaj = Number(args.çıktı) +1;

message.channel.bulkDelete(silinecekmesaj);
message.channel.send(`Kanaldan ${args.çıktı} tane mesaj başarı ile silindi. \n Yetkili @${message.author.username}`)

}

                 
