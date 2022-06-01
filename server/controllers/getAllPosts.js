const { getAllPostsQuery } = require('../database/queries');

const getAllPosts = (req, res) => getAllPostsQuery()
  .then((data) => res.json(data.rows))
  .catch((err) => res.json(err));

module.exports = { getAllPosts };
