import React, { useState } from 'react';
import PostFormPresenter from './PostFormPresenter';
import CommonLayout from '../../../CommonLayout/index';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { createPostFn } from '../../../../store/actions/v1/post.action';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface IPostCreateInitialState {
  title: string;
  description: string;
  imgUrl: string;
  files: string[];
}

const initialStateForCreate: IPostCreateInitialState = {
  title: '',
  description: '',
  imgUrl: '',
  files: [],
};

interface Props extends RouteComponentProps<any> {
  createPostFn: any;
}

const PostFormContainer = ({ history, createPostFn }: Props) => {
  const [formData, setFormData] = useState(initialStateForCreate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDescriptionChange = (html: any) => {
    setFormData({
      ...formData,
      description: html,
    });
  };

  const handleFileChange = (files: string[]) => {
    setFormData({
      ...formData,
      files: files,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { title, description, imgUrl } = formData;
    e.preventDefault();
    if (title.length === 0) {
      return toast.error('타이틀은 필수입력사항입니다. ');
    }
    if (description.length === 0) {
      return toast.error('포스트내용은 필수입력사항입니다. ');
    }
    if (!imgUrl.startsWith('https://')) {
      return toast.error('썸네일 이미지주소를 확인해주세요. ');
    }
    createPostFn(formData);
    // setTimeout(() => {
    //   history.push('/posts');
    // }, 1500);
    history.push('/posts');
  };

  return (
    <CommonLayout>
      <PostFormPresenter
        formData={formData}
        onChange={handleChange}
        handleDescriptionChange={handleDescriptionChange}
        handleFileChange={handleFileChange}
        onSubmit={handleSubmit}
      />
    </CommonLayout>
  );
};

export default withRouter(connect(null, { createPostFn })(PostFormContainer));
