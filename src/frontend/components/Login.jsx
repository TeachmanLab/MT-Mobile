import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button, Card, Header } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import KeyboardShift from './KeyboardShift';
import { apiPath } from '../apiServices.jsx';
import AppText from './AppText.jsx';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      failedLogin: false,
      imageLoading: true,
      image: '',
    };
    this.login = this.login.bind(this);
  }

  async componentDidMount() {
    try {
      const { navigation } = this.props;
      const mtLogo = await require('../assets/logo.png');
      this.setState({ imageLoading: false, image: mtLogo });
      // when the user leaves this screen, clear the state (temporary fix).
      this._unsubscribe = navigation.addListener('didBlur', () => {
        this.setState({ email: '', password: '', failedLogin: false });
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    this._unsubscribe.remove();
  }

  async login() {
    try {
      const { navigation } = this.props;
      const { email, password } = this.state;
      const path = `${apiPath}login`;
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const responseJson = await response.json();
      // console.log(responseJson);
      if (responseJson.code !== 'success') {
        this.setState({ failedLogin: true });
      } else {
        const userToken = { token: responseJson.token };
        await SecureStore.setItemAsync('userToken', JSON.stringify(userToken));
        // console.log(responseJson);
        navigation.navigate('Progress', {
          go_back_key: navigation.state.key,
          name: responseJson.name,
          formIndex: responseJson.formIndex,
          questionIndex: responseJson.questionIndex,
          email: responseJson.email,
          token: responseJson.token,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({ failedLogin: true });
    }
  }

  handleTextInput(id, value) {
    this.setState({
      failedLogin: null,
      [id]: value,
    });
  }

  render() {
    const { failedLogin, email, password, imageLoading, image } = this.state;
    if (imageLoading) {
      return (
        <View style={styles.outerContainer}>
          <Header alignSelf="center" centerComponent={{ text: 'MindTrails', style: styles.mtText }} />
        </View>
      );
    }
    return (
      <View style={styles.outerContainer}>
        <Header alignSelf="center" centerComponent={{ text: 'MindTrails', style: styles.mtText }} />
        <View style={styles.container}>
          <Card
            containerStyle={styles.card}
            image={image}
            imageProps={styles.logoProps}
            imageStyle={styles.logoStyle}
            borderRadius={5}
          >
            <KeyboardShift>
              {failedLogin && <AppText style={styles.errorText}>Incorrect login, please try again.</AppText>}
              <TextInput
                style={styles.input}
                autoCompleteType="off"
                autoCapitalize="none"
                placeholder="Email"
                onChangeText={(input) => {
                  this.handleTextInput('email', input);
                }}
                value={email}
                clearButtonMode="always"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                autoCompleteType="off"
                autoCapitalize="none"
                secureTextEntry
                onChangeText={(input) => {
                  this.handleTextInput('password', input);
                }}
                value={password}
                clearButtonMode="always"
              />
            </KeyboardShift>
            <Button
              buttonStyle={{ backgroundColor: '#48AADF' }}
              containerStyle={{
                width: '100%',
                alignSelf: 'center',
              }}
              title={<AppText>Sign In</AppText>}
              onPress={this.login}
            />
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E5E7ED',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mtText: {
    fontFamily: 'source-sans-pro',
    fontSize: 24,
    color: '#fff',
  },
  errorText: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#b04558',
    paddingBottom: '5%',
  },
  logoProps: {
    resizeMode: 'contain',
  },
  logoStyle: {
    paddingTop: '50%',
  },
  button: {
    marginHorizontal: '5%',
    marginBottom: '30%',
  },
  input: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
});
