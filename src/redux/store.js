import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { postsReducer } from './reducers/posts';

const rootReducer = combineReducers({
  posts: postsReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);