const { getUserPostsQuery } = require('../../database/queries');

const getUserPosts = (req, res) => {
  const { username } = req.params;
  getUserPostsQuery(username)
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
};

module.exports = { getUserPosts };
