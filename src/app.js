const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
