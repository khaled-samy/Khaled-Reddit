const connection = require('../config/connection');

const deletePostQuery = (postId, userId) => connection.query('DELETE FROM posts WHERE id=$1 AND user_id=$2 RETURNING *;', [postId, userId]);

module.exports = { deletePostQuery };
