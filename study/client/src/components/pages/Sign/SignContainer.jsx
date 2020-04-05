import React, { useState } from 'react';
import SignPresenter from './SignPresenter';
import { connect } from 'react-redux';
import { signupFn, signinFn } from '../../../store/actions/v1/auth.action';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

const initialStateForSignup = {
  username: '',
  email: '',
  password: '',
};

const initialStateForSignin = {
  email: '',
  password: '',
};

const SignContainer = ({ history, match, authState, signupFn, signinFn }) => {
  const isSignup = match.path.startsWith('/signup');

  const [formData, setFormData] = useState(
    isSignup ? initialStateForSignup : initialStateForSignin,
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignup) {
      if (formData.username === '' || formData.email === '' || formData.password === '') {
        toast.warn('회원가입 폼 정보를 입력해주세요. ');
        return;
      }
      signupFn(formData);
    } else {
      if (formData.email === '' || formData.password === '') {
        toast.warn('로그인 폼 정보를 입력해주세요. ');
        return;
      }
      signinFn(formData);
    }
    history.push('/');
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <SignPresenter
        isSignup={isSignup}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
  };
};

export default withRouter(connect(mapStateToProps, { signupFn, signinFn })(SignContainer));
