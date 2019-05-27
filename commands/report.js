const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
        
        //delete the users message after 1000ms
        message.delete(1000);
        //set the suggestion var to the argument - join makes it output nicely
        const reportMessage = args.slice(1).join(' ');
        const reportedUser = message.mentions.users.first();
        //get the channel id for the suggest channel and save it as a var
        const reportchannel = client.channels.get("486578098217811978")
        //save the authors username as "name"
        const name = message.author.username + ' reported';
        
        if (!reportchannel) return message.reply('I cannot find the suggestions channel');
        if (reportMessage < 1) return message.reply('No suggestion found');
        if (message.mentions.users.size < 1) return message.reply('Please mention who you want to report.').catch(console.error);
       
        var embed = new RichEmbed()
            .setColor('#68AD36')
            .setDescription(reportedUser)
            .setAuthor(name, message.author.displayAvatarURL)
            .setTimestamp();

            embed.addField("For:", reportMessage)
        
        let msg = client.channels.get(reportchannel.id).send({embed});
        client.channels.get("486578098217811978").send("<!@485066042813710360>")
        
};        

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Greenie"
};

exports.help = {
  name: "report",
  category: "Important",
  description: "Report something to the Conclave",
  usage: "report <@user> <Reason>"
};
