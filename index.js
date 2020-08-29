const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('No Deactive!');
});

client.on('message', message => {
    if(!message.content.startsWith(`${config.prefix}`) || message.author.bot) return;

    const args = message.content.slice(`${config.prefix}`.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const commands = [
        `${config.base01}`,
        `${config.base02}`,
        `${config.base03}`,

        `${config.media01}`,
        `${config.media02}`,
        `${config.media03}`,
        `${config.media04}`,

        `${config.text01}`,
        `${config.text02}`,
        `${config.text03}`,
        `${config.text04}`,
        `${config.text05}`,
        `${config.text06}`,
        `${config.text07}`,
        `${config.text08}`
    ]

    if(command.includes(command)){
        client.commands.get(command).execute(message, args);
    }
});

client.login('HAHA NO TOKEN FOR YOU');