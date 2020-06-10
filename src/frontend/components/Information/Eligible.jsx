import React from 'react';
import { View, ScrollView, StyleSheet, Linking } from 'react-native';
import { Button, Card, Divider, Header, Icon } from 'react-native-elements';
import AppText from '../AppText.jsx';

const Eligible = (props) => (
  <View style={{ flex: 1, backgroundColor: '#E5E7ED' }}>
    <Header
      alignSelf="center"
      leftComponent={
        <Icon
          onPress={() => props.navigation.navigate(props.navigation.state.params.go_back_key)}
          size={50}
          name="chevron-left"
          type="evilicon"
          color="white"
        />
      }
      centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
    />
    <ScrollView style={styles.scrollContainer}>
      <Card title={<AppText style={styles.title}>You Are Eligible!</AppText>}>
        <Divider style={{ marginBottom: '3%' }} />
        <AppText style={styles.body}>
          You reported experiencing some anxiety. As a result, you are eligible to participate in the Calm Thinking
          study, a new Internet-based program designed to reduce anxious thinking.
        </AppText>
        <AppText style={styles.body}>
          This is an experimental program, so it is still in the testing phase, but there are many good reasons for you
          to participate.
        </AppText>
      </Card>
      <Card title={<AppText style={styles.title}>Reasons to Participate</AppText>}>
        <Divider style={{ marginBottom: '3%' }} />
        <AppText style={styles.bodyBullet}>
          - Prior research says it may reduce anxious thinking as effectively as therapy for some people.
        </AppText>
        <AppText style={styles.bodyBullet}>- It is FREE.</AppText>
        <AppText style={styles.bodyBullet}>
          - It will not require a lot of your time.It can be completed anywhere — all you need is a computer, tablet, or
          smartphone with Internet access.
        </AppText>
        <AppText style={styles.bodyBullet}>
          - At the end of the study, we’ll give you feedback about how your anxiety symptoms have changed.
        </AppText>
        <AppText style={styles.bodyBullet}>
          - You can access a fun and interesting psychology demonstration after each session.
        </AppText>
      </Card>
      <Card title={<AppText style={styles.title}>Signing Up</AppText>}>
        <Divider style={{ marginBottom: '3%' }} />
        <AppText style={styles.body}>
          If you would like to participate, click the “Sign Up” button below. If you do not wish to participate,
          consider reviewing these alternate{' '}
          <AppText
            style={{ color: '#48AADF' }}
            onPress={() => Linking.openURL('https://mindtrails.virginia.edu/calm/public/resources')}
          >
            Mental Health Resources
          </AppText>{' '}
          for dealing with your anxiety.
        </AppText>
        <Button
          buttonStyle={{ backgroundColor: '#48AADF' }}
          containerStyle={{
            paddingTop: '3%',
            width: '100%',
            alignSelf: 'center',
          }}
          title={<AppText>Sign Up</AppText>}
          onPress={() => props.navigation.navigate('Create Account', { go_back_key: props.navigation.state.key })}
        />
      </Card>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'column',
    backgroundColor: '#E5E7ED',
    marginTop: '5%',
    marginBottom: '5%',
  },
  title: {
    color: '#48AADF',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
  body: {
    fontSize: 18,
    marginBottom: '2.5%',
  },
  bodyBold: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '2.5%',
    marginLeft: '2%',
    marginRight: '2%',
  },
  bodyBullet: {
    fontSize: 18,
    marginBottom: '2.5%',
  },
});

export default Eligible;
