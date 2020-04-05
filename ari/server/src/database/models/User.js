const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const validateEmail = inputEmail => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(inputEmail);
};

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, '유저명을 입력해주세요.'],
  },
  email: {
    type: String,
    required: [true, '이메일을 입력해주세요. '],
    unique: [true, '해당 이메일이 존재합니다. '],
    validate: [validateEmail, '정상적인 이메일을 입력해주세요. '],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '정상적인 이메일을 입력해주세요. '],
  },
  password: {
    type: String,
    required: [true, '패스워드를 입력해주세요. '],
    trim: true,
  },
  profileImage: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Post',
    },
  ],
  postComments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'PostComment',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 모델 미들웨어
userSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  } catch {
    next(error);
  }
});

// 컨트롤러에서 호출하여 사용하는 모델 메소드
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
