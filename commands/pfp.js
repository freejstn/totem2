const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  if (args.length > 0) {
    if 
    
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
  description: "It sneaks up, takes a photo of you, and then gives it out.",
  usage: "pfp @user"
};
