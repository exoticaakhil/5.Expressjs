const express = require('express');
const PORT = 4300;
const { logger } = require('./middleware/task1'); // Assuming `logger` is exported from 'log.js'
const app = express();

// Home route
app.get('/', (req, res) => {
    res.status(200).json({ msg: "home path" });
});

// Route with middleware
app.get('/api/user', logger, (req, res) => {
    res.status(200).json({ msg: "main controller", mainTime: req.myTime });
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is started @ http://localhost:${PORT}`);
});
