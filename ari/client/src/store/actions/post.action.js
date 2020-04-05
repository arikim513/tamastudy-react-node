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
import axios from 'axios';
import { toast } from 'react-toastify';

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/v1/post');
    const payload = response.data.result;
    dispatch({ type: GET_POSTS, payload });
  } catch (err) {
    console.log(err.response.data.error);
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const createPost = (formData, history) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return alert('invalid token');
    }
    const response = await axios.post('/api/v1/post/create', formData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const payload = response.data.data;

    dispatch({ type: CREATE_POST, payload });
    toast.success('작성이 완료 되었습니다.');
    history.push('/posts');
  } catch (err) {
    console.log(err.response.data.error);
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const getPostById = (postId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/v1/post/${postId}`);
    const payload = response.data.result;
    dispatch({ type: GET_POST_BY_ID, payload });
  } catch (err) {
    console.log(err.response.data.error);
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const deletePostById = (postId, history) => async (dispatch) => {
  try {
    if (window.confirm('삭제하시겠습니까?')) {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(`/api/v1/post/delete/${postId}`, config);
      toast.success(response.data.result);
      const payload = postId;
      dispatch({ type: DELETE_POST_BY_ID, payload });
      history.push('/posts');
    }
  } catch (err) {
    console.log(err.response.data.error);
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const updatePostById = (postId, formData, history) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return alert('invalid token');
    }
    const response = await axios.put(`/api/v1/post/update/${postId}`, formData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const payload = response.data.result;

    dispatch({ type: UPDATE_POST_BY_ID, payload });
    toast.success('수정이 완료 되었습니다.');
    history.push('/posts');
  } catch (err) {
    console.log(err.response.data.error);
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const createPostCommentByPostId = (postId, formData) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return alert('invalid token');
    }
    const response = await axios.post(`/api/v1/post/${postId}/comment/create`, formData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const payload = response.data.data;

    dispatch({ type: CREATE_POST_COMMENT_BY_POST_ID, payload });
    toast.success('코멘트를 작성하였습니다. ');
  } catch (err) {
    console.log(err.response.data.error);
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const getPostCommentsByPostId = (postId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/v1/post/${postId}/comment`);
    const payload = response.data.data;
    dispatch({ type: GET_POST_COMMENTS_BY_POST_ID, payload });
  } catch (err) {
    console.log(err.response.data.error);
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const deletePostCommentByPostId = (postId, postCommentId) => async (dispatch) => {
  try {
    if (window.confirm('코멘트를 삭제하시겠습니까?')) {
      const token = localStorage.getItem('token');
      if (!token) {
        return alert('invalid token');
      }
      const response = await axios.delete(
        `/api/v1/post/${postId}/comment/delete/${postCommentId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const payload = response.data.result._id;
      dispatch({ type: DELETE_POST_COMMENT_BY_POST_ID, payload });
      toast.success('코멘트를 삭제하였습니다. ');
    }
  } catch (err) {
    console.log(err.response.data.error);
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};
