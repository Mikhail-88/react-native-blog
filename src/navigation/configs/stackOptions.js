import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export const stackOptions = (title, onPress) => {
  return {
    headerStyle: {
      backgroundColor: 'white'
    },
    headerTitle: title,
    headerTitleStyle: {
      fontFamily: 'roboto-bold',
      fontSize: 25,
    },
    headerTintColor: 'black',
    headerTitleContainerStyle: {
      alignItems: 'center'
    },
    headerRightContainerStyle: {
      paddingRight: 15
    },
    headerRight: () => {
      return (
        <AntDesign name="logout" size={24} color="black" onPress={onPress} />
      );
    }
  }
}