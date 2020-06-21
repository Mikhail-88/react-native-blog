import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export const WrapCenter = ({ children, style }) => (
  <SafeAreaView style={{...styles.default, ...style}}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgb(14, 17, 17)',
  }
});