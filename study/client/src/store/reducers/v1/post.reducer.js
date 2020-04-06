import { GET_POST, GET_POST_BY_ID } from '../../type';

const initialState = {
  posts: [], //[{},{},{}] null아닌 형식을 주는 이유는 map할떄 타입있어야 에러 안 남
  post: {},
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return;
    case GET_POST_BY_ID:
      return;
    default:
      return state; // initialState 가 그대로 반환
  }
};
