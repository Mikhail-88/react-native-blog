import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';

import { apiCall } from '../../utils/api-call';
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

export const postsLoaded = () => async dispatch => {
  dispatch({ type: CLEAR_ERROR });
  dispatch({ type: SHOW_LOADER });

  try {
    const data = await apiCall('db');
    
    const postList = (data.posts || []).map(item => ({
      ...item,
      author: data.users.find(user => user.id === item.author),
      comments: data.comments
        .filter(comment => comment.post === item.id)
        .map(comment => ({...comment, author: data.users.find(user => user.id === comment.author)}))
    }));

    dispatch({
      type: LOAD_POSTS,
      postList
    });
  } catch (e) {
    dispatch({
      type: SHOW_ERROR,
      error: e.message
    });
  } finally {
    dispatch({ type: HIDE_LOADER });
  }
};

export const login = () => async dispatch => {
  dispatch({ type: CLEAR_ERROR });
  dispatch({ type: SHOW_LOADER });

  const user = {
    "id": "bb495996-f02d-4185-9895-2cf887ea78c0",
    "username": "dolor"
  };

  try {
    // there is could be some async code: api call to the server for login or register new user
    await AsyncStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: USER_LOGIN,
      user
    });
  } catch (e) {
    dispatch({
      type: SHOW_ERROR,
      error: e.message
    });
  } finally {
    dispatch({ type: HIDE_LOADER });
  }
};

export const logout = () => async dispatch => {
  dispatch({ type: CLEAR_ERROR });
  dispatch({ type: SHOW_LOADER });

  try {
    await AsyncStorage.removeItem("user");
    dispatch({ type: USER_LOGOUT });
  } catch (e) {
    dispatch({
      type: SHOW_ERROR,
      error: e.message
    });
  } finally {
    dispatch({ type: HIDE_LOADER });
  }
};

export const checkUserIsLogin = () => async dispatch => {
  dispatch({ type: CLEAR_ERROR });
  dispatch({ type: SHOW_LOADER });

  AsyncStorage.getItem("user")
    .then(user => {
      if (user) {
        dispatch({
          type: USER_LOGIN,
          user: JSON.parse(user)
        });
      }
    })
    .catch(e => {
      dispatch({
        type: SHOW_ERROR,
        error: e.message
      });
    });
    dispatch({ type: HIDE_LOADER });
};

export const addPost = post => async (dispatch, getState) => {
  dispatch({ type: SHOW_LOADER });
  const { user } = getState().posts;

  await apiCall('posts', 'POST', post);

  const newPost = {
    ...post,
    author: user,
    comments: []
  };
  
  dispatch({
    type: ADD_POST,
    newPost
  });

  dispatch({ type: HIDE_LOADER });
};

export const addComment = comment => async (dispatch, getState) => {
  dispatch({ type: SHOW_LOADER });
  const { user } = getState().posts;

  await apiCall('comments', 'POST', comment);

  const newComment = {
    ...comment,
    author: user
  };
  
  dispatch({
    type: ADD_COMMENT,
    newComment
  });

  dispatch({ type: HIDE_LOADER });
};

export const removePost = id => async dispatch => {
  Alert.alert(
    'Delete Post',
    `Do you want to delete?`,
    [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      { 
        text: 'Delete', 
        onPress: async () => {
          // сервер не делает удаление по новым созданым постам, пришлось закомментировать код запроса и проверку ответа от сервера
          // const { status } = await apiCall(`posts/${id}`, 'DELETE');
          
          dispatch({
            type: REMOVE_POST,
            id
          });
        }
      }
    ],
    { cancelable: false }
  );
};

export const removeComment = (postId, id) => async dispatch => {
  Alert.alert(
    'Delete Comment',
    `Do you want to delete?`,
    [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      { 
        text: 'Delete', 
        onPress: async () => {
          // сервер не делает удаление по новым созданым комментариям, пришлось закомментировать код запроса и проверку ответа от сервера
          // const { status } = await apiCall(`comments/${id}`, 'DELETE');

          dispatch({
            type: REMOVE_COMMENT,
            postId,
            id
          });
        }
      }
    ],
    { cancelable: false }
  );
};