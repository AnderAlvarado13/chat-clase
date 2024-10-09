const Message = require('../models/Message');
const User = require('../models/User');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll({
      include: { model: User, attributes: ['username', 'role'] },
      order: [['createdAt', 'ASC']],
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los mensajes.' });
  }
};
