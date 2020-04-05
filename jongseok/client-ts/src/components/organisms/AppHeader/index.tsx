import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../atoms/Icon';
import DefaultUserIcon from '../../../assets/icons/user.svg';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { IRootState } from '../../../store/reducers/index';

interface IProps extends RouteComponentProps<any> {
  authState: IRootState['authState'];
}

const LoggedInIcon = 'https://t1.daumcdn.net/cfile/tistory/2122B33357320AEB30';

const AppHeader = ({ authState, history }: IProps) => {
  const { isLoggedIn } = authState;
  return (
    <HeaderWrapper>
      <UserIcon
        isLoggedIn={isLoggedIn}
        src={isLoggedIn ? LoggedInIcon : DefaultUserIcon}
        size={isLoggedIn ? 24 : 22}
      />
      <Title onClick={() => history.push('/')}>TAMASTUDY</Title>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

const UserIcon = styled(Icon)<{ isLoggedIn: boolean }>`
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 50%;
  padding: 2px;
  ${(props) => css`
    ${!props.isLoggedIn && `border: 1px solid ${props.theme.colors.base.black}`};
  `}
`;

const Title = styled.div`
  font-family: 'Share', cursive;
  justify-self: center;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
`;

const mapStateToPRops = (state: IRootState) => ({
  authState: state.authState,
});

export default withRouter(connect(mapStateToPRops)(AppHeader));
