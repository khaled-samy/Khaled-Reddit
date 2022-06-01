const connection = require('../config/connection');

const addPostQuery = (title, description, userId) => connection.query('INSERT INTO posts (title, description, user_id) VALUES ($1,$2,$3) RETURNING *;', [title, description, userId]);

module.exports = { addPostQuery };
