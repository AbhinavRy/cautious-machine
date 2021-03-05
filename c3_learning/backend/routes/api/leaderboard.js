const express = require('express');
const router = express.Router();

const leaderboard = [
    {
        name:"John Doe",
        score:"94"
    },
    {
        name:"Jack Johnsson",
        score:"88"
    },
    {
        name:"Andy Anderson",
        score:"60"
    }
];

router.get('/', (req, res) => {
    try {
        if(!leaderboard){
            res.status(400).send("No Entries Found.");
        }
        res.json(leaderboard);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;