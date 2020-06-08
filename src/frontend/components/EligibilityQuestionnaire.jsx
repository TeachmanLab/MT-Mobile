import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Formly, FormlyConfig } from 'react-native-formly';
import { Header, Card, Button, Divider } from 'react-native-elements';
import { apiPath } from '../apiServices.jsx';
import AppText from './AppText.jsx';

require('react-native-formly-templates-md');

const oldpanel = require('./FormlyComponents/OldPanel');

const { FieldsConfig } = FormlyConfig;

FieldsConfig.addType([{ name: 'oldpanel', component: oldpanel }]);

const indexToType = {
  0: 'dryness',
  1: 'breathing',
  2: 'trembling',
  3: 'worry',
  4: 'panic',
  5: 'heart',
  6: 'scared',
};

export default class EligibilityQuestionnaire extends Component {
  formlyConfig = {
    fields: [
      {
        key: 'eligibleAnswers',
        type: 'oldpanel',
        templateOptions: {
          label: 'Over the last week, how often have you been bothered by any of the following problems?',
          questions: [
            'I was aware of dryness of my mouth.',
            'I experienced breathing difficulty (e.g., excessively rapid breathing, breathlessness in the absence of physical exertion).',
            'I experienced trembling (e.g., in the hands).',
            'I was worried about situations in which I might panic and make a fool of myself.',
            'I felt I was close to panic.',
            "I was aware of my heart's action in the absence of exercise (e.g., felt heart rate increase, heart missing a beat).",
            'I felt scared without any good reason.',
          ],
          answers: ['Prefer not to answer', 'Not at all', 'Sometimes', 'A lot of the time', 'Most of the time'],
        },
      },
      {
        key: 'over18',
        type: 'checkbox',
        templateOptions: {
          label: 'I am over 18 years of age.',
        },
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      eligibleAnswers: {
        0: -1,
        1: -1,
        2: -1,
        3: -1,
        4: -1,
        5: -1,
        6: -1,
      },
      over18: false,
    };
  }

  onFormlyUpdate = (model) => {
    const oldState = this.state;
    this.setState({ ...oldState, ...model });
  };

  onFormlyValidityChange = (isValid) => {
    this.setState({ formIsValid: isValid });
  };

  async checkEligible() {
    try {
      const { navigation } = this.props;
      const { eligibleAnswers } = this.state;
      let newModel = {};
      Object.keys(eligibleAnswers).forEach((key) => {
        const mapVal = indexToType[key];
        const mapKey = eligibleAnswers[key];
        newModel[mapVal] = mapKey;
      });
      const tempModel = { ...this.state };
      delete tempModel.eligibleAnswers;
      newModel = { ...newModel, ...tempModel };
      const path = 'http://127.0.0.1:5000/api/eligible';
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newModel),
      });
      const responseJson = await response.json();
      if (responseJson.eligible) {
        navigation.navigate('Eligible', { go_back_key: navigation.state.key });
        return responseJson;
      }
      navigation.navigate('Ineligible', { go_back_key: navigation.state.key });
      return responseJson;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  render() {
    const { navigation } = this.props;
    const { model } = this.state;
    return (
      <View style={styles.container}>
        <Header
          alignSelf="center"
          centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
        />
        <ScrollView style={styles.containerScroll} contentContainerStyle={{ flexGrow: 1 }}>
          <Card
            title={<AppText style={styles.title}>Eligibility Questionnaire</AppText>}
            borderRadius={5}
          >
            <Divider style={{ marginBottom: '3%' }} />
            <AppText style={styles.note}>
              Please note that in order to participate in the Calm Thinking study, regular access to a laptop/desktop
              computer, tablet, and/or smartphone with Internet connection is required. Please read each statement below.
              Then, select the number that best shows how much the statement applied to you over the past week. There are
              no right or wrong answers. Do not spend too much time on any statement.
            </AppText>
            <Formly
              config={this.formlyConfig}
              model={model}
              onFormlyUpdate={this.onFormlyUpdate}
              onFormlyValidityChange={this.onFormlyValidityChange}
            />
            <Button
              title={<AppText>Next</AppText>}
              buttonStyle={{ backgroundColor: '#48AADF' }}
              onPress={() => this.checkEligible()}
              style={{ paddingTop: '5%' }}
            />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7ED',
  },
  containerScroll: {
    marginBottom: '5%',
  },
  title: {
    color: '#48AADF',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  note: {
    paddingBottom: '5%',
    fontSize: 22,
  },
});
