import React from 'react';
import HeaderPresenter from './HeaderPresenter';
import { connect } from 'react-redux';
import { logoutFn } from '../../../store/actions/auth.action';
import { withRouter } from 'react-router-dom';

const HeaderContainer = ({ history, handleNavigation, logoutFn, auth }) => {
  const { isLoggedIn, error, loading } = auth;

  const onClickMoveToHome = () => {
    history.push('/');
  };

  return (
    <HeaderPresenter
      handleLogOutFn={logoutFn}
      handleNavigation={handleNavigation}
      isLoggedIn={isLoggedIn}
      error={error}
      loading={loading}
      onClickMoveToHome={onClickMoveToHome}
    />
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default withRouter(connect(mapStateToProps, { logoutFn })(HeaderContainer));
