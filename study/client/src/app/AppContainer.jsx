import React, { useEffect } from 'react';
import AppPresenter from './AppPresenter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { connect } from 'react-redux';
import { loadUserFn } from '../store/actions/v1/auth.action';
import { Global, css } from '@emotion/core';
import superFormReset from '../style/superFormReset';

const AppContainer = ({ loadUserFn, authState }) => {
  useEffect(() => {
    loadUserFn();
  }, [loadUserFn, authState.isLoggedIn]);

  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
          }
          ${superFormReset}
        `}
      />
      <AppPresenter />
      <ToastContainer position={'bottom-center'} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
  };
};

export default connect(mapStateToProps, { loadUserFn })(AppContainer);
