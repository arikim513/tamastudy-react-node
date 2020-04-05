import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../theme';
import { NavLink } from 'react-router-dom';
import { Apple, BeachAccess, Call, Chat, Cloud, Eco } from '@material-ui/icons';

const BackDrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  transition: opacity 250ms;
  opacity: ${(props) => (props.isNavOpen ? 0 : 1)};
  transform: ${(props) => (props.isNavOpen ? 'translateX(-100%)' : 'translateX(0)')};
  background-color: rgba(0, 0, 0, 0.5);
`;

const NavContainer = styled.ul`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10001;
  transition: transform 250ms;
  transform: ${(props) => (props.isNavOpen ? 'translateX(-345px)' : 'translateX(0)')};
  background-color: ${theme.colors.base.darkGrey};
  width: 345px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavUl = styled.ul`
  margin-top: 6rem;
  position: relative;
`;

const NavList = styled.li`
  list-style: none;
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  &:hover {
    -webkit-text-fill-color: black;
    color: black !important;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: ${theme.colors.text.darkPrimary};
    transform: scaleY(0);
    transition: transform 0.1s, width 0.2s cubic-bezier(1, 0, 0, 1) 0.1s, background-color 0.1s;
    transform-origin: center;
  }

  &:hover::before {
    transform: scaleY(1);
    width: 100%;
  }

  &:hover::before,
  &-active::before {
    transform: scaleY(1);
    width: 100%;
  }

  &:active::before {
    background-color: #444444;
  }
`;

const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  padding: 2rem 0;
  padding-left: 5rem;
  position: relative;
  -webkit-text-fill-color: ${theme.colors.base.white};
  color: ${theme.colors.base.white};
  display: flex;
  align-items: center;
`;

const ListText = styled.span`
  margin-left: 3rem;
  font-size: 1.8rem;
`;

const Legal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  font-size: 1.4rem;
`;

const activeStyle = { backgroundColor: theme.colors.text.darkPrimary };

const Navigation = ({ isNavOpen, handleNavigation }) => {
  return (
    <>
      <BackDrop isNavOpen={isNavOpen} onClick={handleNavigation} />
      <NavContainer isNavOpen={isNavOpen}>
        <NavUl>
          <NavList>
            <CustomNavLink to={'/posts'} activeStyle={activeStyle} onClick={handleNavigation}>
              <Apple style={{ fontSize: 14 }} />
              <ListText className={'list-text'}>Posts</ListText>
            </CustomNavLink>
          </NavList>
          <NavList>
            <CustomNavLink to={'/private'} activeStyle={activeStyle} onClick={handleNavigation}>
              <BeachAccess style={{ fontSize: 14 }} />
              <ListText className={'list-text'}>private 1</ListText>
            </CustomNavLink>
          </NavList>
          <NavList>
            <CustomNavLink to={'/4214'} activeStyle={activeStyle} onClick={handleNavigation}>
              <Call style={{ fontSize: 14 }} />
              <ListText className={'list-text'}>Board</ListText>
            </CustomNavLink>
          </NavList>
          <NavList>
            <CustomNavLink to={'/123'} activeStyle={activeStyle} onClick={handleNavigation}>
              <Chat style={{ fontSize: 14 }} />
              <ListText className={'list-text'}>Study</ListText>
            </CustomNavLink>
          </NavList>
          <NavList>
            <CustomNavLink to={'/123'} activeStyle={activeStyle} onClick={handleNavigation}>
              <Cloud style={{ fontSize: 14 }} />
              <ListText className={'list-text'}>private 1</ListText>
            </CustomNavLink>
          </NavList>
          <NavList>
            <CustomNavLink to={'/123'} activeStyle={activeStyle} onClick={handleNavigation}>
              <Eco style={{ fontSize: 14 }} />
              <ListText className={'list-text'}>Contact</ListText>
            </CustomNavLink>
          </NavList>
        </NavUl>

        <Legal>&copy; 2020 by Tamastudy. All rights reserved</Legal>
      </NavContainer>
    </>
  );
};

export default Navigation;
