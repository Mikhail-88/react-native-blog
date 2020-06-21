import React, { useState } from 'react';
import { StyleSheet, View, Keyboard, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Input } from '../components/UI/Input';
import { addComment } from '../redux/actions/posts';

export const AddComment = ({ id }) => {
  const user = useSelector(state => state.posts.user);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const disabled = !!text.trim();

  const saveHandler = () => {
    const comment = {
      id: Date.now().toString(),
      body: text,
      post: id,
      author: user.id
    };

    dispatch(addComment(comment));
    setText('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.addCommentWrap}>
      <Input 
        style={styles.input} 
        placeholder="add comment..." 
        value={text}
        onChangeText={setText}
        multiline
      />
      <TouchableOpacity disabled={!disabled} onPress={saveHandler}>
        <MaterialCommunityIcons 
          name="comment-plus-outline" 
          size={30} 
          color={disabled ? "orange": "gray"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addCommentWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10
  },
  input: {
    padding: 5,
    width: '85%'
  },
});