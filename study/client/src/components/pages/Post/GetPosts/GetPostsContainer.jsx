import React, { useEffect } from 'react';
import GetPostsPresenter from './GetPostsPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../../../store/actions/v1/post.action';

const GetPostsContainer = () => {
  const postState = useSelector(({ postState }) => postState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (postState.loading) return <div> Post Loading ...</div>;

  return (
    <div>
      <GetPostsPresenter posts={postState.posts} />
    </div>
  );
};

export default GetPostsContainer;
