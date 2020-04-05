import { combineReducers } from 'redux';
import authReducer from './v1/auth.reducer';
import postReducer from './v1/post.reducer';

export default combineReducers({
  authDtate: authReducer,
  postState: postReducer,
});
