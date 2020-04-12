import axios from 'axios';
import { toast } from 'react-toastify';
import { GET_POSTS, CREATE_POST, POST_ERROR } from '../../type';
import setAxiosConfig from '../../../utils/setAxiosConfig';

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/v1/post');
    setTimeout(() => {
      dispatch({
        type: GET_POSTS,
        payload: response.data,
      });
    }, 500);
  } catch (err) {
    console.error(err.response.data.err);
    dispatch({
      type: POST_ERROR,
      payload: err.response.data.err,
    });
    toast.error(err.response.data.err);
  }
};

export const createPostFn = (formData, history) => async (dispatch) => {
  try {
    const { config } = setAxiosConfig(dispatch);
    const response = await axios.post('http://localhost:5000/v1/post/create', formData, config);
    dispatch({
      type: CREATE_POST,
      payload: response.data.result,
    });
    history.push('/posts');
  } catch (err) {
    console.error(err.response.data.err);
    dispatch({
      type: POST_ERROR,
      payload: err.response.data.err,
    });
    toast.error(err.response.data.err);
  }
};
