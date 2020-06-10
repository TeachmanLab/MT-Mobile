import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, Icon, Header, Divider } from 'react-native-elements';
import { ScrollView, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText.jsx';
import { levels } from './Json/LevelsJson.js';

const Progress = (props) => {
  const { formIndex, questionIndex, name } = useSelector((state) => state.userReducer);
  const finished = formIndex === levels.length;
  const currTitle = finished ? '' : levels[formIndex].title;
  const alertHeader = formIndex === 0 && questionIndex === -1 ? `Welcome ${name}!` : `Welcome back ${name}!`;
  const alertText =
    formIndex === 0 && questionIndex === -1
      ? 'You are ready to begin your first study!'
      : `If you are ready to continue with ${currTitle}, please click continue below.`;
  const buttonLabel = formIndex === 0 && questionIndex === -1 ? 'Start' : 'Continue';

  return (
    <View style={{ flex: 1, backgroundColor: '#E5E7ED' }}>
      <Header
        alignSelf="center"
        centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
        rightComponent={
          <Icon
            onPress={() => props.navigation.toggleDrawer()}
            size={40}
            name="navicon"
            type="evilicon"
            color="white"
          />
        }
      />
      <ScrollView style={styles.container}>
        {finished ? (
          <Card title={<AppText style={styles.overviewText}>{alertHeader}</AppText>} borderRadius={5}>
            <Divider style={{ marginBottom: '3%' }} />
            <AppText style={styles.waitText}>
              You have finished all available modules. We will notify you when more become available.
            </AppText>
          </Card>
        ) : (
          <Card title={<AppText style={styles.overviewText}>{alertHeader}</AppText>} borderRadius={5}>
            <Divider style={{ marginBottom: '3%' }} />
            <AppText style={styles.waitText}>{alertText}</AppText>
            <Button
              containerStyle={styles.startButton}
              buttonStyle={{ backgroundColor: '#48AADF' }}
              title={<AppText style={{ fontSize: 24, color: 'white' }}>{buttonLabel}</AppText>}
              onPress={() => {
                props.navigation.navigate('FormWrapper');
              }}
            />
          </Card>
        )}
        <Card title={<AppText style={styles.overviewText}>Your Progress</AppText>} borderRadius={5}>
          {levels.map((level, i) => (
            <View key={level.title}>
              <Card
                containerStyle={{ width: '100%', alignSelf: 'center' }}
                borderRadius={5}
                title={
                  i < formIndex ? (
                    <AppText style={styles.headerText}>
                      {level.title} <MaterialCommunityIcons name="check-circle" size={24} />
                    </AppText>
                  ) : (
                    <AppText style={styles.headerText}>
                      {level.title} <MaterialCommunityIcons name="progress-check" size={24} />
                    </AppText>
                  )
                }
              >
                <Divider style={{ marginBottom: '3%' }} />
                {i < formIndex && <AppText style={styles.surveyText}>Status: Complete</AppText>}

                {i === formIndex && questionIndex === -1 && (
                  <AppText style={styles.surveyText}>Status: Not Started</AppText>
                )}

                {i === formIndex && questionIndex !== -1 && (
                  <AppText style={styles.surveyText}>
                    Status: Question {questionIndex + 1} of {level.numQuestions}
                  </AppText>
                )}

                {i > formIndex && <AppText style={styles.surveyText}>Status: Not Started</AppText>}

                {i >= formIndex && (
                  <AppText style={styles.surveyText}>Estimated duration: {level.duration} minutes</AppText>
                )}
              </Card>
            </View>
          ))}
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: '5%',
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
  startButton: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  waitText: {
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: '5%',
  },
});

export default Progress;
