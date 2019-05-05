exports.run = async(client, message, args) => {
  const messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  
  const msg = await message.channel.send("Done.");
  message.delete(5000);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "purge",
  category: "Admin",
  description: "It yeets the X messages above the command",
  usage: "puge [number]"
};
