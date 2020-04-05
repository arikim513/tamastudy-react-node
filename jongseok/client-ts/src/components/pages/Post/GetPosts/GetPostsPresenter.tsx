import React from 'react';
import CommonLayout from '../../../CommonLayout/index';
import { IPostState } from '../../../../store/reducers/v1/post.reducer';
import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQuery';
import PostCard from '../../../molecules/PostCard';

interface Props {
  posts: IPostState['posts'];
}

const GetPostsPresenter = ({ posts }: Props) => {
  return (
    <CommonLayout>
      <Container>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </Container>
    </CommonLayout>
  );
};

const Container = styled.div`
  margin-top: ${(props) => props.theme.space * 4}px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  align-items: center;
  justify-content: center;
  ${mediaQueries('mobileL')`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
  `}
`;

export default GetPostsPresenter;
