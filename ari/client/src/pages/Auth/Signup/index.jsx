import React from 'react';
import SignupForm from '../../../components/organisms/SignupForm';
import setTitle from '../../../utils/setTitle';

const Signin = () => {
  return (
    <>
      {setTitle('Sign Up')}
      <SignupForm />
    </>
  );
};

export default Signin;
