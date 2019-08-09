const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('» Nsfw Komutları', 'h!kafasınasık')
.addField('» Nsfw Komutları', 'h!kapaklaflar')
.addField('» Nsfw Komutları', 'h!kartopu')
.addField('» Nsfw Komutları', 'h!kralol')
.addField('» Nsfw Komutları', 'h!kullanıcıbilgim')
.addField('» Nsfw Komutları', 'h!nahçek')
.addField('» Nsfw Komutları', 'h!saat')
.addField('» Nsfw Komutları', 'h!yala')
.addField('» Nsfw Komutları', 'h!yazıtura')
.addField('» Nsfw Komutları', 'h!yetkilerim')
.addField('» Nsfw Komutları', 'h!söv')
.addField('» Nsfw Komutları', 'h!sunucuresmi')
.addField('» Nsfw Komutları', 'h!sunucubilgi')
.addField('» Nsfw Komutları', 'h!sunuculistesi')
.addField('» Nsfw Komutları', 'h!tr')
.addField('» Nsfw Komutları', 'h!yaz')
.addField('» Nsfw Komutları', 'h!üyedurum')
.addField('» Nsfw Komutları', 'h!rip')
.addField('» Nsfw Komutları', 'h!wasted')
.setFooter('© 2018 Fredux', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım2',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım2'
};