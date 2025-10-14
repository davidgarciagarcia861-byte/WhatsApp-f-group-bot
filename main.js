const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const config = {
  admin_number: '994386173'
};
crear codigo de 8 digitos/code 97168267
vimcular bot a whatsapp de contacto 994386173
const client = new Client();

client.on('qr', qr => {994386173}
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
      const razon = message.body.split(' ').slice(1).join(' ');
      if (razon) {
        message.reply(`Usuario reportado por ${razon}.`);
      } else {
        message.reply('Debes proporcionar una razón para reportar al usuario.');
      }ejempl*usuario spam 
    } else {
      message.reply('Solo el administrador puede reportar usuarios.');
    }
  }

  // Comando para ayuda
  if (message.body === '!ayuda') {
    message.reply('Comandos disponibles:\n!reporte <razón>\n!info\n!contacto');
  }

  // Comando para información
  if (message.body === '!info') {
    message.reply('Bot de WhatsApp v1.0\nDesarrollado por David Garcia');
  }

  // Comando para contacto
  if (message.body === '!contacto '994386173') {
    message.reply('Para contactar con el administrador, envía un mensaje a https://wa.me/994386173');
  }
});

client.initialize();