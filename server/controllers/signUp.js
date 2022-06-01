const { addNewUserQuery, hasUsernameTakenQuery, hasEmailTakenQuery } = require('../database/queries');
const { signUpValidation } = require('../validation');
const { hashPassword, jwtSignPromise, CustomError } = require('../utils');

const signUp = (req, res) => {
  const { username, email, password } = req.body;

  signUpValidation(req.body)
    .then(() => hasUsernameTakenQuery({ username }))
    .then(() => hasEmailTakenQuery({ email }))
    .then(() => hashPassword(password))
    .then((hashedPassword) => addNewUserQuery({ email, username, hashedPassword }))
    .then((dbRes) => {
      if (dbRes) {
        const { id } = dbRes.rows[0];
        jwtSignPromise({ id, username })
          .then((decoded) => res.status(201).cookie('decoded', decoded).json({ msg: 'AUTH', status: 201 }))
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

module.exports = { signUp };
