const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  if (args.length > 0) {
  const url = message.author.avatarURL;

  var embed = new RichEmbed()
            .setImage(url)
            .setColor('#68AD36')
  let msg = await message.channel.send({ embed });
  }
  
  else {
    const otherUrl = message.mentions.members.first();
  
    var embed = new RichEmbed()
            .setImage(otherUrl)
            .setColor('#68AD36')
   let msg = await message.channel.send({ embed });
    
};

  //const let pfp = message.author.displayAvatarURL
  //const msg = await message.channel.send("Test", {files: [message.author.displayAvatarURL]});
//Looking good ;)


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "pfp",
  category: "Miscelaneous",
  description: "It takes a photo of ya and then gives it out",
  usage: "pfp"
};
