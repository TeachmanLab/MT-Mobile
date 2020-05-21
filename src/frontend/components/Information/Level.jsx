import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import AppText from '../AppText.jsx';

const tangoCard = require('../../assets/tangocard.png');

export default function Level(props) {
  function displayProgress(formIndex, index, duration, complete, questionIndex) {
    let message = '';
    // temporary fix to know if this is their first form/sign in
    if (formIndex === index && questionIndex >= 0 && !complete) {
      // message = `Est. ${duration} min. duration`;
      message = 'Section started';
    } else if (formIndex > index || complete) {
      message = 'Section complete';
    } else {
      // message = 'Section started';
      message = `Est. ${duration} min. duration`;
    }
    return <Text style={styles.durationText}>{message}</Text>;
  }
  const { level, complete, formIndex, questionIndex } = props;
  return (
    <Card title={<AppText style={styles.headerText}>{level.levelTitle}</AppText>}>
      {level.contents.map((survey, index) => (
        <View style={styles.unit} key={index}>
          <Text style={styles.surveyText}>{survey.title}</Text>
          {displayProgress(formIndex, index, survey.duration, complete, questionIndex)}
          {/* {complete && level.index === 0 ? (
            <Text style={styles.durationText}>Section complete</Text>
          ) : (
            <Text style={styles.durationText}>Est. {survey.duration} min. duration</Text>
          )} */}
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'black',
    backgroundColor: '#2d4875',
  },
  tangoText: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 10,
  },
  tangoImage: {
    height: 40,
    width: 70,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: 'black',
    marginLeft: 'auto',
  },
  checkImage: {
    height: 20,
    width: 20,
    marginLeft: 'auto',
  },
  unit: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: 'center',
  },
  bottom: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#2d4875',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  surveyText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 14,
    paddingTop: 7,
  },
  durationText: {
    fontSize: 20,
    paddingLeft: 14,
    paddingVertical: 7,
  },
  bottomText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: '3%',
  },
});
