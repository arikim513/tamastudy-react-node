import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../theme';

const CommentForm = styled.form``;

const CommentInput = styled.input`
  padding: ${theme.space}px 0;
  font-size: 16px;
  font-weight: 600;
`;

const CreatePostCommentByPostIdPresenter = ({ formData, handleSubmit, handleChange }) => {
  return (
    <CommentForm>
      <CommentInput
        onChange={handleChange}
        name={'text'}
        value={formData.text}
        placeholder={'코멘트를 작성해주세요. '}
        onKeyPress={handleSubmit}
      />
    </CommentForm>
  );
};

export default CreatePostCommentByPostIdPresenter;
