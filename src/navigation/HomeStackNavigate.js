import React, { useCallback } from "react";
import { useDispatch } from 'react-redux';
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { AntDesign } from '@expo/vector-icons';

import { HomeScreen } from '../screens/HomeScreen';
import { PostDetailsScreen } from '../screens/PostDetailsScreen';
import { AddPostScreen } from '../screens/AddPostScreen';
import { logout } from '../redux/actions/posts';
import { stackOptions } from './configs/stackOptions';
import { openConfig } from './configs/openStackConfig';
import { closeConfig } from './configs/closeStackConfig';

const Stack = createStackNavigator();

export const HomeStackNavigate = ({ navigation, route }) => {
  const dispatch = useDispatch();

  // const handler = () => dispatch(logout());

  const handlerLogout = useCallback(() => 
    dispatch(logout()),
    [logout]
  );

  const handlerOpenAddPost = useCallback(() => 
    navigation.navigate('AddPost'),
    [navigation]
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
        name="Home"
        component={HomeScreen}
        options={{
          ...stackOptions('News Feed', handlerLogout),
          headerLeftContainerStyle: {
            paddingLeft: 15
          },
          headerLeft: () => {
            return (
              <AntDesign name="addfile" size={24} color="black" onPress={handlerOpenAddPost} />
            );
          }
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostDetailsScreen}
        options={stackOptions('Post', handlerLogout)}
      />
      <Stack.Screen
        name="AddPost"
        component={AddPostScreen}
        options={stackOptions('Add Post', handlerLogout)}
      />
    </Stack.Navigator>
  );
};
