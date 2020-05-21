import React, { Component } from 'react';
import { StyleSheet, TextInput, View, ScrollView, Alert } from 'react-native';
import { Button, Divider, Header, Icon, Card } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { apiPath } from '../../apiServices';
import AppText from '../AppText.jsx';

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_password: '',
      new_password_confirm: '',
      errorMessage: null,
      successMessage: null,
    };
    this.callChangeAPI = this.callChangeAPI.bind(this);
  }

  async callChangeAPI() {
    try {
      const { new_password, new_password_confirm } = this.state;
      if (new_password !== new_password_confirm) {
        this.setState({
          errorMessage: 'Whoops! Passwords do not match.',
        });
        return;
      }
      const userToken = await SecureStore.getItemAsync('userToken');
      if (userToken) {
        const { token } = JSON.parse(userToken);
        const path = `${apiPath}updatepassword`;
        const response = await fetch(path, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ new_password }),
        });
        const responseJson = await response.json();
        console.log(responseJson);
        if (responseJson.code === 'success') {
          const { navigation } = this.props;
          this.setState({
            successMessage: 'Successfully updated password!',
          });
          Alert.alert(
            'Success!',
            'Password updated successfully',
            [
              {
                text: 'Great!',
                onPress: () => {
                  navigation.navigate('Progress', {
                    go_back_key: navigation.state.key,
                    // ...postBody,
                  });
                },
              },
            ],
            { cancelable: false },
          );
        } else {
          // console.log(responseJson);
          this.setState({
            errorMessage: 'Password change failed! Please try again.',
          });
        }
      } else {
        this.setState({
          errorMessage: 'There was a problem retrieving credientials. Please log out and log back in',
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        errorMessage: 'Password change failed! Please try again.',
      });
    }
  }

  handleTextInput(key, value) {
    this.setState({
      errorMessage: null,
      successMessage: null,
      [key]: value,
    });
  }

  render() {
    const { errorMessage, successMessage } = this.state;
    return (
      <View style={styles.outerContainer}>
        <Header
          alignSelf="center"
          centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
          rightComponent={(
            <Icon
              onPress={() => this.props.navigation.toggleDrawer()}
              size={40}
              name="navicon"
              type="evilicon"
              color="white"
            />
          )}
        />
        <ScrollView style={styles.scrollContainer} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <Card
            title={<AppText style={styles.title}>Change Your Password</AppText>}
            borderRadius={5}
          >
            <Divider style={{ marginBottom: '3%' }} />
            <AppText style={styles.header}>Please enter your new password in the fields below:</AppText>
            {!errorMessage && successMessage && (
              <AppText style={styles.successStyle}>
                {' '}
                {successMessage}
                {' '}
              </AppText>
            )}
            {errorMessage && (
              <AppText style={styles.errorStyle}>
                {' '}
                {errorMessage}
                {' '}
              </AppText>
            )}
            <TextInput
              style={styles.input}
              placeholder="New Password"
              autoCompleteType="off"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(input) => {
                this.handleTextInput('new_password', input);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              autoCompleteType="off"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(input) => {
                this.handleTextInput('new_password_confirm', input);
              }}
            />
            <Button
              buttonStyle={{ backgroundColor: '#48AADF' }}
              containerStyle={{
                width: '100%',
                alignSelf: 'center',
              }}
              title={<AppText>Change Password</AppText>}
              onPress={this.callChangeAPI.bind(this)}
            />
          </Card>
          {/* <View style={styles.container}>
            <AppText style={styles.title}>Verify Phone</AppText>
            <AppText style={styles.header}>Please enter your phone number in the fields below:</AppText>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              autoCompleteType="off"
              autoCapitalize="none"
              onChangeText={(input) => {
                this.handleTextInput('username', input);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Phone Number"
              autoCompleteType="off"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(input) => {
                this.handleTextInput('password', input);
              }}
            />
            <Button style={styles.button} title="Verify" onPress={this.login} />
          </View> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#E5E7ED',
  },
  scrollContainer: {
    flexDirection: 'column',
    backgroundColor: '#E5E7ED',
  },
  mtText: {
    fontSize: 24,
    color: '#fff',
  },
  errorText: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#b04558',
    paddingBottom: '5%',
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#48AADF',
    textAlign: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '2.5%',
    marginLeft: '2%',
    marginRight: '2%',
    // alignSelf: 'center',
    textAlign: 'center',
  },
  errorStyle: {
    fontSize: 18,
    color: '#fa3b00',
    marginBottom: '5%',
    marginLeft: '2%',
    marginRight: '2%',
    textAlign: 'center',
  },
  successStyle: {
    fontSize: 18,
    color: 'green',
    marginBottom: '5%',
    marginLeft: '2%',
    marginRight: '2%',
    textAlign: 'center',
  },
});
