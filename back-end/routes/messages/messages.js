const express = require('express');
const router = express.Router();
const dbClient = require("../../config/database");

// Endpoint: /api/messages

router.get('/', (req, res) => {
    
    dbClient.query(
        `SELECT * FROM messages;`
        , (err, result) => {
            if (err) {
                res.json({ error: err });
            } else {
                res.json(result.rows);
            }
        }
    );
});

router.post('/', (req, res) => {

    const message = req.body.message;
    
    dbClient.query(
        `INSERT INTO messages (message) VALUES ('${message}')`
        , (err, result) => {
            if (err) {
                console.error('Error inserting a new message: ', err.stack);
            } else {
                res.json({
                    data: "New message added, " + message,
                });
            }
        }
    );

});

module.exports = router;