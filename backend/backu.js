const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const data = req.body;
    console.log("Получены данные:", data);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});