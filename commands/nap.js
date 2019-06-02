exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
 
     var name;
 if (args.length > 0) {
        if (message.mentions.members.first()) {
             name = message.mentions.username;
        } else {
            message.channel.send()("There is no mention");
            return;
        }
    } else {
          name = message.author.username
}

  
 let replies = [" has been Snapped.", " has been Spared."];
 let result = Math.floor((Math.random() * replies.length));

 const msg = await message.channel.send("***SNAP***");
 
 message.react('584174001547640852')
 .then(() => message.react('584174001199251506'))
 .then(() =>  msg.edit(name + replies[result]))
 .then(() => msg.react('584174001128210442'));
  //const msg = await message.channel.send(replies[result]).then(() => msg.react('584174001128210442');

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "nap",
  category: "Memes",
  description: "Snaps you or Spares you and your loved ones",
  usage: "nap <@user>"
};
