import React, { useState } from 'react';
import CreatePostCommentByPostIdPresenter from './CreatePostCommentByPostIdPresenter';
import { createPostCommentByPostId } from '../../../store/actions/post.action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const initialState = {
  text: '',
};

const CreatePostCommentByPostIdContainer = ({ match, postState, createPostCommentByPostId }) => {
  const postId = match.params.postId;

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      createPostCommentByPostId(postId, formData);
      setFormData(initialState);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <CreatePostCommentByPostIdPresenter
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

const mapStateToProps = ({ postState }) => ({
  postState,
});

export default withRouter(
  connect(mapStateToProps, { createPostCommentByPostId })(CreatePostCommentByPostIdContainer),
);
