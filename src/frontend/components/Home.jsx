import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import AppText from './AppText.jsx';

const { height, width } = Dimensions.get('screen');

export default function Start(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../assets/HomeSplashImage.jpg')} style={{ height, width }}>
        <View style={{ paddingTop: '2%', justifyContent: 'space-between' }}>
          <AppText
            style={{
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
              alignSelf: 'center',
              paddingTop: '6%',
            }}
          >
            Think in New Ways
          </AppText>
          <AppText
            style={{ color: '#00aeef', fontSize: 39, marginVertical: '1%', fontWeight: 'bold', alignSelf: 'center' }}
          >
            Feel Less Anxious
          </AppText>
          <AppText style={{ color: 'white', fontSize: 15, marginVertical: '1%', alignSelf: 'center' }}>
            Join for free to change your anxious thinking
          </AppText>
        </View>
        <View style={styles.buttonView}>
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={{ backgroundColor: '#48AADF' }}
            title={<AppText style={{ fontSize: 22 }}>Get Started</AppText>}
            onPress={() => navigation.navigate('About Us', { go_back_key: navigation.state.key })}
          />
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={{ backgroundColor: '#48AADF' }}
            title={<AppText style={{ fontSize: 22 }}>Sign In</AppText>}
            onPress={() => navigation.navigate('Login', { go_back_key: navigation.state.key })}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '65%',
    position: 'absolute',
    marginBottom: '10%',
    bottom: '0%',
  },
  buttonContainer: {
    paddingBottom: '1%',
    width: '100%',
  },
});
