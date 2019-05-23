const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

        message.delete(1000);
        const suggestion = message
        const suggestchannel = client.channels.get("529547120429236225")
        
        if (!suggestchannel) return message.reply('I cannot find the suggestions channel');
        //if (position.length < 1) return message.reply('You must supply a position for the person.');
        if (suggestion < 1) return message.reply('No suggestion found').catch(console.error);
       
        //const embed = new Discord.RichEmbed()
        var embed = new RichEmbed()
            .setColor('#68AD36')
            .setTitle("Suggested")
            .setDescription(suggestion)
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            //.setFooter(position)
            .setTimestamp();

   
            

        //let msg = await message.channel.send({ embed });
        return client.channels.get(suggestchannel.id).send({embed});
        
};

    //client.channels.get("529547120429236225").send("Suggestion Number " + suggestionCount + ":" + args);
    //message.delete(1000);
    //message.channel.author.send("Thank you for your Anonymous Suggestion!");
  



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Greenie"
};

exports.help = {
  name: "uggest",
  category: "Work in progress",
  description: "Suggest something",
  usage: "uggest"
};

