exports.run = async(client, message, args) => {
 
   if (args.length > 0) {
     const firstcount = parseInt(args.join(' '));
     const messagecount = firstcount + 1;
       message.channel.fetchMessages({
       limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
            
       const msg = await message.channel.send("The messages have been *yeeted*");
       msg.delete(1000)
   }
  else {
  message.channel.send("Please define a number of messages to be yeeted");
  }
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Administrator"
};
exports.help = {
  name: "purge",
  category: "Important",
  description: "It yeets the X messages above the command",
  usage: "puge <number>"
};
