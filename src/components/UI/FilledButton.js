import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const FilledButton = ({ title, style, onPress, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={{...styles.container, ...style}}
      onPress={onPress}
    >
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'orange'
  },
  text: {
    color: 'white',
    fontFamily: 'roboto-bold',
    fontSize: 16,
  },
});
