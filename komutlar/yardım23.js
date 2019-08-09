const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
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
  name: 'yardım3',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım3'
};