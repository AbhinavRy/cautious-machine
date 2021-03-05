const express = require('express');
const router = express.Router();

const lessons = [
    {
        topic:"Algebra II",
        subject:"Maths",
        date:"July 1",
        time:"4:00PM"
    },
    {
        topic:"Optics",
        subject:"Physics",
        date:"July 1",
        time:"6:00PM"
    },
    {
        topic:"Algebra III",
        subject:"Maths",
        date:"July 2",
        time:"4:00PM"
    }
];

router.get('/', (req, res) => {
    try {
        if(!lessons){
            res.status(400).send("No Entries Found.");
        }
        res.json(lessons);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;