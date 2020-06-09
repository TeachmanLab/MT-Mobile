import React, { Component } from 'react';
import * as Font from 'expo-font';
import * as SecureStore from 'expo-secure-store';
import { AppLoading } from 'expo';
import Navigation from './components/Navigation';
import store, { fetchUserProgress } from './store.jsx';
import { Provider } from 'react-redux';

const font = require('./assets/fonts/SourceSansPro-Regular.otf');

const customFonts = {
  'source-sans-pro': font,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      tokenChecked: false,
      initialRoute: 'Log Out',
    };
  }

  async componentDidMount() {
    // Load specified custom fonts
    await Font.loadAsync(customFonts);

    // Check if token is already in Secure Storage
    const token = await SecureStore.getItemAsync('user');

    // If there is a token, route the user to Progress instead of splash screen
    if (token) {
      this.setState({ initialRoute: 'Progress' });
      await fetchUserProgress(token);
    }
    console.log(store);
    // Disable yellow box warnings in simulator
    console.disableYellowBox = true;

    this.setState({
      fontLoaded: true,
      tokenChecked: true,
    });
  }

  render() {
    const { fontLoaded, tokenChecked, initialRoute } = this.state;
    if (fontLoaded && tokenChecked) {
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      );
    }
    return <AppLoading />;
  }
}
