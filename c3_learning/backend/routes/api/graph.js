const express = require('express');
const router = express.Router();

const graph = [
    {
        name:"graph1",
        link:"https://www.skillsyouneed.com/images/graph1.png"
    },
    {
        name:"graph2",
        link:"https://www.skillsyouneed.com/images/graph2.png"
    },
    {
        name:"graph3",
        link:"https://www.skillsyouneed.com/images/pie-chart.png"
    }
];

router.get('/', (req, res) => {
    try {
        if(!graph){
            res.status(400).send("No Graph Found.");
        }
        res.json(graph);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;