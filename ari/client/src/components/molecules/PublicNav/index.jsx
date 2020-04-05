import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import theme from '../../../theme';
import mediaQuery from '../../../theme/mediaQuery';

const NavList = styled.div`
  text-align: center;
  ${mediaQuery(1)} {
    &:not(:first-of-type) {
      margin-left: ${theme.space * 2}px;
    }
    &:not(:last-of-type) {
      margin-right: ${theme.space * 2}px;
    }
  }
`;

const CustomNavLink = styled(NavLink)`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  text-shadow: ${(props) => props.current && ``};
  font-size: 18px;
  line-height: ${theme.space * 3}px;
`;

const activeStyle = { textShadow: '2px 2px 3px rgba(0,0,0,0.3)' };

const PublicNav = () => {
  return (
    <>
      <NavList>
        <CustomNavLink to={'/posts'} activeStyle={activeStyle}>
          posts
        </CustomNavLink>
      </NavList>
    </>
  );
};

export default PublicNav;
