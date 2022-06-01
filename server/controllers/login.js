const { jwtSignPromise, comparepassword, CustomError } = require('../utils');
const { logInValidation } = require('../validation');
const { getUser } = require('../database/queries');

const logIn = (req, res) => {
  const { username, password } = req.body;
  let id;
  logInValidation(req.body)
    .then(() => getUser(username))
    .then((response) => {
      if (response.rows.length === 0) {
        throw CustomError('wrong username or password', 400);
      }
      id = response.rows[0].id;
      return response.rows[0];
    })
    .then((userInfo) => comparepassword(password, userInfo.password))
    .then((result) => {
      if (result) {
        jwtSignPromise({ id, username })
          .then((token) => res.status(201).cookie('token', token).json('AUTH'))
          .catch(() => CustomError('error', 400));
      } else {
        throw CustomError('wrong username or password', 400);
      }
    })
    .catch((err) => {
      if (err.details) {
        throw CustomError(err.details[0].message, 400);
      }
    });
};
module.exports = { logIn };
