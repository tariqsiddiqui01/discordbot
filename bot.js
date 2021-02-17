require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hi') {
    msg.reply('Hi there!');
  }
  else if (msg.content.toLowerCase() === 'how do you do ?') {
    msg.reply('Great!');
  }
  else if (msg.content.toLowerCase() === 'goodbye') {
    msg.reply('Bye!');
  }
})

client.login(process.env.DISCORD_TOKEN);