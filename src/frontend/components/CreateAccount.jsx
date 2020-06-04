import React, { Component } from 'react';
import { Button, Card, Divider, Header, Icon, CheckBox } from 'react-native-elements';
import { View, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { staticParagraphs } from '../assets/text/CreateAccountText';
import AppText from './AppText.jsx';
import { register } from '../apiServices.jsx';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      emailReminders: false,
      textMessages: false,
      textReminders: false,
      giftCards: false,
      legalAge: false,
      notRobot: false,
      passwordsMatch: true,
      activeSections: [],
    };
    this.validateAndRegister = this.validateAndRegister.bind(this);
  }

  setsections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  async validateAndRegister() {
    try {
      const { password, confirmPassword, legalAge, notRobot, name, email, phone } = this.state;

      // Validate form data
      // TODO: Instead of just returning message, maybe return something indicating where screen should be scrolled to fix form error
      if (!name) return 'First Name/Nickname is required';
      if (!email) return 'Email is required';
      if (!phone) return 'Phone number is required';
      if (password !== confirmPassword) return 'Passwords do not match';
      if (!password || !confirmPassword) return 'Password field is required';
      if (!legalAge) return 'You must be over 18 to participate';
      if (!notRobot) return 'Select the robot captcha checker';

      const response = await register();

      if (response.code !== 'success') return response.errorReason;
      return 'Success';
    } catch (error) {
      return 'There was an error creating your account, please try again.';
    }
  }

  renderHeader = (section) => (
    <View style={styles.row}>
      <Icon name="keyboard-arrow-down" size={30} />
      <AppText style={styles.sectionHeader}>{section.title}</AppText>
    </View>
  );

  renderContent = (section) => <AppText style={styles.sectionText}>{section.content}</AppText>;

  render() {
    const {
      activeSections,
      emailReminders,
      textMessages,
      textReminders,
      giftCards,
      passwordsMatch,
      legalAge,
      notRobot,
    } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#E5E7ED' }}>
        <Header
          alignSelf="center"
          centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
        />
        <ScrollView style={styles.scrollContainer}>
          <Card
            title={<AppText style={styles.title}>Information</AppText>}
            borderRadius={5}
          >
            <Divider style={{ marginBottom: '3%' }} />
            <Accordion
              // For any default active section
              activeSections={activeSections}
              // Title and content of accordion
              sections={staticParagraphs}
              // For pararagraph header
              renderHeader={this.renderHeader}
              // For paragraph text
              renderContent={this.renderContent}
              // Setting the state of active sections
              onChange={this.setSections}
            />

            <AppText style={styles.sectionText}>
              To obtain more information about the study, ask questions about the research procedures, express concerns
              about your participation, or report illness, injury or other problems, please contact: Tonya Moon, Chair,
              Institutional Review Board for the Social and Behavioral Sciences, One Morton Dr. Suite 500, University of
              Virginia, P.O. Box 800392, Charlottesville, VA 22908-0392. Telephone: (434) 924-5999;
              irbsbshelp@virginia.edu; Website: www.virginia.edu/vprgs/irb.
            </AppText>
          </Card>
          <Card
            title={<AppText style={styles.title}>Create An Account</AppText>}
            borderRadius={5}
          >
            <Divider style={{ marginBottom: '3%' }} />
            <TextInput
              name="name"
              placeholder="First Name/Nickname*"
              style={styles.input}
              autoCompleteType="off"
              autoCapitalize="none"
              onChangeText={(input) => {
                this.setState({ name: input });
              }}
            />
            <TextInput
              placeholder="Email*"
              style={styles.input}
              autoCompleteType="off"
              autoCapitalize="none"
              onChangeText={(input) => {
                this.setState({ email: input });
              }}
            />
            <CheckBox
              containerStyle={styles.checkbox}
              checkedIcon={
                <MaterialCommunityIcons name="checkbox-blank" size={24} color="#48AADF" />
              }
              uncheckedIcon={
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="grey" />
              }
              checked={emailReminders}
              onPress={() => this.setState({ emailReminders: !emailReminders })}
              title={<AppText style={styles.checkText}>I would like to receive email reminders when it is time to start the next session. Please note that even if you do not want reminders for each session, you will still receive a few messages from us as you enter new phases in the study or if you are inactive for an extended period.</AppText>}
            />
            <TextInput
              placeholder="Phone*"
              style={styles.input}
              autoCompleteType="off"
              autoCapitalize="none"
              onChangeText={(input) => {
                this.setState({ phone: input });
              }}
            />
            <CheckBox
              value={false}
              checked={textMessages}
              checkedIcon={
                <MaterialCommunityIcons name="checkbox-blank" size={24} color="#48AADF" />
              }
              uncheckedIcon={
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="grey" />
              }
              onPress={() => this.setState({ textMessages: !textMessages })}
              containerStyle={styles.checkbox}
              title={<AppText style={styles.checkText}>I can receive text messages at this number.</AppText>}
            />
            <CheckBox
              containerStyle={styles.checkbox}
              checkedIcon={
                <MaterialCommunityIcons name="checkbox-blank" size={24} color="#48AADF" />
              }
              uncheckedIcon={
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="grey" />
              }
              checked={textReminders}
              onPress={() => this.setState({ textReminders: !textReminders })}
              title={<AppText style={styles.checkText}>I would like to receive text reminders to this phone when it is time to start the next session.</AppText>}
            />
            <CheckBox
              containerStyle={styles.checkbox}
              checkedIcon={
                <MaterialCommunityIcons name="checkbox-blank" size={24} color="#48AADF" />
              }
              uncheckedIcon={
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="grey" />
              }
              checked={giftCards}
              onPress={() => this.setState({ giftCards: !giftCards })}
              title={<AppText style={styles.checkText}>I’d like to receive gift cards for my participation (we will send a text message to your phone to verify your identity, this must be completed to receive gift cards.)</AppText>}
            />
            {!passwordsMatch && <AppText style={styles.errorText}>Your passwords did not match.</AppText>}
            <TextInput
              placeholder="Password*"
              style={styles.input}
              autoCompleteType="off"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(input) => {
                this.setState({ password: input });
              }}
            />
            <TextInput
              placeholder="Confirm Password*"
              style={styles.input}
              autoCompleteType="off"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(input) => {
                this.setState({ confirmPassword: input });
              }}
            />
            <CheckBox
              containerStyle={styles.checkbox}
              checked={legalAge}
              checkedIcon={
                <MaterialCommunityIcons name="checkbox-blank" size={24} color="#48AADF" />
              }
              uncheckedIcon={
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="grey" />
              }
              onPress={() => this.setState({ legalAge: !legalAge })}
              title={<AppText style={styles.checkText}>I am over 18</AppText>}
            />
            <CheckBox
              containerStyle={styles.checkbox}
              checked={notRobot}
              checkedIcon={
                <MaterialCommunityIcons name="checkbox-blank" size={24} color="#48AADF" />
              }
              uncheckedIcon={
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="grey" />
              }
              onPress={() => this.setState({ notRobot: !notRobot })}
              title={<AppText style={styles.checkText}>I'm not a robot</AppText>}
            />
            <Divider style={{ marginBottom: '3%' }} />
            {/* Consent to Agreement and Create Account Section */}
            <AppText style={styles.sectionText}>
              By clicking the button below you are indicating that you have read the informed consent statement above and
              agree to participate.
            </AppText>
            <Button
              buttonStyle={{ backgroundColor: '#48AADF' }}
              containerStyle={{
                paddingTop: '5%',
                width: '100%',
                height: '100%',
                alignSelf: 'center',
              }}
              onPress={async () => {
                const response = await this.validateAndRegister();
                if (response === 'success') {
                  // Navigate
                }
                Alert.alert(
                  'Create Account Failed!',
                  response,
                  [
                    {
                      text: 'Ok',
                    },
                  ],
                  { cancelable: false },
                );
              }}
              title={<AppText>Give Consent and Create Account</AppText>}
            />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#48AADF',
    alignSelf: 'center',
  },
  scrollContainer: {
    flexDirection: 'column',
    marginBottom: '5%',
  },
  screenHeader: {
    fontSize: 30,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '10%',
  },
  sectionText: {
    marginTop: '5%',
    fontSize: 20,
  },
  bodyBullet: {
    fontSize: 18,
    marginLeft: '5%',
    marginBottom: '2.5%',
    marginRight: '2%',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  button: {
    marginHorizontal: '2%',
    marginBottom: '30%',
  },
  checkbox: {
    backgroundColor: 'white',
    borderColor: 'transparent',
    margin: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: '10%',
    marginVertical: 10,
    flex: 1,
  },
  checkText: {
    marginLeft: '5%',
    fontSize: 18,
    marginBottom: '2%',
  },
  errorText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: '#b04558',
    paddingVertical: '5%',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});
