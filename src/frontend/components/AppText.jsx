import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function AppText(props) {
  const { children, style, onPress } = props;
  return (
    <Text style={[styles.defaultStyle, style]} onPress={onPress}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'source-sans-pro',
  },
});
