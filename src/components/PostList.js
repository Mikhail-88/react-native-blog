import React, { useRef, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from './Post';
import { WrapCenter } from './UI/WrapCenter';
import { EmptyList } from './UI/EmptyList';
import { FooterList } from './UI/FooterList';
import { Loader } from './UI/Loader';
import { postsLoaded } from '../redux/actions/posts';

export const PostList = ({ posts, onOpen }) => {
  const isLoading = useSelector(state => state.posts.isLoading);
  const dispatch = useDispatch();
  let listRef = useRef();

  const handlerRefresh = useCallback(() =>
    dispatch(postsLoaded()),
    [postsLoaded]
  );

  const handlerScrollTop = () => {
    listRef.scrollToIndex({
      animated: true,
      index: 0,
      viewPosition: 0
    });
  };

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <WrapCenter>
      <FlatList
        data={posts} 
        keyExtractor={post => post.id.toString()} 
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
        ListFooterComponent={<FooterList length={posts.length} onPress={handlerScrollTop} />}
        ListEmptyComponent={<EmptyList />}
        ref={ref => (listRef = ref)}
        refreshing={isLoading}
        onRefresh={handlerRefresh}
      />
    </WrapCenter>
  );
};