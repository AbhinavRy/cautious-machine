const express = require('express');
const router = express.Router();

const courses = [
    {
        subject:"Maths",
        noOfLesson:"32"
    },
    {
        subject:"Physics",
        noOfLesson:"30"
    },
    {
        subject:"Chemistry",
        noOfLesson:"10"
    }
];

router.get('/', (req, res) => {
    try {
        if(!courses){
            res.status(400).send("No Course Found.");
        }
        res.json(courses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;