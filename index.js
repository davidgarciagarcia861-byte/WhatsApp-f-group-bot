const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// CONFIGURACIÓN
const config = {
  admin_number: '51994386173@c.us' // TU NÚMERO
};

// CREAR CLIENTE
const client = new Client();

// MOSTRAR QR
client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

// BOT LISTO
client.on('ready', () => {
  console.log('🤖 Bot conectado correctamente');
});

// MENSAJES
client.on('message', message => {

  // COMANDO AYUDA
  if (message.body === '!ayuda') {
    message.reply(
      '📌 Comandos disponibles:\n' +
      '!ayuda\n' +
      '!info'
    );
  }

  // COMANDO INFO
  if (message.body === '!info') {
    message.reply(
      '🤖 WhatsApp Bot\n' +
      '👨‍💻 Creado por David Garcia'
    );
  }

});

client.initialize();