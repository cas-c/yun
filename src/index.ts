import { Client } from 'discord.js';
import config from './config.json';
import { messageHandler } from './handlers';

const client = new Client();

client.once('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', messageHandler);

client.login(config.token);
