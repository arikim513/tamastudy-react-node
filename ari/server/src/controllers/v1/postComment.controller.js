const asyncHandler = require('../../middleware/asyncHandler');
const Post = require('../../database/models/Post');
const PostComment = require('../../database/models/PostComment');
const User = require('../../database//models/User');

// Private
// POST
// createPostComment
// postman uri ex
// http://localhost:4000/v1/post/:postId/comment/create
exports.createPostComment = asyncHandler(async (req, res, next) => {
  const postComment = await PostComment.create({
    ...req.body,
    user: req.currentUserId,
    post: req.params.postId,
  });

  const user = await User.findById({ _id: req.currentUserId });
  user.postComments.push(postComment._id);
  await user.save();

  const post = await Post.findById({ _id: req.params.postId });
  post.postComments.push(postComment._id);
  await post.save();

  res.status(201).json({
    success: true,
    error: null,
    data: postComment,
  });
});

// Public
// GET
// getPostComments
// postman uri ex
// http://localhost:4000/v1/post/:postId/comment
exports.getPostComments = asyncHandler(async (req, res, next) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 5;

  let query = { post: req.params.postId };
  if (req.query.cursor) {
    query['_id'] = { $lt: req.query.cursor };
  }

  let postComments = await PostComment.find(query)
    .sort({ _id: -1, createdAt: -1 })
    .limit(limit + 1)
    .select('-post')
    .populate({
      path: 'user',
      model: 'User',
      select: 'username',
    });

  const hasNextPage = postComments.length > limit;

  postComments = hasNextPage ? postComments.slice(0, -1) : postComments;

  res.status(200).json({
    success: true,
    error: null,
    total: postComments.length,
    pageInfo: {
      nextPageCursor: hasNextPage ? postComments[postComments.length - 1]._id : null,
      hasNextPage,
    },
    data: postComments,
  });
});

// Private
// DELETE
// deletePostCommentById
// postman uri ex
// http://localhost:4000/v1/post/:postId/comment/delete/:postCommentId
exports.deletePostCommentById = asyncHandler(async (req, res, next) => {
  const postComment = await PostComment.findById(req.params.postCommentId);

  if (!postComment) {
    return res.status(400).json({
      success: false,
      error: '댓글을 찾을 수 없습니다. ',
      data: null,
    });
  }

  const currentUserId = req.currentUserId;

  if (postComment.user.toString() !== currentUserId) {
    return res.status(401).json({
      success: false,
      error: '해당 권한이 없습니다.',
      result: null,
    });
  }

  await User.updateOne(
    { _id: currentUserId },
    { $pull: { postComments: postComment.id } }, // 꺼내오는것, 즉 삭제 (cascade)
  );

  await Post.updateOne(
    { _id: req.params.postId },
    { $pull: { postComments: postComment.id } }, // 꺼내오는것, 즉 삭제 (cascade)
  );

  // 모든것이 통과되면 검색했던 postComment를 삭제한다.
  await postComment.remove();

  res.status(200).json({
    success: true,
    error: null,
    result: postComment,
  });
});

// Private
// PUT
// updatePostCommentById
// postman uri ex
// http://localhost:4000/v1/post/:postId/comment/update/:postCommentId
exports.updatePostCommentById = asyncHandler(async (req, res, next) => {
  const postComment = await PostComment.findByIdAndUpdate(
    req.params.postCommentId,
    {
      ...req.body,
    },
    {
      new: true,
      runValidators: false,
    },
  );

  if (!postComment) {
    return res.status(400).json({
      success: false,
      error: '댓글을 찾을 수 없습니다. ',
      data: null,
    });
  }

  const currentUserId = req.currentUserId;

  if (postComment.user.toString() !== currentUserId) {
    return res.status(401).json({
      success: false,
      error: '해당 권한이 없습니다.',
      result: null,
    });
  }

  res.status(200).json({
    success: true,
    error: null,
    result: postComment,
  });
});
