const { jwtVerifyPromise } = require('../utils');

const authorization = (req, res, next) => {
  const { token } = req.cookies;
  jwtVerifyPromise(token)
    .then((decoded) => {
      req.userInfo = decoded;
      next();
    })
    .catch((err) => res.json(err));
};

module.exports = { authorization };
