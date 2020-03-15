const Post = require('../../database/models/Post');
const User = require('../../database//models/User');

// GET
// getPosts
// postman uri ex
// http://localhost:4000/v1/post
exports.getPosts = async (req, res, next) => {
  try {
    let limit = 7; // http://localhost:4000/v1/post?limit=여기에숫자 => 숫자를 입력한만큼만 데이터를 가져온다.
    if (req.query.limit) {
      limit = req.query.limit;
    }
    const posts = await Post.find()
      .sort({ createdAt: -1 }) // 생성된 날짜 순서로 정렬
      .limit(limit); // limit만큼만 데이터를 가져옴
    res.status(200).json({
      success: true,
      error: null,
      total: posts.length,
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
};

// Private
// POST
// createPost
// postman uri ex
// http://localhost:4000/v1/post/create
exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      ...req.body,
      user: req.currentUserId,
    });

    // 미들웨어(getCurrentUserId)를 통과했기 때문에, 아이디가 존재한다.
    const currentUserId = req.currentUserId;

    // user모델의 posts부분에 user objectId를 넣어주는 행위
    // user를 검색했을때 posts도 볼 수 있도록...
    const user = await User.findById({ _id: currentUserId });
    user.posts.push(post._id);
    await user.save();

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
};

// GET
// getPostById
// postman uri ex
// http://localhost:4000/v1/post/5e6c8fcbc66c3058b5fcf067
exports.getPostById = async (req, res, next) => {
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
};

// Private
// DELETE
// deletePostById
// postman uri ex
// http://localhost:4000/v1/post/delete/5e6c8fcbc66c3058b5fcf067
exports.deletePostById = async (req, res, next) => {
  try {
    // 먼저 post를 찾는다.
    const post = await Post.findById({ _id: req.params.postId });

    // post가 존재하지 않을 때
    if (!post) {
      return res.status(400).json({
        success: false,
        error: '포스트가 존재하지 않습니다.',
        result: null,
      });
    }

    // 미들웨어(getCurrentUserId)를 통과했기 때문에, 아이디가 존재한다.
    const currentUserId = req.currentUserId;

    // 포스트에 있는 user(id)와 현재 컨트롤러를 호출하고있는 유저의 id를 비교하여 같지않다면 false를 반환
    // user는 objectId이므로 string으로 변환 후 비교한다.
    if (post.user.toString() !== currentUserId) {
      return res.status(401).json({
        success: false,
        error: '해당 권한이 없습니다.',
        result: null,
      });
    }

    // 모든것이 통과되면 검색했던 post를 삭제한다.
    await post.remove();

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
};

// Private
// Update
// updatePostById
// postman uri ex
// http://localhost:4000/v1/post/update/5e6c8fcbc66c3058b5fcf067
exports.updatePostById = async (req, res, next) => {
  try {
    // 먼저 post를 찾는다.
    let post = await Post.findById({ _id: req.params.postId });

    // post가 존재하지 않을 때
    if (!post) {
      return res.status(400).json({
        success: false,
        error: '포스트가 존재하지 않습니다.',
        result: null,
      });
    }

    // 미들웨어(getCurrentUserId)를 통과했기 때문에, 아이디가 존재한다.
    const currentUserId = req.currentUserId;

    // 포스트에 있는 user(id)와 현재 컨트롤러를 호출하고있는 유저의 id를 비교하여 같지않다면 false를 반환
    // user는 objectId이므로 string으로 변환 후 비교한다.
    if (post.user.toString() !== currentUserId) {
      return res.status(401).json({
        success: false,
        error: '해당 권한이 없습니다.',
        result: null,
      });
    }

    // mongoose findByIdAndUpdate  => 무엇(포스트)을 업데이트(put)할지 찾아야하므로
    // id에 해당하는 post를 찾을 수 없으면,
    // post는 존재하지않는다는 의미로 null을 반환한다.
    // 1번째 인자에는 id :  { _id: req.params.postId }
    // 2번째 인자에는 수정내용 : { ...req.body } => req.body로 실려온 모든 것을 spread한다.
    // 3번째 인자에는 옵션 : { new: true, runValidators: false }
    post = await Post.findByIdAndUpdate(
      { _id: req.params.postId },
      { ...req.body },
      { new: true, runValidators: false },
    );

    // post가 존재하였으므로 업데이트되었다.
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
};
