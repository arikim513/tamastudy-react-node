export interface IPostAction {
  type: 'GET_POSTS' | 'GET_SEARCH_POSTS_BY_TITLE' | 'CREATE_POST' | 'GET_POST_BY_ID' | 'POST_ERROR';
  payload?: any;
}

export interface IPost {
  _id: string;
  title: string;
  description: string;
  imgUrl: string;
  user: string;
  view: number;
  postComments: string[];
  createdAt: string;
}

export interface IPostState {
  posts: IPost[];
  post: IPost;
  error: string | null;
  loading: boolean;
  total: number;
  pageInfo: {
    nextPageCursor: string;
    hasNextPage: boolean;
  };
}

const initialState: IPostState = {
  posts: [],
  total: 0,
  pageInfo: {
    nextPageCursor: '',
    hasNextPage: false,
  },
  post: {
    _id: '',
    title: '',
    description: '',
    imgUrl: '',
    user: '',
    view: 0,
    postComments: [],
    createdAt: '',
  },
  error: null,
  loading: true,
};

export default (state = initialState, action: IPostAction): IPostState => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: [...state.posts, ...action.payload.result],
        total: action.payload.total,
        pageInfo: action.payload.pageInfo,
        loading: false,
      };
    case 'GET_SEARCH_POSTS_BY_TITLE':
      return {
        ...state,
        posts: action.payload.result,
        total: action.payload.total,
        pageInfo: action.payload.pageInfo,
        loading: false,
      };
    case 'CREATE_POST':
      return { ...state, loading: false };
    case 'GET_POST_BY_ID':
      return { ...state, post: action.payload, loading: false };
    case 'POST_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
