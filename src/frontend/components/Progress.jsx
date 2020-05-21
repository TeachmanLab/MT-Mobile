/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Button, Card, Icon, Header, Divider } from 'react-native-elements';
import { ScrollView, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText.jsx';
import { levels } from './Json/LevelsJson.js';

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formIndex: -1,
      questionIndex: -1,
      numForms: -1,
    };
  }

  componentWillUnmount() {
    this._unsubscribe.remove();
  }

  render() {
    const { navigation } = this.props;
    const formIndex = navigation.getParam('formIndex', null);
    const questionIndex = navigation.getParam('questionIndex', null);
    const name = navigation.getParam('name', 'name_error');
    const email = navigation.getParam('email', 'email_error');
    const token = navigation.getParam('token', '');

    const finished = formIndex === levels.length;
    const currTitle = finished ? '' : levels[formIndex].title;

    const alertHeader = formIndex === 0 && questionIndex === -1
      ? `Welcome ${name}!`
      : `Welcome back ${name}!`;
    const alertText = formIndex === 0 && questionIndex === -1
      ? 'You are ready to begin your first study!'
      : `If you are ready to continue with ${currTitle}, please click continue below.`;
    const buttonLabel = formIndex === 0 && questionIndex === -1
      ? 'Start'
      : 'Continue';

    return (
      <View style={{ flex: 1, backgroundColor: '#E5E7ED' }}>
        <Header
          alignSelf="center"
          centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
          rightComponent={
            <Icon onPress={() => navigation.toggleDrawer()} size={40} name="navicon" type="evilicon" color="white" />
          }
        />
        <ScrollView style={styles.container}>
          {finished ? (
            <Card
              title={(
                <AppText style={styles.overviewText}>
                  {alertHeader}
                </AppText>
              )}
              borderRadius={5}
            >
              <Divider style={{ marginBottom: '3%' }} />
              <AppText style={styles.waitText}>
                You have finished all available modules. We will notify you when more become available.
              </AppText>
            </Card>
          ) : (
            <Card
              title={(
                <AppText style={styles.overviewText}>
                  {alertHeader}
                </AppText>
              )}
              borderRadius={5}
            >
              <Divider style={{ marginBottom: '3%' }} />
              <AppText style={styles.waitText}>
                {alertText}
              </AppText>
              <Button
                containerStyle={styles.startButton}
                buttonStyle={{ backgroundColor: '#48AADF' }}
                title={<AppText style={{ fontSize: 24, color: 'white' }}>{buttonLabel}</AppText>}
                onPress={() => {
                  navigation.navigate('FormWrapper', {
                    go_back_key: navigation.state.key,
                    formIndex,
                    email,
                    token,
                  });
                }}
              />
            </Card>
          )}
          <Card
            title={<AppText style={styles.overviewText}>Your Progress</AppText>}
            borderRadius={5}
          >
            {levels.map((level, i) => (
              <View key={level.title}>
                <Card
                  containerStyle={{ width: '100%', alignSelf: 'center' }}
                  title={
                    i < formIndex ? (
                      <AppText style={styles.headerText}>
                        {level.title}
                        {' '}
                        <MaterialCommunityIcons name="check-circle" size={24} />
                      </AppText>
                    ) : (
                      <AppText style={styles.headerText}>
                        {level.title}
                        {' '}
                        <MaterialCommunityIcons name="progress-check" size={24} />
                      </AppText>
                    )
                  }
                  borderRadius={5}
                >
                  <Divider style={{ marginBottom: '3%' }} />
                  {i < formIndex
                  && (
                    <AppText style={styles.surveyText}>
                      Status:
                      {' '}
                      Complete
                    </AppText>
                  )}
                  {i === formIndex && questionIndex === -1
                  && (
                    <AppText style={styles.surveyText}>
                      Status:
                      {' '}
                      Not Started
                    </AppText>
                  )}
                  {i === formIndex && questionIndex !== -1
                  && (
                    <AppText style={styles.surveyText}>
                      Status:
                      {' '}
                      Question
                      {' '}
                      {questionIndex + 1}
                      {' '}
                      of
                      {' '}
                      {level.numQuestions}

                    </AppText>
                  )}
                  {i > formIndex
                  && (
                    <AppText style={styles.surveyText}>
                      Status:
                      {' '}
                      Not Started
                    </AppText>
                  )}
                  {i >= formIndex
                  && (
                    <AppText style={styles.surveyText}>
                      Estimated duration:
                      {' '}
                      {level.duration}
                      {' '}
                      minutes
                    </AppText>
                  )}
                </Card>
              </View>
            ))}
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: '5%',
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
    fontSize: 32,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  surveyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  assessText: {
    fontWeight: 'bold',
    fontSize: 32,
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
  level: {
    paddingVertical: '10%',
  },
  startButton: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  startText: {
    color: 'white',
    fontSize: 24,
  },
  waitText: {
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: '5%',
  },
});
