import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider as ReduxProvider } from 'react-redux';

// redux
import store from './store';

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root'),
);
