const { Telegraf } = require('telegraf')
require('dotenv').config();

const { messages, team } = require('./constants.json');

const bot = new Telegraf(process.env.TOKEN);
bot.start((ctx) => {
    ctx.reply('Lox');
})

bot.on('message', (ctx, next) => {
    try {
        // console.log(`team validate ${!team.includes(ctx.chat.id)}`);
        if (!team.includes(ctx.chat.id)) {
            return;
        }

        // console.log(`chat ${ctx.chat.id}`)
        if (ctx.chat.id === 212205457) {
            ctx.telegram.sendMessage(212205457, messages[0]);
            return;
        }

        // console.log(`validate message: ${~ctx.message.text.indexOf('https://music.yandex.ru')}`);
        if (ctx.message.text.indexOf('https://music.yandex.ru') !== -1) {
            ctx.telegram.sendMessage(313607192, ctx.message.text);
        }
    } catch (error) {
        if (ctx.telegram.sendMessage) {
            ctx.telegram.sendMessage(313607192, error);
        }
    }
});

bot.launch();


// https://music.yandex.ru/album/3345/track/32702