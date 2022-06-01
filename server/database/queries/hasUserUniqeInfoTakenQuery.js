const connection = require('../config/connection');
const { CustomError } = require('../../utils');

const hasUsernameTakenQuery = ({ username }) => connection.query('SELECT * FROM users WHERE username=$1', [username])
  .then((dbRes) => {
    if (dbRes.rows.length !== 0) throw CustomError('username has already taken, try another one', 409);
  });

const hasEmailTakenQuery = ({ email }) => connection.query('SELECT * FROM users WHERE email=$1', [email])
  .then((dbRes) => {
    if (dbRes.rows.length !== 0) throw CustomError('email has already taken, try another one', 409);
  });

module.exports = { hasUsernameTakenQuery, hasEmailTakenQuery };
