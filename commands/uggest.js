const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
        
        //delete the users message after 1000ms
        message.delete(1000);
        //set the suggestion var to the argument - join makes it output nicely
        const suggestion = args.join(' ')
        //get the channel id for the suggest channel and save it as a var
        const suggestchannel = client.channels.get("581061069250887690")
        //save the authors username as "name"
        const name = message.author.username + ' suggested'
        
        if (!suggestchannel) return message.reply('I cannot find the suggestions channel');
        //if (position.length < 1) return message.reply('You must supply a position for the person.');
        if (suggestion < 1) return message.reply('No suggestion found').catch(console.error);
       
        var embed = new RichEmbed()
            .setColor('#68AD36')
            //.setTitle("Suggested")
            .setDescription(suggestion)
            .setAuthor(name, message.author.displayAvatarURL)
            //.setFooter(position)
            .setTimestamp();

            //embed.addField(suggestion)
            
        let msg = client.channels.get(suggestchannel.id).send({embed}).then(sentEmbed => {
        sentEmbed.react('👍').then(() => sentEmbed.react('👎').then(() => sentEmbed.react('🤷')));
                
        message.channel.author.send("Thank you for your Suggestion!");
});
};        

    
  



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Greenie"
};

exports.help = {
  name: "uggest",
  category: "Important",
  description: "Suggest something",
  usage: "uggest"
};

