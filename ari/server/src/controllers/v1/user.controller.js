const asyncHandler = require('../../middleware/asyncHandler');
const User = require('../../database/models/User');
const createJWT = require('../../util/user/createJWT');

// Public
// post
// signup
// postman uri ex
// http://localhost:4000/v1/user/signup
exports.signup = asyncHandler(async (req, res, next) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(400).json({
      success: false,
      error: `${req.body.email}는 존재하는 이메일입니다. `,
      data: null,
    });
  }
  const newUser = await User.create({ ...req.body });
  const token = await createJWT(newUser._id);
  res.status(201).json({
    success: true,
    error: null,
    data: token,
  });
});

// Public
// post
// signin
// postman uri ex
// http://localhost:4000/v1/user/signin
exports.signin = asyncHandler(async (req, res, next) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (!existingUser) {
    return res.status(400).json({
      success: false,
      error: `${req.body.email}는 존재하지 않는 이메일입니다. `,
      data: null,
    });
  }
  const isCorrectPassword = await existingUser.matchPassword(req.body.password);
  if (!isCorrectPassword) {
    return res.status(401).json({
      success: false,
      error: `패스워드가 일치하지 않습니다. `,
      data: null,
    });
  }

  const token = await createJWT(existingUser._id);
  res.status(200).json({
    success: true,
    error: null,
    data: token,
  });
});

// Private
// get
// users
// postman uri ex
// http://localhost:4000/v1/user/users
exports.users = asyncHandler(async (req, res, next) => {
  const users = await User.find()
    .populate({
      path: 'posts',
      model: 'Post',
    })
    .select('-password');
  res.status(200).json({
    success: true,
    error: null,
    data: users,
  });
});

// Private
// get
// me
// postman uri ex
// http://localhost:4000/v1/user/me
exports.me = asyncHandler(async (req, res, next) => {
  const me = await User.findOne({ _id: req.currentUserId }).select('-password');
  if (!me) {
    return res.status(401).json({
      success: false,
      error: '잘못된 경로입니다.',
      data: null,
    });
  }
  res.status(200).json({
    success: true,
    error: null,
    data: me,
  });
});
