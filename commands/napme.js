exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
 
  
 let replies = ["You have been Snapped.", "You have been Spared."];
 let result = Math.floor((Math.random() * replies.length));

 const msg = await message.channel.send("***SNAP***").then(() => msg.react('584174001547640852').then(() => msg.react('584174001199251506')));
 msg.edit(replies[result]);
  //const msg = await message.channel.send(replies[result]).then(() => msg.react('584174001128210442');

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "napme",
  category: "Memes",
  description: "Snaps you or Spares you",
  usage: "napme"
};
