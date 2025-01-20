const express = require('express');
const app = express();

// Middleware to simulate logged-in user
app.use((req, res, next) => {
    req.user = { id: 2 }; // Simulating Bob as the logged-in user
    next();
});

// Secure route to get user information
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    // Ensure the logged-in user is requesting their own data
    if (parseInt(userId) === req.user.id) {
        res.json(users[userId]);
    } 
    else {
        res.status(403).json({ message: 'Access denied' });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
