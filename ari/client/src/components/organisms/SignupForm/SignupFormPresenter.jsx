import React from 'react';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import Submit from '../../atoms/Submit';

const SigninFormPresenter = ({
  handleSubmit,
  handleChange,
  formData,
  loading,
  className,
  ...props
}) => {
  return (
    <Form onSubmit={handleSubmit} className={className} {...props}>
      <Input
        onChange={handleChange}
        type={'text'}
        placeholder={'USERNAME'}
        value={formData.username}
        name={'username'}
      />
      <Input
        onChange={handleChange}
        type={'text'}
        placeholder={'EMAIL'}
        value={formData.email}
        name={'email'}
      />
      <Input
        onChange={handleChange}
        type={'password'}
        placeholder={'PASSWORD'}
        value={formData.password}
        name={'password'}
      />
      <Submit btnText={'회원가입'} />
    </Form>
  );
};

export default SigninFormPresenter;
