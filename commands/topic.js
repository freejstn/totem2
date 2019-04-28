exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  //const msg = await message.channel.send("coming soon lol");
  
  let replies = ["sample text 1", "sample text 2", "sample text 3"];
  //let result = Math.floor((Math.random() * replies.length));

//  let question = args.slice(1).join(" ");
const msg = await message.channel.send(replies[result]);

 // msg.edit(replies);
//[result]

}
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
