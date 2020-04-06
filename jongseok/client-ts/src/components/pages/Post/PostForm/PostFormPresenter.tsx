import React from 'react';
import { IPostCreateInitialState } from './PostFormContainer';
import styled from 'styled-components';
import QuillEditor from '../../../editor/QuillEditor';
import 'react-quill/dist/quill.snow.css';

interface Props {
  formData: IPostCreateInitialState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDescriptionChange: any;
  handleFileChange: any;
}

const PostFormPresenter = ({
  formData,
  onChange,
  onSubmit,
  handleDescriptionChange,
  handleFileChange,
}: Props) => {
  return (
    <Wrapper>
      <FormWrapper onSubmit={onSubmit}>
        <InputTitle type={'text'} onChange={onChange} name={'title'} value={formData.title} />
        <QuillEditor
          placeholder={'포스트내용을 입력해주세요. '}
          onEditorChange={handleDescriptionChange}
          onFilesChange={handleFileChange}
        />
        <InputThumbnail type={'text'} onChange={onChange} name={'imgUrl'} value={formData.imgUrl} />
        <SubmitButton type={'submit'}>CREATE POST</SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 16px;
`;

const FormWrapper = styled.form`
  display: grid;
  grid-gap: 8px;
`;

const InputTitle = styled.input.attrs((props) => ({
  placeholder: '타이틀을 입력해주세요 .',
}))`
  width: 100%;
  padding: 8px 16px 8px 0;
  font-size: 26px;
  font-family: 'Share', cursive;
  margin-left: 8px;
  &::placeholder {
    font-style: italic;
    font-size: 20px;
    font-weight: 300;
  }
`;

const InputThumbnail = styled(InputTitle).attrs((props) => ({
  placeholder: '썸네일 이미지 주소를 입력해주세요 .',
}))``;

const SubmitButton = styled.button`
  width: 100%;
  background: black;
  color: white;
  padding: 16px;
  cursor: pointer;
  font-family: 'Share', cursive;
  outline: none;
`;

export default PostFormPresenter;
