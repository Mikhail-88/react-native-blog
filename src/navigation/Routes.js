import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { checkUserIsLogin } from '../redux/actions/posts';
import { AuthStackNavigate } from './AuthStackNavigate';
import { AppTabsNavigate } from './AppTabsNavigate';

export const Routes = () => {
  const user = useSelector(state => state.posts.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserIsLogin());
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppTabsNavigate /> : <AuthStackNavigate />}
    </NavigationContainer>
  );
}
