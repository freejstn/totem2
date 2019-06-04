const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
        
        //delete the users message after 1000ms
        message.delete(1000);
        
       
        var embed = new RichEmbed()
            .setColor('#68AD36')
            .setTitle("Voting begain at:")
            .setTimestamp();

        
        let msg = await message.channel.send({ embed });
});
};        

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Administrator"
};

exports.help = {
  name: "timecheck",
  category: "Important",
  description: "Check the time (at point of the command being posted)",
  usage: "timecheck"
};
