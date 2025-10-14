const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Escanea el código QR para autenticar');
});

client.on('ready', () => {
    console.log('Cliente autenticado');
});

client.on('message', (message) => {
    if (message.body.toLowerCase() === 'hola') {
        message.reply('Hola, ¿cómo estás?');
    } else if (message.body.toLowerCase() === 'adiós') {
        message.reply('Adiós, que tengas un buen día');
    } else {
        message.reply('No entiendo tu mensaje');
    }
});

client.initialize();index.js