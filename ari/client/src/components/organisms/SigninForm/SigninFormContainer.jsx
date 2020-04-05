import React, { useState } from 'react';
import SigninFormPresenter from './SigninFormPresenter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signinFn } from '../../../store/actions/auth.action';

const initialState = {
  email: '',
  password: '',
};

const SigninFormContainer = ({ history, signinFn }) => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    signinFn(formData, history);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <SigninFormPresenter
      formData={formData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default withRouter(connect(null, { signinFn })(SigninFormContainer));
