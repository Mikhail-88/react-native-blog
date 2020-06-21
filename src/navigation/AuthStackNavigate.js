import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { LoginScreen } from '../screens/LoginScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';
import { openConfig } from './configs/openStackConfig';
import { closeConfig } from './configs/closeStackConfig';

const Stack = createStackNavigator();

export const AuthStackNavigate = () => {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        header: () => null,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: openConfig,
          close: closeConfig
        }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};