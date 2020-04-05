import React from 'react';
import SigninForm from '../../../components/organisms/SigninForm';
import setTitle from '../../../utils/setTitle';

const Signin = () => {
  return (
    <>
      {setTitle('Sign In')}
      <SigninForm />
    </>
  );
};

export default Signin;
