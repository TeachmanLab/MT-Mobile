import React from 'react';
import { Header, Button, Card, Divider } from 'react-native-elements';
import { StyleSheet, ScrollView, View, Linking, Alert } from 'react-native';
import AppText from '../AppText.jsx';

const About = (props) => {
  async function openURL() {
    try {
      await Linking.openURL('mailto:studyteam@mindtrails.org');
    } catch (error) {
      Alert.alert("Couldn't Open Mail App", 'Unfortunately, we were unable to open your mail client');
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#E5E7ED' }}>
      <Header alignSelf="center" centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }} />
      <ScrollView style={styles.scrollContainer}>
        <Card title={<AppText style={styles.title}>About</AppText>} borderRadius={5}>
          <Divider />
          <AppText style={styles.body}>
            The MindTrails Project is a web-based, public research site that offers free interpretation bias training
            programs to promote healthier thinking patterns for people with anxiety and other emotional difficulties.
            Research shows that people prone to anxiety tend to think about situations negatively. MindTrails programs
            give you practice thinking about situations in new ways. This encourages more flexible thinking styles in
            your everyday life. Learn more{' '}
            <AppText
              style={{ color: '#48AADF' }}
              onPress={() => Linking.openURL('https://mindtrails.virginia.edu/calm/public/researchSupport')}
            >
              about the science
            </AppText>
            .
          </AppText>
          <AppText style={styles.body}>
            Developed by an interdisciplinary team of clinical psychologists, computer scientists, and engineers at the
            University of Virginia, MindTrails aims to efficiently test which training programs work best for different
            people and problem areas. We strive to continually improve these programs for the next generation. Our team
            is excited to learn whether these programs can help address the desperate need for greater delivery of care
            that has good research support.
          </AppText>
        </Card>
        <Card title={<AppText style={styles.contactTitle}>Contact Us</AppText>} borderRadius={5}>
          <Divider />
          <Button
            buttonStyle={{ backgroundColor: '#48AADF' }}
            containerStyle={{
              paddingTop: '3%',
              width: '100%',
              alignSelf: 'center',
            }}
            onPress={openURL}
            title="studyteam@mindtrails.org"
          />
        </Card>
        <Card title={<AppText style={styles.contactTitle}>Calm Thinking Study</AppText>} borderRadius={5}>
          <Divider />
          <AppText style={styles.body}>
            We are currently offering free training programs as part of a study on promoting healthier thinking patterns
            for people with anxiety. The programs consist of five 15-20 minute sessions spread out over five weeks.
          </AppText>
          <Button
            buttonStyle={{ backgroundColor: '#48AADF' }}
            containerStyle={{
              paddingTop: '3%',
              width: '100%',
              alignSelf: 'center',
            }}
            title="Check Eligibility"
            onPress={() =>
              props.navigation.navigate('Eligibility Questionnaire', { go_back_key: props.navigation.state.key })
            }
          />
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'column',
    backgroundColor: '#E5E7ED',
    marginBottom: '5%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#48AADF',
    alignSelf: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: '2.5%',
    marginHorizontal: '2%',
  },
  body: {
    fontSize: 22,
    marginVertical: '2.5%',
  },
  button: {
    marginTop: '2.5%',
    marginLeft: '19%',
    marginRight: '19%',
  },
  contactTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#48AADF',
    marginBottom: '1.5%',
    marginHorizontal: '2%',
    alignSelf: 'center',
  },
});

export default About;
