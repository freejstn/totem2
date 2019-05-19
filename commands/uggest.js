exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

//vars
var reportChannelName = 486578098217811978;
var reportChannelID = 486578098217811978;
var suggestChannelID = 529547120429236225;
var suggestionCount = 0; //this will reset whenever the bot goes down, but it's cool so lmao

client.channels.get("529547120429236225").send("Suggestion Number " + suggestionCount + ":" + arguments);
    message.delete();
    message.channel.author.send("Thank you for your Anonymous Suggestion!");
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "uggest",
  category: "Meme",
  description: "suggest something",
  usage: "uggest"
};

