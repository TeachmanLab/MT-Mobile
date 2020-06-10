import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import Navigation from './components/Navigation';
import * as Font from 'expo-font';
import store from './store.jsx';

console.disableYellowBox = true;

const font = require('./assets/fonts/SourceSansPro-Regular.otf');

const customFonts = {
  'source-sans-pro': font,
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync(customFonts);
  };

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
  return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} />;
};

export default App;
