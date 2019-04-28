exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  //const msg = await message.channel.send("coming soon lol");
  
  let replies = ["What are the magic numbers on your parents credit card?", "On a scale of 1-10, how much of a weeb are you?", "Where did you hide the bodies?", "On a scale of `The best` to `Better than the best` how much of a great supreme is Kiwi?", "How do I hide multiple Orange coprses?", "That Malice kid is pretty trash, amight?", "Who's Grass?"];
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
  name: "topic",
  category: "Meme",
  description: "Forces you to talk - at gunpoint.",
  usage: "topic"
};
