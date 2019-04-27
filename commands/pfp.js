const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, level, r, unbClient) => {
    var url;

    if (args.length > 0) {
        if (message.mentions.members.first()) {
            url = message.mentions.members.first().user.avatarURL;
        } else {
            message.channel.send()("There is no mention");
            return;
        }
    } else {
        url = message.author.avatarURL;
    }

    sendEmbed(message.channel, url);
};

async function sendEmbed(channel, url) {
    var embed = new RichEmbed()
            .setImage(url)
            .setColor('#68AD36')
    let msg = await channel.send({ embed });
}

  //const let pfp = message.author.displayAvatarURL
  //const msg = await message.channel.send("Test", {files: [message.author.displayAvatarURL]});
//Looking good ;)


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "pfp",
  category: "Miscelaneous",
  description: "It sneaks up and takes a photo of you before handing it out to strangers.",
  usage: "pfp @user"
};
