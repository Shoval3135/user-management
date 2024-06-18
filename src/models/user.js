const db = require('../db');

class User {
    static create(name, email, password, callback) {
        const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        db.query(query, [name, email, password], callback);
    }

    static findAll(callback) {
        const query = 'SELECT * FROM users';
        db.query(query, callback);
    }

    static updateById(id, name, email, callback) {
        const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
        db.query(query, [name, email, id], callback);
    }

    static deleteById(id, callback) {
        const query = 'DELETE FROM users WHERE id = ?';
        db.query(query, [id], callback);
    }

    static findByEmail(email, callback) {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], callback);
    }
}

module.exports = User;
