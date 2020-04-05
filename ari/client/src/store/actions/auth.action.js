import axios from 'axios';
import { toast } from 'react-toastify';
import { LOAD_USER, LOGGED_IN, LOGGED_OUT, AUTH_ERROR } from '../types';

// 유저 로드 (me)
export const getMeFn = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch({ type: AUTH_ERROR });
      return;
    }
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get('/api/v1/user/me', config);
    const payload = response.data.data._id;
    dispatch({ type: LOAD_USER, payload });
  } catch (err) {
    console.log(err.response.data.error);
    dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};
// 회원가입
export const signupFn = (signupData, history) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/user/signup', signupData);
    const token = response.data.data;
    localStorage.setItem('token', token);
    dispatch({ type: LOGGED_IN });
    toast.success('회원가입 성공');
    history.goBack();
  } catch (err) {
    console.log(err.response.data.error);
    dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

// 로그인
export const signinFn = (signinData, history) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/user/signin', signinData);
    const token = response.data.data;
    localStorage.setItem('token', token);
    dispatch({ type: LOGGED_IN });
    toast.success('로그인 성공');
    history.goBack();
  } catch (err) {
    console.log(err.response.data.error);
    dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

// 로그아웃
export const logoutFn = () => async (dispatch) => {
  try {
    // Todo : logout api
    localStorage.removeItem('token');
    dispatch({ type: LOGGED_OUT });
    toast.success('로그아웃 되었습니다.');
  } catch (err) {
    console.log(err);
    dispatch({ type: AUTH_ERROR });
    toast.error(err);
  }
};
