import { combineReducers } from 'redux';
<<<<<<< HEAD:ari/client/src/store/reducers/index.js
import counterReducer from './counter.reducer';
import authReducer from './auth.reducer';
import postReducer from './post.reducer';
=======

// v1 reducers
import authReducer from './v1/auth.reducer';
import postReducer from './v1/post.reducer';
>>>>>>> 10d2119c656ca6e315546ef1488b7c204fa02f56:study/client/src/store/reducers/index.js

export default combineReducers({
  authState: authReducer,
  postState: postReducer,
});
