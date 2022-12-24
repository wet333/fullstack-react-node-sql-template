const express = require('express');
const router = express.Router();

// Endpoint: /api/greetings

router.get('/', (req, res) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // month is 0-based
    const currentDay = currentDate.getDate();

    res.json({
        data: "Hello visitor! , today is " + `${currentMonth}/${currentDay}/${currentYear}`
    })
});

module.exports = router;