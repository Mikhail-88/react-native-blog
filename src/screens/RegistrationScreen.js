import React, { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { WrapCenter } from '../components/UI/WrapCenter';
import { Heading } from '../components/UI/Heading';
import { Input } from '../components/UI/Input';
import { FilledButton } from '../components/UI/FilledButton';
import { AntDesign } from '@expo/vector-icons';
import { login } from '../redux/actions/posts';

export const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handlerGoBack = useCallback(() => 
    navigation.goBack(),
    [navigation]
  );

  const handlerLogin = useCallback(() =>
    dispatch(login()),
    [login]
  );

  return (
    <WrapCenter>
      <AntDesign 
        name="closecircleo" 
        size={24} 
        style={styles.closeIcon} 
        color="orange" 
        onPress={handlerGoBack} 
      />
      <Heading style={styles.title}>REGISTRATION</Heading>
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={'Register'}
        style={styles.loginButton}
        onPress={handlerLogin}
      />
    </WrapCenter>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
});