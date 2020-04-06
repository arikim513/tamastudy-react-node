import React from 'react';
import { IPost } from '../../../../store/reducers/v1/post.reducer';

interface Props {
  post: IPost;
}

const GetPostByIdPresenter = ({
  post: { _id, createdAt, description, imgUrl, postComments, title, user, view },
}: Props) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default GetPostByIdPresenter;
