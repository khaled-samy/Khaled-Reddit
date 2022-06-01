const connection = require('../config/connection');

const getUserPostsQuery = (username) => connection.query('SELECT posts.id, posts.title, posts.description, users.username FROM posts INNER JOIN users ON users.id = posts.user_id where users.username=$1;', [username]);

module.exports = { getUserPostsQuery };
