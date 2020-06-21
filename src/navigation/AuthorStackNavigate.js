import React, { useCallback } from "react";
import { useDispatch } from 'react-redux';
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { AuthorPostsScreen } from '../screens/AuthorPostsScreen';
import { PostDetailsScreen } from '../screens/PostDetailsScreen';
import { logout } from '../redux/actions/posts';
import { stackOptions } from './configs/stackOptions';
import { openConfig } from './configs/openStackConfig';
import { closeConfig } from './configs/closeStackConfig';

const Stack = createStackNavigator();

export const AuthorStackNavigate = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const handlerLogout = useCallback(() => 
    dispatch(logout()),
    [logout]
  );
  
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true
    })
  }
  
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: openConfig,
          close: closeConfig
        }
      }}
    >
      <Stack.Screen
        name="Author"
        component={AuthorPostsScreen}
        options={stackOptions('My posts', handlerLogout)}
      />
      <Stack.Screen
        name="Post"
        component={PostDetailsScreen}
        options={stackOptions('Post', handlerLogout)}
      />
    </Stack.Navigator>
  );
};