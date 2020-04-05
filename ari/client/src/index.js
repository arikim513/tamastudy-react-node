import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import GlobalStyles from './theme/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// redux
import store from './store';

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
      <ToastContainer draggable={false} newestOnTop autoClose={3000} position={'bottom-center'} />
    </ThemeProvider>
  </ReduxProvider>,

  document.getElementById('root'),
);
