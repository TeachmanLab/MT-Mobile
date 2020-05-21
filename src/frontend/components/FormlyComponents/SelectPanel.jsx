/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prefer-es6-class */
import React from 'react';
import createReactClass from 'create-react-class';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import AppText from '../AppText.jsx';

const SelectPanel = createReactClass({
  getInitialState() {
    return {};
  },

  render() {
    const { config } = this.props;
    const to = config.templateOptions || {};
    const choices = to.options.map((option, i) => (
      <View
        style={styles.buttonContainer}
        key={i}
        opacity={option.toUpperCase() === 'Prefer not to answer'.toUpperCase() ? 0.7 : 1}
      >
        <Button
          onPress={async () => {
            await config.nextQuestion({
              key: config.key,
              question: to.question,
              response: option,
            });
          }}
          title={<AppText>{option}</AppText>}
          titleStyle={styles.answerText}
          buttonStyle={{
            backgroundColor: '#48AADF',
            width: '100%',
          }}
          containerStyle={{ marginBottom: '5%' }}
        />
      </View>
    ));

    return (
      <View style={styles.container}>
        <Card
          containerStyle={styles.buttonCard}
          borderRadius={5}
          wrapperStyle={{ flex: 1 }}
        >
          {/* TITLE RENDERED HERE */}
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <AppText style={styles.questionText}>
              {to.question}
            </AppText>
          </View>
          {/* CHOICES RENDERED HERE */}
          <View
            style={{
              flex: 2,
            }}
          >
            <ScrollView
              style={{}}
              contentContainerStyle={styles.answers}
            >
              {choices}
            </ScrollView>
          </View>
        </Card>
      </View>
    );
  },
});

module.exports = SelectPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f6f5ea',
    backgroundColor: '#E5E7ED',
    alignItems: 'center',
    marginBottom: '5%',
  },
  questionText: {
    fontSize: 26,
    textAlign: 'center',
    // height: '30%',
  },
  buttonContainer: {
    width: '93%',
  },
  buttonCard: {
    flex: 1,
    width: '93%',
    // backgroundColor: 'red',
  },
  answers: {
    justifyContent: 'space-evenly',
    alignItems: 'center',

    flexGrow: 1,
  },
  answerButton: {
    width: '100%',
    paddingVertical: '2%',
  },
  answerText: {
    fontSize: 20,
    color: 'white',
  },
});
