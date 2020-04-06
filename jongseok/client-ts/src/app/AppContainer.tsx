import React, { useEffect } from 'react';
import AppPresenter from './AppPresenter';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';
import { connect } from 'react-redux';
import { IRootState } from '../store/reducers/index';
import { loadUserFn } from '../store/actions/v1/auth.action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  authState: IRootState['authState'];
  loadUserFn: any;
}

const AppContainer = ({ authState, loadUserFn }: Props) => {
  useEffect(() => {
    loadUserFn();
  }, [loadUserFn, authState.isLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppPresenter />
      <ToastContainer position={'bottom-center'} />
    </ThemeProvider>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    authState: state.authState,
  };
};

export default connect(mapStateToProps, { loadUserFn })(AppContainer);
