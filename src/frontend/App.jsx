import React, { Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigation from './components/Navigation';

const font = require('./assets/fonts/SourceSansPro-Regular.otf');

const customFonts = {
  'source-sans-pro': font,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync(customFonts);
    console.disableYellowBox = true;
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return (
        <Navigation />
      );
    }
    return <AppLoading />;
  }
}
