const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('» Eğlence Komutları', 'h!avatar')
.addField('» Moderatör Komutları', 'h! ateş-et')
.addField('» Genel Komutlar', '.balıktut')
.addField('» Ekstra Komutlar', 'h! boks-makinesi')
.addField('» Nsfw Komutları', 'h! efkarÖLÇER')
.addField('» Nsfw Komutları', 'h!elraenn')
.addField('» Nsfw Komutları', 'h!wtcn')
.addField('» Nsfw Komutları', 'h!emojiyazı')
.addField('» Nsfw Komutları', 'h!sev')
.addField('» Nsfw Komutları', 'h!hapishane)')
.addField('» Nsfw Komutları', 'h!havadurumu')
.addField('» Nsfw Komutları', 'h!kaçcm')
.addField('» Nsfw Komutları', 'h!kafadansı')
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};