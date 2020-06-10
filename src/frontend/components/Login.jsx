import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, TextInput, View } from 'react-native';
import { AppLoading } from 'expo';
import { Button, Card, Header } from 'react-native-elements';
import { login } from '../store.jsx';
import AppText from './AppText.jsx';

const Login = (props) => {
  const validateAndLogin = async () => {
    if (!email) return 'Please enter your email';
    if (!password) return 'Please enter a password';

    const response = await dispatch(login({ email, password }));
    return response;
  };

  const mtLogo = require('../assets/logo.png');
  const navigation = props.navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading, error, errorMessage } = useSelector((state) => state.userReducer);

  if (isLoggedIn) {
    navigation.navigate('Progress');
  }

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header alignSelf="center" centerComponent={{ text: 'MindTrails', style: styles.mtText }} />
      <View style={styles.container}>
        <Card
          containerStyle={styles.card}
          image={mtLogo}
          imageProps={styles.logoProps}
          imageStyle={styles.logoStyle}
          borderRadius={5}
        >
          {error && <AppText style={styles.errorText}>{errorMessage}</AppText>}
          <TextInput
            style={styles.input}
            autoCompleteType="off"
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={(input) => setEmail(input)}
            value={email}
            clearButtonMode="always"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCompleteType="off"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(input) => setPassword(input)}
            value={password}
            clearButtonMode="always"
          />
          <Button
            buttonStyle={{ backgroundColor: '#48AADF' }}
            containerStyle={{
              width: '100%',
              alignSelf: 'center',
            }}
            title={<AppText>Sign In</AppText>}
            onPress={validateAndLogin}
          />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Login;
