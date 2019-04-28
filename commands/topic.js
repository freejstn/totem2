exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("coming soon lol");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "topic",
  category: "Meme",
  description: "Forces you to talk - at gunpoint.",
  usage: "topic"
};
