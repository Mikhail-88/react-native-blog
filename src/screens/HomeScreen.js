import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postsLoaded } from '../redux/actions/posts';
import { Loader } from '../components/UI/Loader';
import { ErrorMessage } from '../components/UI/ErrorMessage';
import { PostList } from '../components/PostList';

export const HomeScreen = ({ navigation }) => {
  const isLoading = useSelector(state => state.posts.isLoading);
  const error = useSelector(state => state.posts.error);
  const postList = useSelector(state => state.posts.postList);
  const dispatch = useDispatch();

  const handlerOpenPost = useCallback(post =>
    navigation.navigate('Post', { 
      postId: post.id
    }),
    [navigation]
  );

  useEffect(() => {
    !postList.length && dispatch(postsLoaded());
  }, [postList.length]);

  if (error) {
    return (
      <ErrorMessage message={error} />
    );
  }

  if (isLoading && !postList.length) {
    return (
      <Loader />
    );
  }

  return (
    <PostList posts={postList} onOpen={handlerOpenPost} />
  );
};