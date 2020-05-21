/* eslint-disable react/prefer-es6-class */
import React from 'react';
import createReactClass from 'create-react-class';
import Slider from 'react-native-slider';
import { View, StyleSheet } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import AppText from '../AppText.jsx';

// custom component for having a panel question with sub questions and answers with a slider
const OldPanel = createReactClass({
  // this method is currently setting the default for this component and the model it was given.
  // may require changing in the future
  getInitialState() {
    const { key } = this.props.config;
    this.props.model[key] = {}; // this is mapping a default for the form so that if they never click a slider, the model represents that
    this.props.config.templateOptions.questions.map((question, i) => {
      this.props.model[key][i] = -1;
    });
    return {};
  },
  displaySelected(answers, i) {
    return answers[this.state[i] + 1] || answers[0];
  },
  render() {
    const to = (this.props.config || {}).templateOptions || {};
    const questions = to.questions || [];
    const diffKey = this.props.config.key;
    const items = questions.map((question, i) => (
      <Card
        title={<AppText style={styles.question}>{question}</AppText>}
        containerStyle={{ width: '100%', alignSelf: 'center' }}
        borderRadius={5}
      >
        <AppText style={{ fontSize: 16, paddingTop: '8%', textAlign: 'center' }}>
          {this.displaySelected(to.answers, i)}
        </AppText>
        <Slider
          value={-1}
          minimumValue={-1}
          maximumValue={to.answers.length - 2}
          step={1}
          minimumTrackTintColor="#48AADF"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#48AADF"
          onValueChange={(value) => {
            this.setState({ [i]: value });
            this.props.model[diffKey][i] = value;
          }}
        />
      </Card>
    ));

    return (
      <View style={{ flex: 1, paddingVertical: '5%' }}>
        {to.label && (
          <AppText style={{ fontWeight: 'bold', color: 'black', fontSize: 22 }}>{to.label}</AppText>
        )}
        {items}
      </View>
    );
  },
});

module.exports = OldPanel;

// styles for this customer component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7ED',
  },
  question: {
    paddingTop: '5%',
    fontSize: 20,
  },
  answers: {
    fontSize: 18,
  },
  item: {
    flex: 1,
    paddingBottom: '5%',
  },
  containItems: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
  },
});
