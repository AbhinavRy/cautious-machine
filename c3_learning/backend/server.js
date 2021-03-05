const express = require('express');
const app = express();

app.use(express.json({extended:false}));
app.get('/', (req, res) => res.send('API Running'));

//Routes
app.use('/api/lessons',require('./routes/api/lessons'));
app.use('/api/tasks',require('./routes/api/tasks'));
app.use('/api/leaderboard',require('./routes/api/leaderboard'));
app.use('/api/courses',require('./routes/api/courses'));
app.use('/api/homework',require('./routes/api/homework'));
app.use('/api/graph',require('./routes/api/graph'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));