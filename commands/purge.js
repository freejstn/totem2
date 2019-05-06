exports.run = async(client, message, args) => {
   
   if (args.length > 0) {
     const messagecount = parseInt(args.join(' '));
       message.channel.fetchMessages({
      limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
  

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
  category: "Miscelaneous",
  description: "It yeets the X messages above the command",
  usage: "puge [number]"
};
