const connection = require('../config/connection');

const addNewUserQuery = ({ username, email, hashedPassword }) => connection.query('INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING *;', [username, email, hashedPassword])
  .catch(() => `${new Error('username has already taken, try another one')}`);

module.exports = { addNewUserQuery };
