import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Heading = ({ children, style, ...props }) => {
  return (
    <Text {...props} style={{...styles.text, ...style}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'roboto-regular',
    fontSize: 32,
    textAlign: 'center',
  }
});
