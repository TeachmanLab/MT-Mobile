import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Formly, FormlyConfig } from 'react-native-formly';
import { Header, Icon, Button } from 'react-native-elements';

// require('react-native-formly-templates-md');

// const panel = require('./FormlyComponents/Multiselect');

// const { FieldsConfig } = FormlyConfig;

// FieldsConfig.addType([{ name: 'panel', component: panel }]);

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
        type: 'multiselect',
        templateOptions: {
          label: 'What device(s) did you use to complete the program? Please check all that apply.',
          options: [
            {
              label: 'Computer',
            },
            {
              label: 'Smartphone',
            },
            {
              label: 'Tablet',
            },
            {
              label: 'Prefer not to answer',
            },
          ],
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

  // async checkEligible() {
  //   try {
  //     const { navigation } = this.props;
  //     const { eligibleAnswers } = this.state;
  //     let newModel = {};
  //     Object.keys(eligibleAnswers).forEach((key) => {
  //       const mapVal = indexToType[key];
  //       const mapKey = eligibleAnswers[key];
  //       newModel[mapVal] = mapKey;
  //     });
  //     const tempModel = { ...this.state };
  //     delete tempModel.eligibleAnswers;
  //     newModel = { ...newModel, ...tempModel };
  //     const response = await fetch('http://128.143.67.97:33109/api/api/eligible', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(newModel),
  //     });
  //     const responseJson = await response.json();
  //     if (responseJson.eligible) {
  //       navigation.navigate('Eligible', { go_back_key: navigation.state.key });
  //       return responseJson;
  //     }
  //     navigation.navigate('Ineligible', { go_back_key: navigation.state.key });
  //     return responseJson;
  //   } catch (error) {
  //     console.log(error);
  //     return error;
  //   }
  // }

  render() {
    const { navigation } = this.props;
    const { model } = this.state;
    return (
      <View style={styles.container}>
        <Header
          alignSelf="center"
          centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
          rightComponent={
            <Icon onPress={() => navigation.toggleDrawer()} size={40} name="navicon" type="evilicon" color="white" />
          }
        />
        <ScrollView style={styles.containerScroll}>
          <Text style={styles.title}>Reasons for Ending Questionnaire</Text>
          <Text style={styles.note}>
            We are interested in improving Calm Thinking and would like to learn about why you decided to stop the
            program. We appreciate your feedback!
          </Text>
          <Formly
            config={this.formlyConfig}
            model={model}
            onFormlyUpdate={this.onFormlyUpdate}
            onFormlyValidityChange={this.onFormlyValidityChange}
          />
          {/* <Button
              title="Next"
              onPress={
                () => this.checkEligible()
              }
              style={{ paddingBottom: '10%', paddingTop: '5%' }}
            /> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5EA',
  },
  containerScroll: {
    paddingHorizontal: '5%',
  },
  title: {
    marginTop: '5%',
    color: 'cornflowerblue',
    fontSize: 25,
    fontWeight: 'bold',
  },
  note: {
    paddingTop: '5%',
    fontSize: 18,
  },
});
