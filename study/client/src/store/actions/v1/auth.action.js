import { LOAD_USER, SIGN_UP, SIGN_IN, AUTH_ERROR } from '../../type';
import { toast } from 'react-toastify';
import axios from 'axios';

//미들웨어 통과하면서 thunk!! 디스패치 보내줌!
// export const signinFn = () => async (dispatch) => {
//   try {
//     const payload = 'ngbrbgrilabh'; //이런저런 처리 위에서 한 결과값!! 하면에 로드하고 싶은거
//     dispatch({ type: SIGN_IN, payload: payload }); //디스패치는 리듀서에 액션(오브젝트)보내줌!
//   } catch (err) {
//     console.log(err);
//   }
// };

const setLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

export const loadUserFn = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
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
    dispatch({ type: LOAD_USER, payload: response.data.result._id });
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
    // const response = await axios.post('http://localhost:5000/v1/user/signup', {
    //     username: 'ari',
    //     email: 'aaa',
    //     password: '1234',
    //   });

    // 가공된 데이터를 리듀서에 주는 단계
    dispatch({ type: SIGN_UP });

    // 로컬스토리지에 저장
    setLocalStorage(response.data.result);

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
    console.log(response.data);

    // 가공된 데이터를 리듀서에 주는 단계
    dispatch({ type: SIGN_IN });

    // 로컬스토리지에 저장
    setLocalStorage(response.data.result);

    // 그냥 알람
    toast.success('로그인이 완료 되었습니다. 홈으로 이동합니다.');
  } catch (err) {
    console.log(err);
    dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};
//curry :이걸 축약한 버전이 위의 const signinFn = () => (dispatch) => {}
// function signinFn() {
//     function (dispatch) {
//         return;
//     }
//     return;
// }
