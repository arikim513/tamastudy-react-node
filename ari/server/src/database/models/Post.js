const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostComment = require('./PostComment');

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, '타이틀을 입력해주세요. '],
  },
  description: {
    type: String,
    required: [true, '본문을 입력해주세요. '],
  },
  imgUrl: {
    type: String,
    required: [true, '이미지주소를 입력해주세요.'],
  },
  view: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
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

postSchema.pre('remove', async function(next) {
  try {
    await PostComment.deleteMany({
      post: this._id,
    });
    console.log('[postSchema deleteMany 실행] \n >> post에 관련 된 postComment 전체 삭제');
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Post', postSchema);
