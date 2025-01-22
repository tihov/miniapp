const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const BOT_TOKEN = process.env.BOT_TOKEN; // Токен бота из переменных окружения
const PORT = process.env.PORT || 3000; // Порт для сервера

// Обработчик вебхука от Telegram
app.post('/webhook', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.sendStatus(200);
    }

    const chatId = message.chat.id;
    const text = message.text;

    console.log(`Получено сообщение: ${text}`);

    // Отправляем ответ
    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        text: `Вы сказали: ${text}`
    })
    .then(() => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.error('Ошибка при отправке сообщения:', err);
        res.sendStatus(500);
    });
});

// Старт сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});