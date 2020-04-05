const keys = require('../../keys');
const jwt = require('jsonwebtoken');

exports.getCurrentUserId = async (req, res, next) => {
  let token;
  console.log(req.headers.authorization);
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]; // Bearer 부분을 떼버림
  }
  if (!token) {
    console.log('hey');
    return next('페이지 접근이 제한되었습니다.');
  }
  try {
    const JWT_SECRET = keys.nodeJWTSecret;
    const currentUserId = await jwt.verify(token, JWT_SECRET).userId;
    req.currentUserId = currentUserId;
    next();
  } catch (error) {
    next(error);
  }
};
