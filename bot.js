const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(changeRoleColor, 5000);
});

function changeRoleColor() {
  const guild = client.guilds.cache.get(config.guildId);
  const role = guild.roles.cache.find(role => role.name === config.roleName);
  const color = Math.floor(Math.random() * 16777215);
  role.edit({ color: color });
}

client.login(config.token);
