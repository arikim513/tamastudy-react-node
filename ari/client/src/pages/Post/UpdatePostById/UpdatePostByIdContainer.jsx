import React, { useState, useEffect } from 'react';
import UpdatePostByIdPresenter from './UpdatePostByIdPresenter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPostById, updatePostById } from '../../../store/actions/post.action';
import Spinner from '../../../components/atoms/Spinner';

const UpdatePostByIdContainer = ({ history, match, postState, getPostById, updatePostById }) => {
  const postId = match.params.postId;

  useEffect(() => {
    getPostById(match.params.postId);
  }, [getPostById, match.params.postId]);

  const [formData, setFormData] = useState({
    title: postState.post.title,
    description: postState.post.description,
    imgUrl: postState.post.imgUrl,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePostById(postId, formData, history);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onClickMoveToBack = () => {
    history.goBack();
  };

  if (postState.loading) return <Spinner />;

  return (
    <UpdatePostByIdPresenter
      formData={formData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      onClickMoveToBack={onClickMoveToBack}
    />
  );
};

const mapStateToProps = ({ postState }) => ({
  postState,
});

export default withRouter(
  connect(mapStateToProps, { getPostById, updatePostById })(UpdatePostByIdContainer),
);
