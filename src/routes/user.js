const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    User.create(name, email, password, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: result.insertId });
    });
});

// Retrieve all users
router.get('/', (req, res) => {
    User.findAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

// Update a user by ID
router.put('/:id', (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;
    User.updateById(id, name, email, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'User updated successfully' });
    });
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    User.deleteById(id, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'User deleted successfully' });
    });
});

module.exports = router;
