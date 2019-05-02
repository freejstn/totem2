
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  //const msg = await message.channel.send("coming soon lol");
  
  let replies = ["Coming soon", "reee stop it's coming soon"];
  let result = Math.floor((Math.random() * replies.length));

  //  let question = args.slice(1).join(" ");
  const msg = await message.channel.send(replies[result]);

 // msg.edit(replies);
//[result]

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "beet",
  category: "Meme",
  description: "You don't want to know.",
  usage: "beet"
};
