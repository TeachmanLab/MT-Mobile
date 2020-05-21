import React, { Component } from 'react';
import { Button, Icon, Header } from 'react-native-elements';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
// import Level from './Information/Level.jsx';
// import { levels } from './Json/LevelsJson.js';

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    const { navigation } = this.props;
    const { index } = this.state;
    const name = navigation.getParam('name', 'Error_user');
    const username = navigation.getParam('username', 'Error_user');
    // WILL IMPLEMENT LATER
    // const isActive = navigation.getParam('isActive', 'False'); // determines if the user is active
    // WILL IMPLEMENT LATER
    const isActive = 'True';
    const complete = index === 6;

    // If user is active, then they are able to view all of their settings
    if (isActive == 'True') {
      return (
        <View style={{ flex: 1, backgroundColor: '#E5E7ED' }}>
          <Header
            alignSelf="center"
            centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
            rightComponent={
              <Icon onPress={() => navigation.toggleDrawer()} size={40} name="navicon" type="evilicon" color="white" />
            }
          />
          {/* Profile page for users to view all of their account settings at once */}
          <ScrollView style={styles.container}>
            <View style={{ height: '5%' }} />
            {index === 0 ? (
              <View>
                <Text style={styles.title}>My Account</Text>
                <Text style={styles.header}>Logged in as {name}</Text>
                <Button
                  style={styles.button}
                  title="My Progess"
                  onPress={() => {
                    navigation.navigate('Progress', { go_back_key: navigation.state.key, studyIndex: index, username });
                  }}
                />
                <Button
                  style={styles.button}
                  title="Account Settings"
                  onPress={() => {
                    this.props.navigation.navigate('Account Settings');
                  }}
                />
                <Button
                  style={styles.button}
                  title="Edit Information"
                  onPress={() => {
                    navigation.navigate('Edit Information');
                  }}
                />
                <Button
                  style={styles.button}
                  title="Exit the Study"
                  onPress={() => {
                    navigation.navigate('Exit the Study');
                  }}
                />
              </View>
            ) : (
              <View style={styles.progressContainer}>
                <Text style={styles.assessText}>Welcome back {name}</Text>
                <View>
                  <Text style={styles.waitText}>You must wait 5 days until moving on to Level 1.</Text>
                </View>
              </View>
            )}
            <View style={{ height: '5%' }} />
            <View style={styles.progressContainer}>
              <Text style={styles.assessText}>Nice work, {name}.</Text>
              <View>
                <Text style={styles.studyText}>You are ready to being Level 2: Intermediate!</Text>
                {/* <Text /> */}

                <Text style={styles.assessText}>This includes:</Text>

                <Text style={styles.studyText}>For best results, complete Level 2: Intermediate by </Text>
              </View>
              <Button
                style={styles.startButton}
                title="Start"
                titleProps={{ style: { fontSize: 24, color: 'white', paddingHorizontal: '25%' } }}
                onPress={() => {
                  navigation.navigate('FormWrapper', {
                    go_back_key: navigation.state.key,
                    studyIndex: index,
                    username,
                  });
                }}
              />
            </View>
          </ScrollView>
        </View>
      );
    }
    // If user is not active, then they get a different screen with option to resume study
    else {
      return (
        <View style={{ flex: 1, backgroundColor: '#E5E7ED' }}>
          <Header
            alignSelf="center"
            centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
            rightComponent={
              <Icon onPress={() => navigation.toggleDrawer()} size={40} name="navicon" type="evilicon" color="white" />
            }
          />
          <View style={{ height: '5%' }} />
          {index === 0 ? (
            <View style={styles.progressContainer}>
              <Text style={styles.assessText}>Welcome Back {name}!</Text>
              <View>
                <Text style={styles.studyText}>
                  Your account is currently marked as inactive. But you can choose to continue the study at any time,
                  and pick back up where you left off.
                </Text>
                {/* <Text /> */}
                <Button
                  style={styles.button}
                  title="Resume the Study"
                  titleProps={{ style: { fontSize: 24, color: 'white', paddingHorizontal: '25%' } }}
                  onPress={() => {
                    navigation.navigate('My Account', { isActive: 'True' });
                  }}
                />
                {/* Will take users to exit survey */}
                <Text style={styles.studyText}>
                  Otherwise, it would help us a great deal to learn why you chose not to complete the study. Please
                  select Exit Survey below to provide your valuable feedback.
                </Text>
              </View>
              <Button
                style={styles.button}
                title="Take Exit Survey"
                titleProps={{ style: { fontSize: 24, color: 'white', paddingHorizontal: '25%' } }}
                onPress={() => {
                  navigation.navigate('FormWrapper', {
                    go_back_key: navigation.state.key,
                    studyIndex: index,
                    username,
                  });
                }}
              />
            </View>
          ) : (
            <View style={styles.progressContainer}>
              <Text style={styles.assessText}>Welcome back {name}</Text>
              <View>
                <Text style={styles.waitText}>You must wait 5 days until moving on to Level 1.</Text>
              </View>
            </View>
          )}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingBottom: '2%',
    marginTop: '2.5%',
    marginLeft: '15%',
    marginRight: '15%',
  },
  progressContainer: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  overviewText: {
    textAlign: 'center',
    color: '#49afeb',
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: '4%',
    paddingVertical: '3%',
  },
  assessText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: '1%',
    paddingVertical: '3%',
  },
  bodyText: {
    fontSize: 18,
    paddingHorizontal: '4%',
  },
  studyText: {
    textAlign: 'center',
    fontSize: 22,
    paddingHorizontal: '5%',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '2.5%',
    marginLeft: '2%',
    marginRight: '2%',
    textAlign: 'center',
  },
  level: {
    paddingVertical: '10%',
  },
  startButton: {
    backgroundColor: '#3c85fa',
    marginVertical: '5%',
    width: '90%',
  },
  startText: {
    color: 'white',
    fontSize: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'cornflowerblue',
    marginBottom: '5%',
    marginLeft: '2%',
    marginRight: '2%',
    textAlign: 'center',
  },
  waitText: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: '5%',
  },
});
