import React from 'react';
import { useSelector } from 'react-redux';

import { PostList } from '../components/PostList';

export const AuthorPostsScreen = ({ navigation }) => {
  const user = useSelector(state => state.posts.user);
  const postList = useSelector(state => state.posts.postList.filter(post => post.author.id === user.id));

  const openPostHandler = post => {
    navigation.navigate('Post', { 
      postId: post.id
    });
  };

  return (
    <PostList posts={postList} onOpen={openPostHandler} />
  );
};