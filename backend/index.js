const express = require('express');
const { Telegraf } = require('telegraf');
const path = require('path');

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Настройка статических файлов
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Обработчик вебхука от Telegram
app.post('/webhook', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.sendStatus(200);
    }

    const chatId = message.chat.id;
    const text = message.text;

    console.log(`Получено сообщение: ${text}`);
    res.sendStatus(200);
});

// Обработка данных из Mini App
bot.on('web_app_data', (ctx) => {
    const data = ctx.webAppData.data;
    const parsedData = JSON.parse(data);
    console.log("Получены данные из Mini App:", parsedData);

    ctx.reply(`Получены данные: ${parsedData.message}`);
});

// Запуск бота
bot.launch();

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});