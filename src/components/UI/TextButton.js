import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const TextButton = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity 
      style={{...styles.container, ...style}} 
      onPress={onPress} 
      activeOpacity={0.8}
    >
      <Text style={styles.text}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'roboto-regular',
    fontSize: 14,
    color: 'orange'
  },
});
