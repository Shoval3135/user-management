const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    User.create(name, email, hashedPassword, (err, result) => {
        if (err) return res.status(500).send(err);
        const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET);
        res.status(201).send({ token });
    });
});

// Login user
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email, async (err, results) => {
        if (err || results.length === 0) return res.status(400).send('User not found');
        const user = results[0];
        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) return res.status(401).send('Invalid password');
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.send({ token });
    });
});

module.exports = router;
