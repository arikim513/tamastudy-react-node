import React from 'react';

<<<<<<< HEAD
const SignPresenter = () => {
  return <div>SignPresenter</div>;
=======
const SignPresenter = ({ isSignup, formData, handleChange, handleSubmit }) => {
  return (
    <div>
      <h1>{isSignup ? '회원가입' : '로그인'}</h1>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <input
            type={'text'}
            placeholder={'유저명을 입력해주세요. '}
            value={formData.username}
            name={'username'}
            onChange={handleChange}
          />
        )}
        <input
          type={'text'}
          placeholder={'이메일을 입력해주세요. '}
          value={formData.email}
          name={'email'}
          onChange={handleChange}
        />
        <input
          type={'password'}
          placeholder={'비밀번호를 입력해주세요. '}
          value={formData.password}
          name={'password'}
          onChange={handleChange}
        />
        <button type={'submit'}>회원가입</button>
      </form>
    </div>
  );
>>>>>>> 10d2119c656ca6e315546ef1488b7c204fa02f56
};

export default SignPresenter;
