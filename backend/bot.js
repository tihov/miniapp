const { Telegraf } = require('telegraf');
const bot = new Telegraf(123);

// Команда /start
bot.command('start', (ctx) => {
    ctx.reply('Добро пожаловать! Нажмите кнопку ниже, чтобы открыть Mini App.', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Открыть Mini App',
                        web_app: { url: 'https://pc6c2i-109-252-1-93.ru.tuna.am/index.html' }
                    }
                ]
            ]
        }
    });
});

// Обработка данных из Mini App
bot.on('web_app_data', (ctx) => {
    const data = ctx.webAppData.data; // Данные из Mini App
    ctx.reply(`Получены данные: ${data}`);
});

// Установка кнопки в меню
bot.telegram.setChatMenuButton({
    menu_button: {
        type: 'web_app',
        text: 'Открыть Mini App',
        web_app: { url: 'https://pc6c2i-109-252-1-93.ru.tuna.am/index.html' }
    }
});

// Запуск бота
bot.launch();