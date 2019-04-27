exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  //const let pfp = message.author.displayAvatarURL
  const msg = await message.channel.send("Test", {files: ["http://test-ipv6.com/images/hires_ok.png"]});
};
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
