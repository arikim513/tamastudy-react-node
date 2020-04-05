import React from 'react';
import styled from '@emotion/styled';
import mediaQuery from '../../../theme/mediaQuery';
import theme from '../../../theme';
import PostWrapper from '../../../components/organisms/PostWrapper';
import Button from '../../../components/atoms/Button';
import setTitle from '../../../utils/setTitle';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${theme.space * 2}px;
  margin: 0 auto ${theme.space * 4}px;
  ${mediaQuery(2)} {
    width: 1000px;
    margin: ${theme.space * 4}px auto;
  }
`;

const ComponentTitleBox = styled.div`
  ${mediaQuery(1)} {
    display: flex;
    justify-content: space-between;
  }
`;

const PageTitle = styled.h1`
  font-size: ${theme.space * 4}px;
  font-variant: small-caps;
  font-weight: 900;
  text-align: left;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${theme.space * 2}px;
  ${mediaQuery(1)} {
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
  ${mediaQuery(1)} {
    width: auto;
  }
`;

const ComponentContents = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 400px;
  grid-gap: ${theme.space * 4}px;

  ${mediaQuery(1)} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: ${theme.space * 44}px;
    grid-gap: 40px;
  }

  ${mediaQuery(2)} {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: ${theme.space * 44}px;
    grid-gap: ${theme * 8}px;
  }
`;

const GetPostsPresenter = ({
  isLoggedIn,
  posts,
  handleToastAlert,
  onClickMoveToCreatePost,
  onClickMoveToHome,
}) => {
  return (
    <Container>
      {setTitle('Posts')}
      <ComponentTitleBox>
        <PageTitle>POST</PageTitle>
        <ButtonBox>
          <CustomButton
            text={'정렬'}
            onClick={() => handleToastAlert('info', '준비중입니다. 다음 주에 합시당~!')}
            backgroundColor={'#34595e'}
            hoverBackgroundColor={'#183223'}
          />
          {isLoggedIn && <CustomButton text={'포스트 작성'} onClick={onClickMoveToCreatePost} />}
          <CustomButton
            text={'더보기'}
            onClick={() => handleToastAlert('info', '준비중입니다. 다음 주에 합시당~!')}
          />
          <CustomButton text={'홈으로'} onClick={onClickMoveToHome} />
        </ButtonBox>
      </ComponentTitleBox>
      <ComponentContents>
        {posts.map((post) => (
          <PostWrapper key={post._id} {...post} />
        ))}
      </ComponentContents>
    </Container>
  );
};

export default GetPostsPresenter;
