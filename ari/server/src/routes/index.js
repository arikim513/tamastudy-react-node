const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');

// GET
// getPosts
// postman uri ex
// http://localhost:4000/posts
router.get('/posts', async (req, res, next) => {
  try {
    let limit = 7;
    if (req.query.limit) {
      limit = req.query.limit;
    }
    const posts = await Post.find().limit(limit);
    res.status(200).json({
      success: true,
      error: null,
      result: posts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
      result: null,
    });
  }
});

// POST
// createPost
// postman uri ex
// http://localhost:4000/post/create
router.post('/post/create', async (req, res, next) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      description: req.body.description,
      username: req.body.username,
      imgUrl: req.body.imgUrl,
    });
    // const post = await Post.create({...req.body})
    res.status(200).json({
      success: true,
      error: null,
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
      result: null,
    });
  }
});

// GET
// getPostById
// postman uri ex
// http://localhost:4000/post/5e6c8fcbc66c3058b5fcf067
router.get('/post/:postId', async (req, res, next) => {
  try {
    // mongoose findByIdAndUpdate = findById + update => 무엇(포스트)을 찾아야하므로
    // id에 해당하는 post를 찾을 수 없으면,
    // post는 존재하지않는다는 의미로 null을 반환한다.
    const post = await Post.findByIdAndUpdate(
      { _id: req.params.postId },
      { $inc: { view: 1 } }, // api가 호출될때마다(즉 한번씩 getPostById를 볼때마다) 조회수(view) 늘리는 로직
      { new: true, upsert: false },
    );
    // post가 존재하지 않을 때
    if (!post) {
      return res.status(400).json({
        success: false,
        error: '포스트가 존재하지 않습니다.',
        result: null,
      });
    }
    // result로 postId로 찾은 post를 내보낸다..
    res.status(200).json({
      success: true,
      error: null,
      result: post,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
      result: null,
    });
  }
});

// DELETE
// deletePostById
// postman uri ex
// http://localhost:4000/post/delete/5e6c8fcbc66c3058b5fcf067
router.delete('/post/delete/:postId', async (req, res, next) => {
  try {
    // mongoose findByIdAndDelete => 무엇(포스트)을 삭제할지 찾아야하므로
    // id에 해당하는 post를 찾을 수 없으면,
    // post는 존재하지않는다는 의미로 null을 반환한다.
    // 1번째 인자에는 id :  { _id: req.params.postId } => 무엇(무슨 포스트)을 삭제할지 찾아야하므로
    const post = await Post.findByIdAndDelete({ _id: req.params.postId });
    // post가 존재하지 않을 때
    if (!post) {
      return res.status(400).json({
        success: false,
        error: '포스트가 존재하지 않습니다.',
        result: null,
      });
    }
    // post가 존재하였으므로 삭제되었고,
    // result로 삭제완료 메시지를 보낸다.
    res.status(200).json({
      success: true,
      error: null,
      result: `${req.params.postId}번 포스트의 삭제가 완료되었습니다. `,
    });
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message,
      result: null,
    };
  }
});

// Update
// updatePostById
// postman uri ex
// http://localhost:4000/post/update/5e6c8fcbc66c3058b5fcf067
router.put('/post/update/:postId', async (req, res, next) => {
  try {
    // mongoose findByIdAndUpdate  => 무엇(포스트)을 업데이트(put)할지 찾아야하므로
    // id에 해당하는 post를 찾을 수 없으면,
    // post는 존재하지않는다는 의미로 null을 반환한다.
    // 1번째 인자에는 id :  { _id: req.params.postId }
    // 2번째 인자에는 수정내용 : { ...req.body } => req.body로 실려온 모든 것을 spread한다.
    // 3번째 인자에는 옵션 : { new: true, runValidators: false }
    const post = await Post.findByIdAndUpdate(
      { _id: req.params.postId },
      { ...req.body },
      { new: true, runValidators: false },
    );
    // post가 존재하지 않을 때
    if (!post) {
      return res.status(400).json({
        success: false,
        error: '포스트가 존재하지 않습니다.',
        result: null,
      });
    }
    // post가 존재하였으므로 업데이트되었고,
    // result로 업데이트된 post를 내보낸다.
    res.status(200).json({
      success: true,
      error: null,
      result: post,
    });
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message,
      result: null,
    };
  }
});

module.exports = router;
