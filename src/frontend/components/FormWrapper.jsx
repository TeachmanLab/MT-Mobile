import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Divider, Header, Icon } from 'react-native-elements';
import { Formly, FormlyConfig } from 'react-native-formly';
import * as Progress from 'react-native-progress';
import AppText from './AppText.jsx';
import { getForms } from '../store.jsx';

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

const FormWrapper = (props) => {
  const { isLoading, formIndex, questionIndex, forms } = useSelector((state) => state.userReducer);

  console.log('loading: ' + isLoading);
  console.log('forms: ' + forms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForms({}));
  }, [isLoading]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Header
          alignSelf="center"
          centerComponent={{
            text: 'MindTrails',
            style: { fontSize: 24, color: '#fff' },
          }}
          rightComponent={
            <Icon
              onPress={() =>
                props.navigation.navigate('Progress', {
                  formIndex,
                  questionIndex,
                  numForms: forms.length,
                })
              }
              size={35}
              name="home"
              type="font-awesome"
              color="white"
            />
          }
        />
      </View>
    );
  }

  const screenWidth = Math.round(Dimensions.get('window').width);
  const atEnd = questionIndex === forms[formIndex].fields.length; // checks if user is at last question in form
  const atBeginning = questionIndex === -1; // checks if user has not begun form

  // Checks if a question, or one of the transition screens should be read
  const toRender = (question) => {
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
    if (atEnd) {
      return (
        <View style={{ flex: 19 }}>
          <Card
            title={<AppText style={styles.formTitle}>Congratulations, you completed {config.title}</AppText>}
            borderRadius={5}
            containerStyle={styles.cardContainer}
          />
          <Button
            buttonStyle={{ backgroundColor: '#48AADF' }}
            containerStyle={styles.buttonContainer}
            onPress={nextForm}
            title={<AppText>Submit</AppText>}
          />
        </View>
      );
    }
    return (
      <View style={{ flex: 19 }}>
        <Formly
          config={{
            fields: [{ ...config.fields[questionIndex], parentTitle: config.title, nextQuestion }],
          }}
          model={this.state}
          onFormlyUpdate={this.onFormlyUpdate}
          onFormlyValidityChange={this.onFormlyValidityChange}
        />
      </View>
    );
  };

  const nextQuestion = async (answerObject) => {
    const newQuestionIndex = questionIndex + 1;
    const success = await saveAnswers(token, forms[formIndex].name, newQuestionIndex, {
      ...answerObject,
      duration: 0, // ceiling so that rounding doesn't say 0 for 0.4 sec
    });

    if (success) {
      this.setState({
        questionIndex: newQuestionIndex,
        startDate: new Date(),
      });
    }
  };

  // increments formIndex when end of form is reached
  const nextForm = async () => {
    const newIndex = formIndex + 1;

    // if you have passed the end of the form array, go back to progress
    if (newIndex === forms.length) {
      props.navigation.navigate('Progress');
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
        props.navigation.navigate('Progress', {});
      }
      this.setState({
        formIndex: newIndex,
        questionIndex: -1,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header
        alignSelf="center"
        centerComponent={{
          text: 'MindTrails',
          style: { fontSize: 24, color: '#fff' },
        }}
        rightComponent={
          <Icon
            onPress={() =>
              props.navigation.navigate('Progress', {
                formIndex,
                questionIndex,
                numForms: forms.length,
              })
            }
            size={35}
            name="home"
            type="font-awesome"
            color="white"
          />
        }
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
              {questionIndex + 1}/{forms[formIndex].fields.length}
            </AppText>
          </Progress.Bar>
        </View>
      )}
      {toRender(forms[formIndex])}
    </View>
  );
};

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

export default FormWrapper;
