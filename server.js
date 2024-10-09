const express = require('express');
const http = require('http');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const socketSetup = require('./socket');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

sequelize.sync({ force: false })
  .then(() => console.log('Base de datos sincronizada'))
  .catch((err) => console.error('Error al sincronizar la base de datos:', err));

socketSetup(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
