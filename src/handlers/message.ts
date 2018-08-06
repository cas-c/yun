import { Message } from 'discord.js';
import config from '../config.json';

function shouldRespond(message: Message) {
  if (message.author.id === config.self) return false;
  if (message.type !== 'DEFAULT') return false;
  if (['dm', 'text'].every(s => s !== message.channel.type)) return false;
  if (message.content.startsWith(config.prefix)) return true;
  return false;
}

export const messageHandler = (message: Message) => {
  if (shouldRespond(message)) {
    message.channel.send('pong!');
  }
};
