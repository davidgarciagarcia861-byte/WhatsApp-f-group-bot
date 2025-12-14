

const client = new Client();

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('🤖 Bot listo!');
});

client.on('message', message => {

  // COMANDO REPORTE
  if (message.body.startsWith('!reporte')) {
    if (message.from === config.admin_number) {+51 994386173}
      const razon = message.body.split(' ').slice(1).join(' ');

      if (razon) {
        message.reply(`✅ Usuario reportado por: ${razon}`);
      } else {
        message.reply('⚠️ Debes proporcionar una razón.');
      }

    } else {
      message.reply('❌ Solo el administrador puede usar este comando.');
    }
  }

  // COMANDO AYUDA
  if (message.body === '!ayuda') {
    message.reply(
      '📌 *Comandos disponibles:*\n' +
      '!reporte <razón>\n' +
      '!info\n' +
      '!contacto'
    );
  }

  // COMANDO INFO
  if (message.body === '!info') {
    message.reply(
      '🤖 Bot de WhatsApp v1.0\n' +
      '👨‍💻 Desarrollado por David Garcia'
    );
  }

  // COMANDO CONTACTO
  if (message.body === '!contacto') {
    message.reply(
      '📞 Contacto del administrador:\n' +
      'https://wa.me/+51994386173
    );
  }

});

client.initialize();