import { combineReducers } from 'redux';

// v1 reducers
import authReducer from './v1/auth.reducer';
import postReducer from './v1/post.reducer';

export default combineReducers({
  authState: authReducer,
  postState: postReducer,
});
