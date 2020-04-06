import { Dispatch } from 'redux';
import { IPostAction } from '../../reducers/v1/post.reducer';
import { toast } from 'react-toastify';
import { API } from '../../../utils/axios';
import { IPostCreateInitialState } from '../../../components/pages/Post/PostForm/PostFormContainer';

export const getPostsFn = (cursor?: string) => async (dispatch: Dispatch<IPostAction>) => {
  try {
    const response = await API.get(cursor ? `/post?cursor=${cursor}` : '/post');
    dispatch({ type: 'GET_POSTS', payload: response.data });
  } catch (err) {
    dispatch({ type: 'POST_ERROR', payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const getSearchPostsFn = (title: string) => async (dispatch: Dispatch<IPostAction>) => {
  try {
    const response = await API.get(title ? `/post?title=${title}` : '/post');
    dispatch({ type: 'GET_SEARCH_POSTS_BY_TITLE', payload: response.data });
  } catch (err) {
    dispatch({ type: 'POST_ERROR', payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const createPostFn = (formData: IPostCreateInitialState) => async (
  dispatch: Dispatch<IPostAction>,
) => {
  try {
    const response = await API.post('/post/create', formData);
    dispatch({ type: 'CREATE_POST', payload: response.data.result });
  } catch (err) {
    dispatch({ type: 'POST_ERROR', payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const getPostByIdFn = (postId: string) => async (dispatch: Dispatch<IPostAction>) => {
  try {
    const response = await API.get(`/post/${postId}`);
    dispatch({ type: 'GET_POST_BY_ID', payload: response.data.result });
  } catch (err) {
    dispatch({ type: 'POST_ERROR', payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};
