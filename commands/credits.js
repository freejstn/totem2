const { RichEmbed } = require('discord.js');


exports.run = async (client, message, args, level) => {
        //message.delete(1000);
        const footerimage = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/185/green-heart_1f49a.png"
        const authorImage = "//s.imgur.com/min/embed.js"
   
        
        
        var embed = new RichEmbed()
        
            //.setAuthor("Scrotum Totem", authorImage)
            .setTitle("Ayy it's the credits")
            .setDescription("Here are all the madlads who've helped make Scrotum Totem:")
       
            .setThumbnail(authorImage)
            .setFooter(":  Biggest of thanques - you're all amazing", footerimage)
            .setColor('#68AD36')
            //.setTimestamp()
            //.setImage("https://i.redd.it/5y6485007vt21.png");
        
            embed.addBlankField(true)
                 .addField("Tilwaen", "Helped with, well, everything, really")
                 .addField("Blastogypsy", "Helped make $poll")
                 .addField("Sgedelta", "Created $uggest and $report")
                 .addField("201", "Helped with testing")
                 .addField("BobbyTie", "Helped with testing")
                 .addField("201", "Helped with testing")
                 .addField("ReaIEIonMusk", "Helped with... testing")
                 .addField("HelicopterBallsack", "Named the thing")

        let msg = await message.channel.send({ embed });
        //return client.channels.get(voteresult.id).send({embed});
        
};


  
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Greenie",
  channelPerms: "All",
  userCooldown: false,
  globalCooldown: false,
  cooldownDuration: 0
};

exports.help = {
  name: "credits",
  category: "Miscelaneous",
  description: "Gives a list of credits",
  usage: "credits"
};
