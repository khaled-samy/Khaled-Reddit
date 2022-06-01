const { addPostQuery } = require('../../database/queries');
const { CustomError } = require('../../utils');

const addPosts = (req, res) => {
  const { title, description, userId } = req.body;

  addPostQuery(title, description, userId)
    .then((data) => res.json([data.rows[0]]))
    .catch(() => CustomError('error on addPost query', 400));
};

module.exports = { addPosts };
