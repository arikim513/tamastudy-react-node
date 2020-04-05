import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getPostCommentsByPostId,
  deletePostCommentByPostId,
} from '../../../store/actions/post.action';
import GetPostCommentsByPostIdPresenter from './GetPostCommentsByPostIdPresenter';
import { withRouter } from 'react-router-dom';
import Spinner from '../../../components/atoms/Spinner';

const GetPostCommentsByPostIdContainer = ({
  match,
  getPostCommentsByPostId,
  deletePostCommentByPostId,
  postState,
  author,
  currentUserId,
}) => {
  useEffect(() => {
    getPostCommentsByPostId(match.params.postId);
  }, [getPostCommentsByPostId, match.params.postId, postState.postComments.length]);

  if (postState.loading) return <Spinner />;

  return postState.postComments.map((comment) => (
    <GetPostCommentsByPostIdPresenter
      key={comment._id}
      comment={comment}
      author={author}
      currentUserId={currentUserId}
      postId={match.params.postId}
      deletePostCommentByPostId={deletePostCommentByPostId}
    />
  ));
};

const mapStateToProps = ({ postState }) => ({
  postState,
});

export default withRouter(
  connect(mapStateToProps, { getPostCommentsByPostId, deletePostCommentByPostId })(
    GetPostCommentsByPostIdContainer,
  ),
);
