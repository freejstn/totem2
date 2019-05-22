const { RichEmbed } = require('discord.js');


exports.run = async (client, message, args, level) => {
        //message.delete(1000);
        const footerimage = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/185/green-heart_1f49a.png"
        const authorImage = "https://i.ibb.co/MNPNWmQ/Screen-Shot-2019-05-22-at-8-51-50-PM.png"
        const ballsImage = "https://i.ibb.co/WVjcXTd/scrotum-totem.jpg"
   
        
        
        var embed = new RichEmbed()
        
            .setAuthor("======================CREDITS======================")
            .setTitle("A list of all the madlads who helped make Scrotum Totem a reality.")
            .setDescription("And thanks to you, for giving a reason to do this!")
       
            .setThumbnail(ballsImage)
            .setFooter("Biggest of thanques to everyone who helped - you're all amazing", footerimage)
            .setColor('#68AD36')
            //.setTimestamp()
            //.setImage("https://i.redd.it/5y6485007vt21.png");
        
            embed.addBlankField(true)
                 .addField("Tilwaen", "Helped with, well, everything, really.")
                 .addField("Blastogypsy", "Helped make $poll.")
                 .addField("Sgedelta", "Created $uggest and $report.")
                 .addField("201", "Helped with testing.")
                 .addField("BobbyTie", "Helped with testing.")
                 .addField("201", "Helped with testing.")
                 .addField("HelicopterBallsack", "Named the damn thing.")

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
