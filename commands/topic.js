exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  //const msg = await message.channel.send("coming soon lol");
  
  let replies = ["What are the magic numbers on your parents credit card?", "On a scale of 1-10, how much of a weeb are you?", "Where did you hide the bodies?", "On a scale of `The best` to `Better than the best` how much of a great supreme is Kiwi?", "How do I hide multiple Orange coprses?", "That Malice kid is pretty trash, amight?", "Grass who?", "Which bot is best? (HINT: It starts with Scrotum and ends with Totem)", "How is the Scrotum Totem so damn amazing?", "Who is the most attractive Green","If you had to choose one person to exile from Green, not due to personal opinion but solely because based on their crimes against humanity, who would it be?", "Is there anybody in the world who can challenge beet for the title of biggest weeb?", "Why did papa Heli leave us :(", "Which color would create the most chaos if it was suddenly merged with Green?", "If you could plant a spy in any colours government, who would you choose and which colour?", "What is the best psychological test to determine how much of a weeb someone is?"];
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
  category: "Memes",
  description: "Forces you to talk - at gunpoint.",
  usage: "topic"
};
