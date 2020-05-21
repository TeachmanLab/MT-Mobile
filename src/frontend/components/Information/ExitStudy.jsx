import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Linking, TextInput, Alert } from 'react-native';
import { Card, Divider, Button, Header, Icon } from 'react-native-elements';
import AppText from '../AppText.jsx';

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
  }

  async openURL() {
    try {
      await Linking.openURL('mailto:studyteam@mindtrails.org');
      // console.log('hi');
    } catch (error) {
      // console.log(error);
      Alert.alert("Couldn't Open Mail App", 'Unfortunately, we were unable to open your mail client');
    }
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'Error_user');
    const username = navigation.getParam('username', 'Error_user');
    const isActive = navigation.getParam('isActive', 'False');

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
        <ScrollView style={styles.scrollContainer}>
          <Card
            title={<AppText style={styles.title}>Exiting the Study</AppText>}
            borderRadius={5}
          >
            <Divider style={{ marginBottom: '3%' }} />
            <AppText style={styles.body}>
              Thank you for your participation in the Calm Thinking Study. Before you decide to exit, please let us know
              if there are questions or concerns we can address — we are very interested in making this study work for all
              who have kindly agreed to participate, so let us know if we can help make it work for you.
            </AppText>
            {/* <AppTextInput
                  style={styles.input}
                  placeholder="First Name/Nickname"
                  autoCompleteType="off"
                  autoCapitalize="none"
                  /> */}
          </Card>
          <Card borderRadius={5}>
            <AppText style={styles.header}>Are you sure you wish to exit the Calm Thinking Study?</AppText>
            {/* Allows users to exit the study if they no longer want to participate */}
            <View style={styles.btnContainer}>
              <Button
                buttonStyle={{ backgroundColor: '#48AADF' }}
                containerStyle={{
                  width: '49%',
                  height: '100%',
                  alignSelf: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Debrief', { isActive: 'False' });
                }}
                title={<AppText>Yes</AppText>}
              />
              <Button
                buttonStyle={{ backgroundColor: '#48AADF' }}
                containerStyle={{
                  width: '49%',
                  marginLeft: '1%',
                  height: '100%',
                  alignSelf: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Progress', { isActive: 'True' });
                }}
                title={<AppText>No</AppText>}
              />
            </View>
          </Card>
          <Card borderRadius={5}>
            <AppText style={styles.header}>Alternatively, you can send a message to the MindTrails team:</AppText>
            <Button
              buttonStyle={{ backgroundColor: '#48AADF' }}
              containerStyle={{
                width: '100%',
                alignSelf: 'center',
              }}
              onPress={this.openURL}
              title={<AppText>Send Email</AppText>}
            />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

// Stylesheet
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#E5E7ED',
  },
  mtText: {
    fontSize: 24,
    color: '#fff',
  },
  body: {
    fontSize: 22,
  },
  errorText: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#b04558',
    paddingBottom: '5%',
  },
  image: {
    height: 180,
    width: 330,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E5E7ED',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    marginHorizontal: '5%',
    flex: 1,
    alignSelf: 'center',
    padding: 15,
    marginBottom: 10,
    width: 200,
  },
  input: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    padding: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#48AADF',
    alignSelf: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '3%',
    marginHorizontal: '1%',
  },
  scrollContainer: {
    flexDirection: 'column',
    backgroundColor: '#E5E7ED',
    marginBottom: '5%',
  },
});
