module.exports = async client => {
  // Log that the bot is online.
  console.log('I am ready!');
  console.log('Version 2');
  console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");

  // Make the bot "play the game" which is the help command with default prefix.
  client.user.setActivity("v2.2 | $help", {type: "WATCHING"});
};
