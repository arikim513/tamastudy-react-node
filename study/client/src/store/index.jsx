import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'; //for debuging

// Middleware
import thunk from 'redux-thunk'; //비동기처리...?
const middleware = [thunk];

//const middleware 에 넣어준 배열 순서대로 리듀서에 들어감.
export default createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)));
// export default createStore(rootReducers, applyMiddleware(thunk));
