import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Badge } from './UI/Badge';
import { sliceBodyText } from '../utils/sliceText';
import { removePost } from '../redux/actions/posts';

export const Post = memo(({ post, onOpen }) => {
  const { title, body, author, comments, id } = post;
  const user = useSelector(state => state.posts.user);
  const dispatch = useDispatch();
  const disabled = user.id === author.id;

  const handlerOpenPostDetails = useCallback(() => 
    onOpen(post),
    [onOpen, post]
  );

  const handlerRemovePost = useCallback(() => 
    dispatch(removePost(id)),
    [removePost, id]
  );

  return (
    <View style={styles.post}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{sliceBodyText(body, 145)}</Text>
      <Text style={styles.author}>author: {author.username}</Text>
      <View style={styles.buttons}>
        <Badge number={comments.length} onPress={handlerOpenPostDetails} />
        <TouchableOpacity disabled={!disabled} onPress={handlerRemovePost}>
          <AntDesign 
            name="delete" 
            size={30} 
            color={disabled ? "orange": "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  post: {
    minWidth: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 15,
    borderRadius: 15,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    textAlign: 'center',
    color: '#7E7E7E',
    fontFamily: 'roboto-bold',
    fontSize: 19,
    lineHeight: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#7E7E7E',
    marginBottom: 15,
  },
  body: {
    color: '#7E7E7E',
    fontFamily: 'roboto-regular',
    fontSize: 17,
    marginBottom: 8,
  },
  author: {
    color: '#7E7E7E',
    fontFamily: 'roboto-regular',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 15,
  }
});