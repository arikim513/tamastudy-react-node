import React from 'react';
import { useDispatch } from 'react-redux';
import { createPostFn } from '../../../../store/actions/v1/post.action';
import { useFormik } from 'formik';
import { yupValidate } from './util';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

const CreatePost = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const postFormik = useFormik({
    initialValues: {
      title: '',
      description: '',
      imgUrl: '',
    },
    validationSchema: yupValidate,
    onSubmit: (formData) => {
      dispatch(createPostFn(formData, history));
    },
  });

  return (
    <Wrapper>
      <Form onSubmit={postFormik.handleSubmit}>
        <ComponentTitle>Create Post</ComponentTitle>
        {/* 1. Title */}
        <InputBox>
          <Label htmlFor="title" error={postFormik.touched.title && postFormik.errors.title}>
            Title
          </Label>
          <Input
            id="title"
            name="title"
            type="text"
            onChange={postFormik.handleChange}
            onBlur={postFormik.handleBlur}
            value={postFormik.values.title}
            placeholder={'input title... '}
            error={postFormik.touched.title && postFormik.errors.title}
          />
          {postFormik.touched.title && postFormik.errors.title ? (
            <ErrorBox>{postFormik.errors.title}</ErrorBox>
          ) : null}
        </InputBox>
        {/* 2. Description */}
        <InputBox>
          <Label
            htmlFor="description"
            error={postFormik.touched.description && postFormik.errors.description}
          >
            Description
          </Label>
          <TextArea
            id="description"
            name="description"
            type="textarea"
            onChange={postFormik.handleChange}
            onBlur={postFormik.handleBlur}
            value={postFormik.values.description}
            placeholder={'input description... '}
            error={postFormik.touched.description && postFormik.errors.description}
          />
          {postFormik.touched.description && postFormik.errors.description ? (
            <ErrorBox>{postFormik.errors.description}</ErrorBox>
          ) : null}
        </InputBox>
        {/* 3. Image Url */}
        <InputBox>
          <Label htmlFor="imgUrl" error={postFormik.touched.imgUrl && postFormik.errors.imgUrl}>
            Image Url
          </Label>
          <Input
            id="imgUrl"
            name="imgUrl"
            type="text"
            onChange={postFormik.handleChange}
            onBlur={postFormik.handleBlur}
            value={postFormik.values.imgUrl}
            placeholder={'input image url...'}
            error={postFormik.touched.imgUrl && postFormik.errors.imgUrl}
          />
          {postFormik.touched.imgUrl && postFormik.errors.imgUrl ? (
            <ErrorBox>{postFormik.errors.imgUrl}</ErrorBox>
          ) : null}
        </InputBox>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  background-image: url('https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    font-family: 'Sunflower', sans-serif;
  }
`;

const Form = styled('form')`
  width: 420px;
  height: 600px;
  background-color: white;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: 0 32px;

  overflow-y: auto;
  box-shadow: 10px 10px 5px -5px rgba(0, 0, 0, 0.2);
`;

const ComponentTitle = styled('h1')`
  color: #2980b9;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const InputBox = styled('div')`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin: 16px 0;

  position: relative;
`;

const Label = styled('label')`
  text-transform: uppercase;

  color: ${(props) => (props.error ? '#d63031' : '#2980b9')};
`;

const Input = styled('input')`
  width: 100%;

  box-sizing: border-box;
  padding: 8px 0;
  font-size: 16px;

  outline: none;
  border-bottom: 1px solid ${(props) => (props.error ? '#d63031' : '#bdc3c7')};

  &:active,
  &:focus {
    border-bottom: 1px solid #2980b9;
  }

  &::placeholder {
    font-size: 10px;
    color: ${(props) => (props.error ? '#d63031' : '#bdc3c7')};
  }
`;

const TextArea = styled('textarea')`
  width: 100%;
  height: 160px;

  box-sizing: border-box;
  padding: 8px 0;
  font-size: 16px;

  outline: none;
  border-bottom: 1px solid ${(props) => (props.error ? '#d63031' : '#bdc3c7')};

  &:active,
  &:focus {
    border-bottom: 1px solid #2980b9;
  }

  &::placeholder {
    font-size: 10px;
    color: ${(props) => (props.error ? '#d63031' : '#bdc3c7')};
  }
`;

const ErrorBox = styled('div')`
  position: absolute;
  top: 0;
  right: 0;

  color: red;
  font-weight: 400;
  font-size: 8px;
`;

const SubmitButton = styled('button')`
  margin-top: 42px;

  background-color: #2980b9;
  color: #ffffff;

  height: 50px;

  cursor: pointer;
  box-sizing: border-box;
  padding: 16px 0;

  width: 100%;
  outline: none;

  text-transform: uppercase;
  position: relative;
  top: 0;

  border-bottom: 2px solid rgba(0, 0, 0, 0.5);

  transition: all 0.1s ease-in;

  &:active {
    top: 2px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export default CreatePost;
