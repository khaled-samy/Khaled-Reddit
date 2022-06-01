const connection = require('../config/connection');

const getAllPostsQuery = () => connection.query('SELECT p.id,p.title,p.description,p.user_id,u.username FROM posts AS p JOIN users AS u ON (u.id=p.user_id);');

module.exports = { getAllPostsQuery };
