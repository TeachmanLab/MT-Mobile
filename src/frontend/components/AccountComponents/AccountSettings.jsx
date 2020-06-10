import React, { Component } from 'react';
import { Card, Divider, Icon, Header, Button, CheckBox } from 'react-native-elements';
import { StyleSheet, ScrollView, View, TextInput, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { apiPath } from '../../apiServices';
import AppText from '../AppText.jsx';
// const userToken = await SecureStore.getItemAsync('userToken');
export default class AccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      successMessage: null,
      updateInfo: {},
    };
  }

  async callChangeAPI() {
    try {
      const userToken = await SecureStore.getItemAsync('userToken');
      if (userToken) {
        const { token } = JSON.parse(userToken);
        const { updateInfo: postBody } = this.state;
        const path = `${apiPath}updateuser`;
        const response = await fetch(path, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postBody),
        });
        const responseJson = await response.json();
        if (responseJson.code === 'success') {
          const { navigation } = this.props;
          this.setState({
            successMessage: 'Successfully updated Account Settings!',
          });
          Alert.alert(
            'Success!',
            'Account Settings updated successfully',
            [
              {
                text: 'Great!',
                onPress: () => {
                  navigation.navigate('Progress', {
                    go_back_key: navigation.state.key,
                    ...postBody,
                  });
                },
              },
            ],
            { cancelable: false },
          );
        } else {
          // console.log(responseJson);
          this.setState({
            errorMessage:
              'Changing Accountings Settings failed!\nEmail and/or phone might already be registered\nPlease try again.',
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
        errorMessage: 'Changing Accountings Settings failed! Please try again.',
      });
    }
  }

  componentDidUpdate() {
    // console.log(this.state);
    // const { navigation } = this.props;
    // console.log(navigation);
  }

  handleTextInput(key, value) {
    this.setState((state) => ({
      errorMessage: null,
      successMessage: null,
      updateInfo: {
        ...state.updateInfo,
        [key]: value,
      },
    }));
  }

  render() {
    // get first name of logged in user, passed from Login.js
    name = this.props.navigation.getParam('name', 'Error_user');
    // get username of logged in user, passed from Login.js
    username = this.props.navigation.getParam('username', 'Error_user');
    // get email of logged in user, passed from CreateAccount.js
    const { errorMessage, successMessage } = this.state;
    emailReminders = this.props.navigation.getParam('emailReminders', 'Error_user');
    return (
      <View style={{ flex: 1, backgroundColor: '#E5E7ED' }}>
        {/* Blue header that appears on each page
                    Left Component: Back button - Navigates to the previous page by using props.navigation.state
                    Center Component: Title
                    Right Component: Icon that activates the drawer navigator of the app
            */}
        <Header
          alignSelf="center"
          centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
          rightComponent={
            <Icon
              onPress={() => this.props.navigation.toggleDrawer()}
              size={40}
              name="navicon"
              type="evilicon"
              color="white"
            />
          }
        />
        <ScrollView style={styles.scrollContainer}>
          <Card title={<AppText style={styles.title}>Update Account Info</AppText>} borderRadius={5}>
            <Divider style={{ marginBottom: '3%' }} />
            {!errorMessage && successMessage && <AppText style={styles.successStyle}> {successMessage} </AppText>}
            {errorMessage && <AppText style={styles.errorStyle}> {errorMessage} </AppText>}
            <TextInput
              style={styles.input}
              placeholder="First Name/Nickname"
              autoCompleteType="off"
              autoCapitalize="none"
              onChangeText={(input) => {
                this.handleTextInput('name', input);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCompleteType="off"
              autoCapitalize="none"
              onChangeText={(input) => {
                this.handleTextInput('email', input);
              }}
            />
            <CheckBox
              containerStyle={styles.checkbox}
              checkedIcon={<MaterialCommunityIcons name="checkbox-blank" size={24} color="#48AADF" />}
              uncheckedIcon={<MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="grey" />}
              checked={this.state.emailReminders}
              onPress={() => this.setState({ emailReminders: !this.state.emailReminders })}
              title={
                <AppText style={styles.checkText}>
                  I would like to receive email reminders when it is time to start the next session. Please note that
                  even if you do not want reminders for each session, you will still receive a few messages from us as
                  you enter new phases in the study or if you are inactive for an extended period.
                </AppText>
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              autoCompleteType="off"
              autoCapitalize="none"
              onChangeText={(input) => {
                this.handleTextInput('phone', input);
              }}
            />
            {/* <AppText style={styles.body}>
            Your phone number has been verified — please{' '}
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL('mailto:support@example.com')}
              title="studyteam@mindtrails.org"
            >
              contact the study team
            </AppText>
            if you wish to change your phone number.
          </AppText> */}

            <CheckBox
              value={false}
              checked={this.state.textMessages}
              onPress={() => this.setState({ textMessages: !this.state.textMessages })}
              containerStyle={styles.checkbox}
              checkedIcon={<MaterialCommunityIcons name="checkbox-blank" size={24} color="#48AADF" />}
              uncheckedIcon={<MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="grey" />}
              title={<AppText style={styles.checkText}>I can receive text messages at this number.</AppText>}
            />
            <CheckBox
              containerStyle={styles.checkbox}
              checkedIcon={<MaterialCommunityIcons name="checkbox-blank" size={24} color="#48AADF" />}
              uncheckedIcon={<MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="grey" />}
              checked={this.state.textReminders}
              onPress={() => this.setState({ textReminders: !this.state.textReminders })}
              title={
                <AppText style={styles.checkText}>
                  I would like to receive text reminders to this phone when it is time to start the next session.
                </AppText>
              }
            />

            <Button
              buttonStyle={{ backgroundColor: '#48AADF' }}
              containerStyle={{
                width: '100%',
                alignSelf: 'center',
              }}
              title="Update Information"
              onPress={this.callChangeAPI.bind(this)}
            />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'column',
    backgroundColor: '#E5E7ED',
    marginBottom: '5%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#48AADF',
    alignSelf: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '2.5%',
    marginLeft: '2%',
    marginRight: '2%',
  },
  body: {
    fontSize: 18,
    marginBottom: '2.5%',
    marginLeft: '2%',
    marginRight: '2%',
  },
  checkbox: {
    backgroundColor: 'white',
    borderColor: 'transparent',
    margin: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: '10%',
    marginVertical: 10,
    flex: 1,
  },
  checkText: {
    marginLeft: '5%',
    fontSize: 18,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
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
