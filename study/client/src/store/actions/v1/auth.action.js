import { LOAD_USER, SIGN_UP, SIGN_IN, AUTH_ERROR } from '../../type';
import { toast } from 'react-toastify';
import axios from 'axios';

const setsessionStorage = (token) => {
  sessionStorage.setItem('token', token);
};

export const loadUserFn = () => async (dispatch) => {
  try {
    const token = sessionStorage.getItem('token');
    if (!token) {
      dispatch({ type: AUTH_ERROR, payload: '토큰이 존재하지않습니다. ' });
      return;
    }
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get('http://localhost:5000/v1/user/me', config);

    setTimeout(() => {
      dispatch({ type: LOAD_USER, payload: response.data.result._id });
    }, 500);
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

// 회원가입
export const signupFn = (formData) => async (dispatch) => {
  try {
    // 서버에 데이터를 주고, 받은 데이터를 가공하는 단계
    const response = await axios.post('http://localhost:5000/v1/user/signup', formData);

    // 가공된 데이터를 리듀서에 주는 단계
    dispatch({ type: SIGN_UP });

    // 로컬스토리지에 저장
    setsessionStorage(response.data.result);

    // 그냥 알람
    toast.success('회원가입이 완료 되었습니다. 홈으로 이동합니다.');
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

// 로그인
export const signinFn = (formData) => async (dispatch) => {
  try {
    // 서버에 데이터를 주고, 받은 데이터를 가공하는 단계
    const response = await axios.post('http://localhost:5000/v1/user/signin', formData);

    // 가공된 데이터를 리듀서에 주는 단계
    dispatch({ type: SIGN_IN });

    // 로컬스토리지에 저장
    setsessionStorage(response.data.result);

    // 그냥 알람
    toast.success('로그인이 완료 되었습니다. 홈으로 이동합니다.');
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};
