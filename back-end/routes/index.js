const express = require('express');
const router = express.Router();

const greetingsRouter = require('./greetings/greetings');
const messagesRouter = require("./messages/messages");

router.use('/api/greetings', greetingsRouter);
router.use('/api/messages', messagesRouter);

module.exports = router;