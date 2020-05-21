/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Dimensions, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Divider, Header, Icon } from 'react-native-elements';
import { Formly, FormlyConfig } from 'react-native-formly';
import * as Progress from 'react-native-progress';
import { apiPath, saveAnswers } from '../apiServices.jsx';
import AppText from './AppText.jsx';

const wordFill = require('./FormlyComponents/WordFill');
const selectPanel = require('./FormlyComponents/SelectPanel');
const yesNo = require('./FormlyComponents/YesNo');
const multiselect = require('./FormlyComponents/Multiselect');
const imagePage = require('./FormlyComponents/ImagePage');
const sliderPage = require('./FormlyComponents/SliderPage');
const panel = require('./FormlyComponents/Panel');

const { FieldsConfig } = FormlyConfig;

FieldsConfig.addType([
  { name: 'wordFill', component: wordFill },
  { name: 'selectPanel', component: selectPanel },
  { name: 'yesNo', component: yesNo },
  { name: 'multiselect', component: multiselect },
  { name: 'imagePage', component: imagePage },
  { name: 'sliderPage', component: sliderPage },
  { name: 'panel', component: panel },
]);

export default class FormWrapper extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      token: navigation.getParam('token', ''),
      forms: [],
      formIndex: 0, // what form the user is at
      questionIndex: -1, // what question within a form is the user at
      isLoading: true,
      timerID: 0,
      duration: 0,
      // for dev below
      // forms: forms,
      // isLoading: false,
    };
    this.nextForm = this.nextForm.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.onFormlyUpdate = this.onFormlyUpdate.bind(this);
    this.onFormlyValidityChange = this.onFormlyValidityChange.bind(this);
    this.getProgressAPI = this.getProgressAPI.bind(this);
  }

  async componentDidMount() {
    const { navigation } = this.props;
    try {
      // if they leave the forms with the navigator and come back, reset the start date (temporary fix).
      this._unsubscribe = navigation.addListener('didFocus', async () => {
        try {
          await this.getProgressAPI();
        } catch (error) {
          console.log(error);
          navigation.navigate('Progress', {});
        }
      });
      await this.getProgressAPI();
    } catch (error) {
      console.log(error);
      navigation.navigate('Progress', {});
    }
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  onFormlyUpdate(model) {
    this.setState({});
  }

  onFormlyValidityChange(isValid) {
    this.setState({});
  }

  async getProgressAPI() {
    const { navigation } = this.props;
    try {
      const token = navigation.getParam('token', null);
      const path = `${apiPath}progress`;
      const response = await fetch(path, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const responseJson = await response.json();
      // console.log(`question index: ${responseJson.questionIndex}`);
      if (responseJson.code === 'success') {
        this.setState({
          formIndex: responseJson.formIndex,
          questionIndex: responseJson.questionIndex,
          forms: responseJson.forms,
          isLoading: false,
          startDate: new Date(),
          token,
        });
      } else {
        navigation.navigate('Progress', {});
      }
    } catch (error) {
      console.log(error);
      navigation.navigate('Progress', {});
    }
  }


  // Checks if a question, or one of the transition screens should be read
  toRender(question) {
    const { questionIndex } = this.state;
    const config = question; // set to current form object
    const atEnd = questionIndex === config.fields.length; // checks if user is at last question in form
    const atBeginning = questionIndex === -1; // checks if user has not begun form

    if (atBeginning) {
      return (
        <View style={{ flex: 19 }}>
          <Card
            title={<AppText style={styles.formTitle}>{config.title}</AppText>}
            borderRadius={5}
            containerStyle={styles.cardContainer}
          >
            <Divider style={{ marginBottom: '5%' }} />
            <View style={{ height: '90%' }}>
              <ScrollView>
                <AppText style={styles.formDescription}>{config.description}</AppText>
              </ScrollView>
            </View>
          </Card>
          <Button
            buttonStyle={{ backgroundColor: '#48AADF' }}
            containerStyle={styles.buttonContainer}
            onPress={() => {
              this.setState({ questionIndex: 0 });
            }}
            title="Begin"
          />
        </View>
      );
    }
    // if qIndex is past end of array
    if (atEnd) {
      // console.log('At end of form');
      return (
        <View style={{ flex: 19 }}>
          <Card
            title={(
              <AppText style={styles.formTitle}>
                Congratulations, you completed
                {' '}
                {config.title}
              </AppText>
            )}
            borderRadius={5}
            containerStyle={styles.cardContainer}
          />
          <Button
            buttonStyle={{ backgroundColor: '#48AADF' }}
            containerStyle={styles.buttonContainer}
            onPress={this.nextForm}
            title={<AppText>Submit</AppText>}
          />
        </View>
      );
    }
    // middle of form
    return (
      <View style={{ flex: 19 }}>
        <Formly
          config={{
            fields: [{ ...config.fields[questionIndex], parentTitle: config.title, nextQuestion: this.nextQuestion }],
          }}
          model={this.state}
          onFormlyUpdate={this.onFormlyUpdate}
          onFormlyValidityChange={this.onFormlyValidityChange}
        />
      </View>
    );
  }

  async nextQuestion(answerObject) {
    const endDate = new Date(); // quickly grab the end date for when they asked to go to next question
    const { token, formIndex, questionIndex, forms, startDate } = this.state;
    const newQuestionIndex = questionIndex + 1;
    const success = await saveAnswers(token, forms[formIndex].name, newQuestionIndex, {
      ...answerObject,
      duration: Math.ceil((endDate - startDate) / 1000), // ceiling so that rounding doesn't say 0 for 0.4 sec
    });

    if (success) {
      this.setState({
        questionIndex: newQuestionIndex,
        startDate: new Date(),
      });
    }
  }

  // increments formIndex when end of form is reached
  async nextForm() {
    const { forms, formIndex } = this.state;
    const { navigation } = this.props;
    const newIndex = formIndex + 1;

    // if you have passed the end of the form array, go back to progress
    if (newIndex === forms.length) {
      navigation.navigate('Progress', {
        go_back_key: navigation.state.key,
        username: navigation.getParam('username', 'Error_User'),
        studyIndex: formIndex,
        formIndex: newIndex,
      });
    } else {
      try {
        const { token } = this.state;
        const path = `${apiPath}nextform`;
        const response = await fetch(path, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formIndex: newIndex,
          }),
        });
        await response.json();
      } catch (error) {
        navigation.navigate('Progress', {});
      }
      this.setState({
        formIndex: newIndex,
        questionIndex: -1,
      });
    }
  }

  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const { navigation } = this.props;
    const { forms, formIndex, questionIndex, isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Header
            alignSelf="center"
            centerComponent={{
              text: 'MindTrails',
              style: { fontSize: 24, color: '#fff' },
            }}
            rightComponent={(
              <Icon
                onPress={() => navigation.navigate('Progress', {
                  formIndex,
                  questionIndex,
                  numForms: forms.length,
                })}
                size={35}
                name="home"
                type="font-awesome"
                color="white"
              />
            )}
          />
        </View>
      );
    }
    const atEnd = questionIndex === forms[formIndex].fields.length; // checks if user is at last question in form
    const atBeginning = questionIndex === -1; // checks if user has not begun form
    return (
      <View style={styles.container}>
        <Header
          alignSelf="center"
          centerComponent={{
            text: 'MindTrails',
            style: { fontSize: 24, color: '#fff' },
          }}
          rightComponent={(
            <Icon
              onPress={() => navigation.navigate('Progress', {
                formIndex,
                questionIndex,
                numForms: forms.length,
              })}
              size={35}
              name="home"
              type="font-awesome"
              color="white"
            />
          )}
        />
        {!atEnd && !atBeginning && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Progress.Bar
              style={{ alignSelf: 'center' }}
              progress={(questionIndex + 1) / forms[formIndex].fields.length}
              unfilledColor="#F5F5F5"
              borderColor="grey"
              color="#48AADF"
              height={20}
              width={screenWidth * 0.93}
              borderRadius={3}
            >
              <AppText style={{ position: 'absolute', alignSelf: 'center', fontSize: 15 }}>
                {questionIndex + 1}
                /
                {forms[formIndex].fields.length}
              </AppText>
            </Progress.Bar>
          </View>
        )}
        {this.toRender(forms[formIndex])}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#f6f5ea',
    backgroundColor: '#E5E7ED',
  },
  formTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  formDescription: {
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 15,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 9,
  },
});
