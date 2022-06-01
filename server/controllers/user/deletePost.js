const { deletePostQuery } = require('../../database/queries');
const { CustomError } = require('../../utils');

const deletePost = (req, res) => {
  const { id } = req.userInfo;
  const { postId } = req.params;
  deletePostQuery(postId, id)
    .then((data) => {
      console.log(data.rowCount);
      if (!data.rowCount) {
        throw CustomError('error', 401);
      } else {
        res.json({ message: 'deleted' });
      }
    })
    .catch((err) => console.log(err));
};

module.exports = { deletePost };
