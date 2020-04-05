import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../theme';
import mediaQuery from '../../../theme/mediaQuery';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  background-color: blue;
  box-sizing: border-box;
  padding: ${theme.space * 4}px 0;
  border-radius: 8px;
  box-shadow: 4px 7px 8px -1px #7f7f7f;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.imgUrl && props.imgUrl});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  cursor: pointer;
  transition: transform 800ms ease-out;
  &:hover {
    transform: scale(1.04);
  }
  ${mediaQuery(1)} {
    &:first-of-type {
      grid-column: 1 / -1;
    }
  }
  ${mediaQuery(2)} {
    background-position: center;
  }
`;

const PostContents = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  padding: ${theme.space * 4}px ${theme.space * 3}px ${theme.space * 3}px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(110, 110, 110, 0.6) 16%,
    rgba(0, 0, 0, 1) 100%
  );

  & > * {
    -webkit-text-fill-color: ${theme.colors.base.white};
    color: ${theme.colors.base.white};
  }
`;

const PostId = styled.div`
  font-weight: 600;
`;

const PostTitle = styled.div`
  font-weight: 900;
  font-size: ${theme.space * 3}px;
  width: calc(238px - ${theme.space * 4}px * 2);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const PostUserName = styled.div`
  text-align: right;
  margin-top: ${theme.space}px;
  font-size: 14px;
`;

const PostCreatedAt = styled.div`
  text-align: right;
`;

const PostCommentAlert = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${theme.space * 2}px;
  font-size: 20px;
  font-weight: 900;
  border-top-right-radius: 8px;
  -webkit-text-fill-color: ${theme.colors.base.white};
  color: ${theme.colors.base.white};
`;

const PostWrapper = ({ history, _id, imgUrl, title, username, createdAt, postComments }) => {
  return (
    <Container key={_id} imgUrl={imgUrl} onClick={() => history.push(`/post/${_id}`)}>
      {postComments.length > 0 && <PostCommentAlert>{postComments.length}</PostCommentAlert>}
      <PostContents>
        <PostId>{_id}</PostId>
        <PostTitle>{title}</PostTitle>
        <PostUserName>{username}</PostUserName>
        <PostCreatedAt>{createdAt}</PostCreatedAt>
      </PostContents>
    </Container>
  );
};

export default withRouter(PostWrapper);
