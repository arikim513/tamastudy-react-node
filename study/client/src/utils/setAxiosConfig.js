import { AUTH_ERROR } from '../store/type';

export default (dispatch) => {
  const token = sessionStorage.getItem('token');

  if (!token) {
    dispatch({
      type: AUTH_ERROR,
      payload: '토큰이 존재하지 않습니다. ',
    });
    return null;
  }

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return {
    config,
  };
};
