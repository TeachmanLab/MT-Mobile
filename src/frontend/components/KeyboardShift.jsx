/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-es6-class */
/*
    Code inspired by: John Tucker – React Native Keyboard Covering Inputs
    link: https://codeburst.io/react-native-keyboard-covering-inputs-72a9d3072689
*/

import React, { Component } from 'react';
import { Dimensions, Keyboard, StyleSheet, TextInput, UIManager } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';

const { State: TextInputState } = TextInput;

export default class KeyboardShift extends Component {
  constructor() {
    super();
    this.state = {
      shift: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  handleKeyboardDidShow = (event) => {
    const { shift } = this.state;
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    // grabs the currently focused textinput using undocumented method
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    // measures above inputNodeHandle to calculate how much to raise the keyboard by
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldTop = pageY;
      const fieldBottom = pageX;
      const gap = windowHeight - keyboardHeight - (fieldTop + fieldBottom);
      // const gap = Math.min(gapp, keyboardHeight) // might be needed on smaller devices. test later
      // only lift components if the keyboard is covering them
      if (gap && gap < 0) {
        Animated.timing(shift, {
          toValue: gap,
          duration: 250,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }).start();
      }
    });
  };

  handleKeyboardDidHide = () => {
    const { shift } = this.state;
    Animated.timing(shift, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  render() {
    const { shift } = this.state;
    const { children } = this.props;
    return <Animated.View style={[styles.container, { transform: [{ translateY: shift }] }]}>{children}</Animated.View>;
  }
}

const styles = StyleSheet.create({
  container: {},
});

KeyboardShift.propTypes = {};
