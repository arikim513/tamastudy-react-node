import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../theme';
import moment from 'moment';
import Button from '../../../components/atoms/Button';

const CommentContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 48px 1fr;
  align-items: center;
  margin: ${theme.space * 2}px 0;
`;

const ProfileBox = styled.div`
  width: 48px;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${theme.colors.base.grey};
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CommentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 56px;
  padding-left: ${theme.space}px;
`;

const CommentInfo = styled.p`
  &:first-of-type {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  &:last-of-type {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-right: ${theme.space}px;
`;

const CreatedAt = styled.span``;

const Text = styled(CommentInfo)`
  margin-top: ${theme.space / 2}px;
  font-size: 16px;
`;

const ButtonBox = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  display: flex;
  justify-content: flex-end;
`;

const CustomButton = styled(Button)`
  margin-top: ${theme.space / 2}px;
  padding: ${theme.space}px;
  font-size: 8px;
  font-weight: 700;
  background-color: red;
`;

const GetPostCommentsByPostIdPresenter = ({
  author,
  comment: { _id, text, user, createdAt },
  currentUserId,
  postId,
  deletePostCommentByPostId,
}) => {
  return (
    <CommentContainer>
      <ProfileBox>
        <ProfileImage
          src={
            'https://stickershop.line-scdn.net/stickershop/v1/product/16687/LINEStorePC/main.png;compress=true'
          }
          alt={'noImage'}
        />
      </ProfileBox>
      <CommentBox>
        <CommentInfo>
          <UserName>{author === user._id ? `${user.username} (작성자)` : user.username}</UserName>
          <CreatedAt>{moment(createdAt).format('llll')}</CreatedAt>
        </CommentInfo>
        <CommentInfo></CommentInfo>
        <Text>{text}</Text>
        {currentUserId === user._id && (
          <ButtonBox>
            <CustomButton onClick={() => deletePostCommentByPostId(postId, _id)} text={'삭제'} />
          </ButtonBox>
        )}
      </CommentBox>
    </CommentContainer>
  );
};

export default GetPostCommentsByPostIdPresenter;
