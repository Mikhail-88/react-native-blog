import React, { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { WrapCenter } from '../components/UI/WrapCenter';
import { Heading } from '../components/UI/Heading';
import { Input } from '../components/UI/Input';
import { FilledButton } from '../components/UI/FilledButton';
import { TextButton } from '../components/UI/TextButton';
import { login } from '../redux/actions/posts';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handlerLogin = useCallback(() => 
    dispatch(login()),
    [login]
  );

  const handlerOpenRegister = useCallback(() => 
    navigation.navigate('Register'),
    [navigation]
  );

  return (
    <WrapCenter>
      <Heading style={styles.title}>LOGIN</Heading>
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
        title={'Login'}
        style={styles.loginButton}
        onPress={handlerLogin}
      />
      <TextButton
        title={'Have u an account? Create one'}
        onPress={handlerOpenRegister}
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
});