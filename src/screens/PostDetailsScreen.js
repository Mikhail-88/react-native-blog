import React from 'react';
import { useSelector } from 'react-redux';

import { PostDetails } from '../components/PostDetails';

export const PostDetailsScreen = ({ route }) => {
  const postId = route.params.postId;
  const post = useSelector(state => state.posts.postList.find(post => post.id === postId));

  return (
    post ? <PostDetails post={post} /> : null
  );
};