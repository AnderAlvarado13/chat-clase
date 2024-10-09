const Message = require('./models/Message');  // Importar el modelo de mensajes

module.exports = (server) => {
    const io = require('socket.io')(server);

    io.on('connection', (socket) => {
        console.log('Un usuario se ha conectado');

        socket.on('chatMessage', async (msg) => {
            
            try {
                await Message.create({ content: msg, username: 'student1', isModerator: false });
            } catch (err) {
                console.error("Error al guardar el mensaje:", err);
            }

            io.emit('chatMessage', msg);
        });

        socket.on('disconnect', () => {
            console.log('Un usuario se ha desconectado');
        });
    });
};