const express = require('express');
const router = express.Router();
const dbClient = require("../../config/database");

// Endpoint: /api/messages

router.get('/', (req, res) => {

    console.log(req.body);

    const message = req.body.message;
    
    dbClient.query(
        `INSERT INTO data (message) VALUES ('${message}')`
        , (err, res) => {
            if (err) {
                console.error('Error inserting rows:', err.stack);
            } else {
                console.log(res);
            }
        }
    );

    res.json({
        data: "New message added, " + message,
    });
});



module.exports = router;