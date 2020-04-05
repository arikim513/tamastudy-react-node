import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store';
ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root'),
);

//context!!이 태그로 감싸지는 모든 자식들에서 공유하고 싶은 값 여기 설정
{
  /* <ContextProvider value={a:1}>
    <App/>
    <Post/>
</ContextProvider> */
}
//->이걸 리덕스버전으로 한거!!
