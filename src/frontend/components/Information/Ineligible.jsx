import React from 'react';
import { Card, Divider, Icon, Header } from 'react-native-elements';
import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';
import AppText from '../AppText.jsx';

export default function Ineligible(props) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, backgroundColor: '#E5E7ED' }}>
      <Header
        alignSelf="center"
        leftComponent={(
          <Icon
            onPress={() => navigation.navigate(navigation.state.params.go_back_key)}
            size={50}
            name="chevron-left"
            type="evilicon"
            color="white"
          />
        )}
        centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
        // rightComponent={
        //   <Icon onPress={() => navigation.toggleDrawer()} size={40} name="navicon" type="evilicon" color="white" />
        // }
      />
      <ScrollView style={styles.scrollContainer}>
        <Card
          title={(
            <AppText style={styles.title}>
              Thank You for Completing Our Assessment
            </AppText>
          )}
          borderRadius={5}
        >
          <Divider style={{ marginBottom: '3%' }} />
          <AppText style={styles.body}>
            Unfortunately, you do not currently qualify for the Calm Thinking study, but we appreciate your interest. We
            want to be sure we are offering the program to people we think are most likely to find it helpful.
          </AppText>
          <AppText style={styles.body}>
            If you wish to participate in other research, we encourage you to visit
            {' '}
            <AppText
              style={{ color: '#48AADF' }}
              onPress={() => Linking.openURL('https://implicit.harvard.edu/implicit/research/')}
            >
              Project Implicit
            </AppText>
            , where there are other studies that you can try today, or complete another study at
            {' '}
            <AppText
              style={{ color: '#48AADF' }}
              onPress={() => Linking.openURL('https://implicit.harvard.edu/implicit/user/pih/pih/index.jsp')}
            >
              Project Implicit Mental Health
            </AppText>
            . To access information about mental health and mental health treatment, please see the
            {' '}
            <AppText
              style={{ color: '#48AADF' }}
              onPress={() => Linking.openURL('https://mindtrails.virginia.edu/calm/public/resources')}
            >
              Mental Health Resources
            </AppText>
            {' '}
            page on this website.
          </AppText>
          <AppText style={styles.body}>Thank you for your interest!</AppText>
        </Card>
        <Card
          title={<AppText style={styles.title}>Please Note</AppText>}
          borderRadius={5}
        >
          <Divider style={{ marginBottom: '3%' }} />
          <AppText style={styles.body}>
            You are welcome to complete the eligibility questionnaire at a later time to determine if your eligibility
            changes (e.g., based on symptom changes or new study criteria). You will be eligible to complete the
            questionnaire again in one week.
          </AppText>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'column',
    backgroundColor: '#E5E7ED',
    marginBottom: '5%',
  },
  title: {
    color: '#48AADF',
    fontWeight: 'bold',
    fontSize: 28,
    alignSelf: 'center',
    textAlign: 'center',
  },
  body: {
    fontSize: 22,
    marginBottom: '2.5%',
    marginLeft: '2%',
    marginRight: '2%',
  },
  bodyBold: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '4%',
  },
  button: {
    marginTop: '10%',
    marginLeft: '25%',
    marginRight: '25%',
  },
});
