const express = require('express');
const router = express.Router();

// Endpoint: /api/greetings

router.get('/', (req, res) => {
    res.send("Hi visitor!")
});

router.post('/', (req, res) => {
    console.log("Greeting POST");
});

module.exports = router;
