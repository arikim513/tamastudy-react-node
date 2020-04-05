import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// middleware
import thunk from 'redux-thunk';

const middleware = [thunk];

export default createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)));
