import { 
  LOAD_POSTS,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_POST,
  REMOVE_COMMENT,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  USER_LOGIN,
  USER_LOGOUT
} from '../types';

const initialState = {
  postList: [],
  user: null,
  isLoading: true,
  error: null
};

const handlers = {
  [LOAD_POSTS]: (state, { postList }) => ({...state, postList}),
  [ADD_POST]: (state, { newPost }) => ({
    ...state, 
    postList: [newPost, ...state.postList]
  }),
  [ADD_COMMENT]: (state, { newComment }) => ({
    ...state, 
    postList: state.postList.map(
      post => post.id === newComment.post ? ({...post, comments: [newComment, ...post.comments]}) : post
    )
  }),
  [REMOVE_POST]: (state, { id }) => ({
    ...state, 
    postList: state.postList.filter(post => post.id !== id)
  }),
  [REMOVE_COMMENT]: (state, { postId, id }) => ({
    ...state, 
    postList: state.postList.map(
      post => post.id === postId ? ({...post, comments: post.comments.filter(c => c.id !== id)}) : post
    )
  }),
  [USER_LOGIN]: (state, { user }) => ({...state, user}),
  [USER_LOGOUT]: state => ({...state, user: null}),
  [SHOW_LOADER]: state => ({...state, isLoading: true}),
  [HIDE_LOADER]: state => ({...state, isLoading: false}),
  [SHOW_ERROR]: (state, { error }) => ({...state, error}),
  [CLEAR_ERROR]: state => ({...state, error: null}),
  DEFAULT: state => state
};

export const postsReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  
  return handler(state, action);
};
