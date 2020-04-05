import React, { useEffect } from 'react';
import GetPostsPresenter from './GetPostsPresenter';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../../store/actions/post.action';
import Spinner from '../../../components/atoms/Spinner';

const GetPostsContainer = ({ auth, history, getPosts, postState }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const posts = postState.posts;
  const isLoggedIn = auth.isLoggedIn;

  const handleToastAlert = (type, message) => {
    toast[type](message);
  };

  const onClickMoveToCreatePost = () => {
    history.push('/post/create');
  };

  const onClickMoveToHome = () => {
    history.push('/');
  };

  if (auth.loading) return <Spinner />;

  if (postState.loading) return <Spinner />;

  return (
    <GetPostsPresenter
      isLoggedIn={isLoggedIn}
      posts={posts}
      handleToastAlert={handleToastAlert}
      onClickMoveToCreatePost={onClickMoveToCreatePost}
      onClickMoveToHome={onClickMoveToHome}
    />
  );
};

const mapStateToProps = ({ auth, postState }) => ({
  auth,
  postState,
});

export default withRouter(connect(mapStateToProps, { getPosts })(GetPostsContainer));
