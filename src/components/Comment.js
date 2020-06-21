import React, { useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { removeComment } from '../redux/actions/posts';

export const Comment = ({ comment }) => {
  const { body, author, post, id } = comment;
  const user = useSelector(state => state.posts.user);
  const dispatch = useDispatch();
  const disabled = user.id === author.id;

  const handlerRemoveComment = useCallback(() =>
    dispatch(removeComment(post, id)),
    [removeComment, post, id]
  );

  return (
    <TouchableOpacity
      disabled={!disabled} 
      activeOpacity={0.8} 
      onLongPress={handlerRemoveComment}
    >
      <View style={styles.comment}>
        <Text style={styles.body}>{body}</Text>
        <Text style={{
          ...styles.author,
          color: disabled ? "orange": "#7E7E7E"
        }}>
          author: {author.username}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  comment: {
    minWidth: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  body: {
    color: '#7E7E7E',
    fontFamily: 'roboto-regular',
    fontSize: 14,
    marginBottom: 8,
  },
  author: {
    fontFamily: 'roboto-regular',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginBottom: 5,
  }
});