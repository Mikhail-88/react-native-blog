import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { addPost } from '../redux/actions/posts';
import { WrapCenter } from '../components/UI/WrapCenter';
import { Input } from '../components/UI/Input';
import { FilledButton } from '../components/UI/FilledButton';

export const AddPostScreen = ({ navigation }) => {
  const user = useSelector(state => state.posts.user);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const disabled = !title.trim() || !body.trim();

  const saveHandler = () => {
    const post = {
      id: Date.now().toString(),
      title,
      body,
      author: user.id
    };

    dispatch(addPost(post));
    navigation.navigate('Home');
    setTitle('');
    setBody('');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <WrapCenter>
        <Input
          style={styles.textInput}
          placeholder='Enter title of Post...'
          value={title}
          onChangeText={setTitle}
          multiline
        />
        <Input
          style={styles.textInput}
          placeholder='Enter body of Post...'
          value={body}
          onChangeText={setBody}
          multiline
        />
        <FilledButton
          title='Add Post'
          onPress={saveHandler}
          disabled={disabled}
          style={disabled ? { backgroundColor: "gray" } : null}
        />
      </WrapCenter>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 15
  }
});