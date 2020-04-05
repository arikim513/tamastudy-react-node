import React, { useState } from 'react';
import CreatePostPresenter from './CreatePostPresenter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../../store/actions/post.action';

const initialState = {
  title: '',
  description: '',
  imgUrl: '',
};

const CreatePostContainer = ({ history, createPost }) => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost(formData, history);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <CreatePostPresenter
      formData={formData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default withRouter(connect(null, { createPost })(CreatePostContainer));
