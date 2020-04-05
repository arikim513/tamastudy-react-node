import {
  GET_POSTS,
  CREATE_POST,
  GET_POST_BY_ID,
  DELETE_POST_BY_ID,
  UPDATE_POST_BY_ID,
  CREATE_POST_COMMENT_BY_POST_ID,
  GET_POST_COMMENTS_BY_POST_ID,
  DELETE_POST_COMMENT_BY_POST_ID,
  POST_ERROR,
} from '../types';

const initialState = {
  posts: [],
  post: {},
  postComments: [],
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, posts: payload, loading: false };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, payload], loading: false };
    case GET_POST_BY_ID:
      return { ...state, post: payload, loading: false };
    case DELETE_POST_BY_ID:
      const { postId } = payload;
      return { ...state, posts: state.posts.filter((post) => post._id !== postId), loading: false };
    case UPDATE_POST_BY_ID:
      return {
        ...state,
        posts: [...state.posts.filter((post) => post._id !== payload._id), payload],
        post: payload,
        loading: false,
      };
    case CREATE_POST_COMMENT_BY_POST_ID:
      return { ...state, postComments: [payload, ...state.postComments], loading: false };
    case GET_POST_COMMENTS_BY_POST_ID:
      return { ...state, postComments: payload, loading: false };
    case DELETE_POST_COMMENT_BY_POST_ID:
      return {
        ...state,
        postComments: state.postComments.filter((comment) => comment._id !== payload),
        loading: false,
      };
    case POST_ERROR:
      return state;
    default:
      return state;
  }
};
