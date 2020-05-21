import React, { Component } from 'react';
import { Card, Divider, Icon, Header, Button, CheckBox } from 'react-native-elements';
import { StyleSheet, ScrollView, Text, View, Linking, TextInput } from 'react-native';
import AppText from '../AppText.jsx';

export default function Debrief(props) {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, backgroundColor: '#E5E7ED' }}>
      {/* Blue header that appears on each page
                      Left Component: Back button - Navigates to the previous page by using props.navigation.state
                      Center Component: Title
                      Right Component: Icon that activates the drawer navigator of the app
              */}
      <Header
        alignSelf="center"
        centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
        rightComponent={(
          <Icon
            onPress={() => navigation.toggleDrawer()}
            size={40}
            name="navicon"
            type="evilicon"
            color="white"
          />
        )}
      />
      <ScrollView style={styles.scrollContainer} contentContainerStyle={{ flexGrow: 1 }}>
        <Card
          title={<AppText style={styles.title}>Thank You for Participating</AppText>}
          borderRadius={5}
        >
          <Divider style={{ marginBottom: '3%' }} />
          {/* <AppText style={styles.body}>
            You have now exited the study. It would help us a great deal to learn why you chose not to complete the
            study. Please click on Exit Survey button below to provide your valuable feedback.
          </AppText>
          <Button
            style={styles.button}
            buttonStyle={{ backgroundColor: '#48AADF', borderRadius: 8 }}
            title="Exit Survey"
            onPress={() => {
              navigation.navigate('ExitQuestionnaire');
            }}
          /> */}
          <AppText style={styles.body}>
            {
              'We are currently investigating experimental approaches to reduce anxiety. The experimental approaches used in the study are based on models of anxiety, which have shown that anxious people tend to interpret ambiguous situations as threatening. It has been proposed that the tendency to interpret things in a threatening way plays a role in the onset of, and recovery from, anxiety problems. \n\nIn the current study, we are evaluating if it is possible to change interpretation patterns over the Internet, and whether changing these interpretation patterns will reduce anxiety symptoms. We are also testing whether we can identify people at risk of dropping out of the study and provide them a personal coach to encourage them to stay in the study. Finally, we are examining whether participants obtain different results by completing the intervention on their mobile phone, tablet, or personal computer. \n\nDepending on your condition, you may have been asked to read and imagine yourself in a series of brief stories. In this active condition, the last word (or word fragment) gave almost all of the brief stories a positive meaning. We expect this will encourage a more flexible and less negative thinking style. In an alternative condition, which we do not expect to be as effective as the active condition, you simply read about characteristics of anxiety. \n\nFor some participants, if your early activity on the site suggested you might be at risk of dropping out of the study, you may have been connected with a personal coach to support your participation in the study. We expect that participants who had the opportunity to work with a coach will have better outcomes than participants at risk for dropping out who did not work with a coach.'
            }
          </AppText>
          <Button
            buttonStyle={{ backgroundColor: '#48AADF' }}
            containerStyle={{
              height: '100%',
              width: '100%',
              alignSelf: 'center',
              paddingTop: '3%',
            }}
            title={<AppText>Exit the Study</AppText>}
            onPress={() => {
              navigation.navigate('Log Out');
            }}
          />
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#48AADF',
    alignSelf: 'center',
  },
  body: {
    fontSize: 22,
  },
  input: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    padding: 15,
    marginBottom: 10,
  },
});
