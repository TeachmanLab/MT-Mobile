/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prefer-es6-class */
import React from 'react';
import createReactClass from 'create-react-class';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import imageDict from '../Json/imageDict';

const ImagePage = createReactClass({
  // Initial state contains the model info passed in through FormWrapper
  getInitialState() {
    return {};
  },

  render() {
    // Castings for this.props and config.templateOptions to make code cleaner
    const { config, model, onChange } = this.props;
    const to = config.templateOptions;
    const { imgUrl, scenarioTitle, scenarioKey, description, imgScenarioURL } = to;
    return (
      <View style={styles.container}>
        {/* Card outlining the entire panel */}
        <Card
          // title={<Text style={styles.formTitle}>{scenarioTitle}</Text>}
          borderRadius={10}
          containerStyle={{
            width: '93%',
            flex: 1,
            marginBottom: '8%',
          }}
          wrapperStyle={{ flex: 1 }}
        >
          {/* SCENARIO TITLE */}
          <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  borderRadius: 28,
                  borderWidth: 6,
                  borderColor: '#B5E7FA',
                  height: '100%',
                  width: '100%',
                  aspectRatio: 1,
                  // flex: 1,
                }}
                // source={require('../../assets/scenario1Corner.png')}
                source={imageDict[scenarioKey][imgUrl]}
              />
            </View>
            <View
              style={{
                flex: 6,
                alignItems: 'center',
                justifyContent: 'center',
                // flexDirection: 'row',
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#4095C3' }}>{scenarioTitle}</Text>
            </View>

            {scenarioTitle.length < 15 && (
              //  an empty view with flex:1 to help center the title more
              // if the text is long enough it can look centered without the view
              <View style={{ flex: 1 }} />
            )}
          </View>
          {/* DESCRIPTION CARD */}
          <View style={{ flex: 2, justifyContent: 'flex-end' }}>
            <Card borderRadius={15} containerStyle={styles.innerContainer}>
              <Text style={styles.description}>{description}</Text>
            </Card>
          </View>
          {/* PICTURE IN THE MIDDLE */}
          <View style={{ flex: 7, justifyContent: 'center' }}>
            {/* Image source gets passed in through JSON */}
            <Image source={imageDict[scenarioKey][imgScenarioURL]} style={styles.image} />
          </View>
          {/* NEXT BUTTON */}
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            {/* Button pushes state changes to the model and moves onto the next question */}
            <Button
              // style={{ alignSelf: 'center', paddingTop: '1%', paddingBottom: '1%', width: '92%' }}
              containerStyle={{ height: '55%', width: '55%' }}
              buttonStyle={{ backgroundColor: '#48AADF', borderRadius: 8, height: '100%' }}
              titleStyle={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
              // buttonStyle={{ backgroundColor: '#48AADF', borderRadius: 8, height: '100%' }}
              onPress={() => {
                model.questionIndex += 1;
                onChange();
              }}
              title="Next"
            />
          </View>
        </Card>
      </View>
    );
  },
});

module.exports = ImagePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7ED',
    alignItems: 'center',
  },
  innerContainer: {
    height: '70%',
    // backgroundColor: '#e5e7ed'
    // alignItems: 'center',
    // justifyContent: 'center',
    // flex: 1,
    backgroundColor: '#F0ECEC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fillContainer: {
    width: '90%',
    backgroundColor: '#E5E7ED',
    alignItems: 'center',
  },
  formTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: '1%',
    paddingVertical: '3%',
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    // textAlign: 'center',
    // backgroundColor: 'yellow',
  },
  image: {
    height: '70%',
    width: '90%',
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: 'black',
    alignSelf: 'center',
  },
});
