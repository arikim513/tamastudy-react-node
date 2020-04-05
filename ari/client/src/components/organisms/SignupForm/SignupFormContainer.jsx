import React, { useState } from 'react';
import SignupFormPresenter from './SignupFormPresenter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupFn } from '../../../store/actions/auth.action';

const initialState = {
  username: '',
  email: '',
  password: '',
};

const SignupFormContainer = ({ history, signupFn }) => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    signupFn(formData, history);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <SignupFormPresenter
      formData={formData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default withRouter(connect(null, { signupFn })(SignupFormContainer));
