const express = require('express');
const router = express.Router();

const tasks = [
    "To complete the assignment 4 of Maths.",
    "To read the topic 24.3 under optics unit.",
    "Complete exercise 1 and 2 of Chemistry."
];

router.get('/', (req, res) => {
    try {
        if(!tasks){
            res.status(400).send("No Task Yet.");
        }
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;