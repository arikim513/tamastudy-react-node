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
<<<<<<< HEAD
  const isSingup = match.path.startsWith('/signup');

  const [formData, setFormData] = useState(
    isSingup ? initialStateForSignup : initialStateForSignin,
=======
  const isSignup = match.path.startsWith('/signup');

  const [formData, setFormData] = useState(
    isSignup ? initialStateForSignup : initialStateForSignin,
>>>>>>> 10d2119c656ca6e315546ef1488b7c204fa02f56
  );

  const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD

    if (isSingup) {
      if (formData.username === '' || formData.email === '') {
        toast.warn('회원가입 정보를 입력해주세요');
        return;
      }
      signupFn(formData);
      //setFormData(initialStateForSignup);
    } else {
      if (formData.email === '') {
        toast.warn('회원가입 정보를 입력해주세요');
        return;
      }
      signinFn(formData);
      //setFormData(initialStateForSignup);
    }

=======
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
>>>>>>> 10d2119c656ca6e315546ef1488b7c204fa02f56
    history.push('/');
  };

  const handleChange = (event) => {
<<<<<<< HEAD
    setFormData({ ...formData, [event.target.name]: event.target.value });
=======
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
>>>>>>> 10d2119c656ca6e315546ef1488b7c204fa02f56
  };

  return (
    <div>
<<<<<<< HEAD
      <h1>{isSingup ? '회원가입' : '로그인'}</h1>
      <form onSubmit={handleSubmit}>
        {isSingup && (
          <input
            type="text"
            placeholder={'username 입력해주세요'}
            value={formData.username}
            name={'username'}
            onChange={handleChange}
          />
        )}
        <input
          type="text"
          placeholder={'email 입력해주세요'}
          value={formData.email}
          name={'email'}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder={'password 입력해주세요'}
          value={formData.password}
          name={'password'}
          onChange={handleChange}
        />
      </form>

      <button type="submit">Click signup</button>
      <SignPresenter />
=======
      <SignPresenter
        isSignup={isSignup}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
>>>>>>> 10d2119c656ca6e315546ef1488b7c204fa02f56
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
  };
};

<<<<<<< HEAD
export default withRouter(connect(mapStateToProps, { signupFn, signinFn })(SignContainer)); //connect()()는 고차함수 hoc
=======
export default withRouter(connect(mapStateToProps, { signupFn, signinFn })(SignContainer));
>>>>>>> 10d2119c656ca6e315546ef1488b7c204fa02f56
