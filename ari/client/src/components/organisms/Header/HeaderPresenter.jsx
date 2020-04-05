import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import mediaQuery from '../../../theme/mediaQuery';
import theme from '../../../theme';
import { NavLink } from 'react-router-dom';
import Hamburger from '../../atoms/Hamburger';

const Container = styled.div`
  ${mediaQuery(2)} {
    width: 1000px;
    height: inherit;
    margin: 0 auto;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${theme.space}px ${theme.space}px ${theme.space}px ${theme.space}px;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderMenuBox = styled.div`
  display: flex;
`;

const AuthBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
`;

const AuthLink = styled(NavLink)`
  margin-left: ${theme.space * 2}px;
  text-decoration: none;
  color: inherit;
  font-size: 1.6rem;
  text-transform: uppercase;
`;

const HeaderPresenter = ({ isLoggedIn, handleLogOutFn, handleNavigation }) => {
  return (
    <Container>
      <Header>
        <LogoBox>
          <Hamburger onClick={handleNavigation} />
        </LogoBox>

        <HeaderMenuBox>
          <AuthBox>
            {isLoggedIn && (
              <AuthLink to={'#'} onClick={handleLogOutFn}>
                LOGOUT
              </AuthLink>
            )}
            {!isLoggedIn && (
              <>
                <AuthLink to="/signup">SIGN UP</AuthLink>
                <AuthLink to="/signin">SIGN IN</AuthLink>
              </>
            )}
          </AuthBox>
        </HeaderMenuBox>
      </Header>
    </Container>
  );
};

HeaderPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogOutFn: PropTypes.func,
};

export default HeaderPresenter;
