import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export const Badge = ({ number, style, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{...style}}
      onPress={onPress}
    >
      <Fontisto name="comments" size={24} color="black" />
      <View style={styles.container}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 50,
    position: 'absolute',
    top: -13,
    left: 15,
  },
  number: {
    color: 'orange',
    fontFamily: 'roboto-bold',
    fontSize: 16,
  },
});
