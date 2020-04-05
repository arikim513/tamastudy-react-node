import React, { useEffect } from 'react';
import GetPostByIdPresenter from './GetPostByIdPresenter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPostById, deletePostById } from '../../../store/actions/post.action';
import Spinner from '../../../components/atoms/Spinner';

const GetPostByIdContainer = ({ history, match, getPostById, deletePostById, auth, postState }) => {
  const postId = match.params.postId;
  const currentUserId = auth.currentUserId;
  const post = postState.post;

  useEffect(() => {
    window.scrollTo(0, 0);
    getPostById(match.params.postId);
  }, [getPostById, match.params.postId]);

  const onClickMoveToBack = () => {
    history.goBack();
  };

  const onClickMoveToUpdate = () => {
    history.push(`/post/${postId}/update`);
  };

  const handleDeletePostById = () => {
    deletePostById(postId, history);
  };

  if (auth.loading) return <Spinner />;
  if (postState.loading) return <Spinner />;

  return (
    <>
      <GetPostByIdPresenter
        currentUserId={currentUserId}
        post={post}
        deletePostById={handleDeletePostById}
        onClickMoveToBack={onClickMoveToBack}
        onClickMoveToUpdate={onClickMoveToUpdate}
      />
    </>
  );
};

const mapStateToProps = ({ auth, postState }) => ({
  auth,
  postState,
});

export default withRouter(
  connect(mapStateToProps, { getPostById, deletePostById })(GetPostByIdContainer),
);
