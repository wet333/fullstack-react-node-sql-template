const express = require('express');
const router = express.Router();

const greetingsRouter = require('./greetings/greetings');

router.use('/api/greetings', greetingsRouter);

module.exports = router;