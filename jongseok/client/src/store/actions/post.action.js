import {
  GET_POSTS,
  CREATE_POST,
  GET_POST_BY_ID,
  DELETE_POST_BY_ID,
  UPDATE_POST_BY_ID,
  POST_ERROR,
} from '../types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getPosts = () => async (dispatch) => {
  try {
    const response = axios.get('/api/v1/post');
    const pageInfo = response.data.pageInfo;
    const posts = response.data.result;
    const payload = {
      posts,
      pageInfo,
    };
    dispatch({ type: GET_POSTS, payload });
  } catch (err) {
    console.log(err);
    dispatch({ type: POST_ERROR });
    toast.error('포스트 요청에 실패하였습니다. ');
  }
};

export const createPost = () => async (dispatch) => {
  try {
  } catch (err) {
    console.log(err);
    dispatch({ type: POST_ERROR });
    toast.error('포스트 작성에 실패하였습니다. ');
  }
};

export const getPostById = () => async (dispatch) => {
  try {
  } catch (err) {
    console.log(err);
    dispatch({ type: POST_ERROR });
    toast.error('포스트 요청에 실패하였습니다. ');
  }
};

export const deletePostById = () => async (dispatch) => {
  try {
  } catch (err) {
    console.log(err);
    dispatch({ type: POST_ERROR });
    toast.error('포스트 삭제에 실패하였습니다. ');
  }
};

export const updatePostById = () => async (dispatch) => {
  try {
  } catch (err) {
    console.log(err);
    dispatch({ type: POST_ERROR });
    toast.error('포스트 업데이트에 실패하였습니다. ');
  }
};