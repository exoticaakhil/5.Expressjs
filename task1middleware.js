const express = require('express');
const PORT = 4300;
const { logger } = require('./middleware/task1');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ msg: "home path" });
});

// Route with middleware and role-based logic
app.get('/api/user', logger, (req, res) => {
    // Check role and respond accordingly
    if (req.role === 'admin') {
        res.status(200).json({ msg: "Admin controller", role: req.role });
    } else if (req.role === 'user') {
        res.status(200).json({ msg: "User controller", role: req.role });
    } else {
        res.status(403).json({ msg: "Access denied" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is started @ http://localhost:${PORT}`);
});
