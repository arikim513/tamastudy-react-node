import React from 'react';
import Button from '../../../components/atoms/Button';
import styled from '@emotion/styled';
import theme from '../../../theme';
import setTitle from '../../../utils/setTitle';
import CreatePostCommentByPostId from '../CreatePostCommentByPostId';
import GetPostCommentByPostId from '../GetPostCommentsByPostId';
import mediaQuery from '../../../theme/mediaQuery';
import moment from 'moment';

const Container = styled.section`
  margin: 0 ${theme.space}px;
  margin-bottom: ${theme.space * 2}px;
`;

const PostContainer = styled.section`
  width: 100%;
`;

const ImgBox = styled.div``;
const ImgItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div`
  font-size: 20px;
  > p {
    margin: ${theme.space}px 0;
  }
`;
const View = styled.p``;
const Title = styled.p``;
const Desc = styled.p``;
const CreatedAt = styled.p``;

const ButtonBox = styled.div`
  margin: ${theme.space * 2}px auto;
  display: flex;
  justify-content: center;
`;

const CustomButton = styled(Button)`
  width: 100%;
  ${mediaQuery(1)} {
    width: auto;
  }
`;

const PostCommentsContainer = styled.section`
  padding-top: ${theme.space * 2}px;
`;

const GetPostByIdPresenter = ({
  currentUserId,
  post,
  deletePostById,
  onClickMoveToBack,
  onClickMoveToUpdate,
}) => {
  const { view, title, description, imgUrl, createdAt, user } = post;

  return (
    <Container>
      <PostContainer>
        {setTitle('Post')}
        <ImgBox>
          <ImgItem src={imgUrl} alt={'img'} />
        </ImgBox>
        <TextBox>
          <View>View: {view}</View>
          <Title>Title: {title}</Title>
          <Desc>description: {description}</Desc>
          <CreatedAt>CreatedAt: {moment(createdAt).format('llll')}</CreatedAt>
        </TextBox>
        <ButtonBox>
          {currentUserId === user && (
            <>
              <CustomButton onClick={deletePostById} backgroundColor={'red'} text={'삭제'} />
              <CustomButton onClick={onClickMoveToUpdate} backgroundColor={'green'} text={'수정'} />
            </>
          )}
          <CustomButton onClick={onClickMoveToBack} backgroundColor={'blue'} text={'이전'} />
        </ButtonBox>
      </PostContainer>
      <PostCommentsContainer>
        <h1>Comments</h1>
        <CreatePostCommentByPostId />
        <GetPostCommentByPostId author={user} currentUserId={currentUserId} />
      </PostCommentsContainer>
    </Container>
  );
};

export default GetPostByIdPresenter;
