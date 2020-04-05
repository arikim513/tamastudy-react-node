const keys = require('../../../keys');
const jwt = require('jsonwebtoken');

const JWT_SECRET = keys.nodeJWTSecret;

const createJWT = async (userId) => {
  try {
    return await jwt.sign({ userId }, JWT_SECRET);
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message,
      data: null,
    };
  }
};

module.exports = createJWT;
