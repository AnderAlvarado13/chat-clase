const express = require('express');
const { getMessages } = require('../controllers/chatController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/messages', authMiddleware, getMessages);

module.exports = router;
