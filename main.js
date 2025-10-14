const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const config = {
    admin_number: '994386173'
};

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot listo!');
});

client.on('message', message => {
    // Comando para reportar usuarios
    if (message.body.startsWith('!reporte')) {
        // Solo el admin puede usar el comando
        if (message.from.includes(config.admin_number)) {
            message.reply('Usuario reportado por violar la política de privacidad.');
        } else {
            message.reply('Solo el administrador puede reportar usuarios.');
        }
    }
});

client.initialize();