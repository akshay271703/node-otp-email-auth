const { JWT_SECRET } = require('../constants/constants');
const jwt = require('jsonwebtoken');

module.exports.signToken = (params) => {
  return jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60,
      data: params,
    },
    JWT_SECRET
  );
};

module.exports.verifyToken = (token) => {
  try {
    const data = jwt.verify(token, JWT_SECRET);
    return [true, 'Login Success', data];
  } catch (error) {
    let err;
    switch (error.name) {
      case 'TokenExpiredError':
        err = 'Token Expired';
        break;
      default:
        err = error.name;
    }
    return [false, err];
  }
};
