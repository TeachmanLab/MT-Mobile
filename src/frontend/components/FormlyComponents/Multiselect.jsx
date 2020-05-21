/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-es6-class */
import React from 'react';
import createReactClass from 'create-react-class';
import { View, StyleSheet } from 'react-native';
import { Button, Card, CheckBox, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ModalSelector from 'react-native-modal-selector';
import KeyboardShift from '../KeyboardShift';
import AppText from '../AppText.jsx';

const Multiselect = createReactClass({
  /**
   * Creates Initial state for this component
   * answersLocked - can tell if an option has locked the answers
   * triggerAns - responses to the trigger question
   * errorInputMessages - stores error messages for requireInputField options that displays 'required field'
   *      if they submit without answering
   * @param none
   */
  getInitialState() {
    const initState = {
      answersLocked: false,
      model: {},
      triggerAns: {},
      errorInputMessages: {},
    };
    this.refsArray = [];
    return initState;
  },
  componentDidUpdate() {
    // If you ever want to see what the state actually is, console.log it here
    // because this is called after the state has actually updated
    // this is due to setstate being more of a request than an immediate action
    // so react may batch them or something
    // basically async
    // console.log(this.state);
  },

  /**
   * Takes in the state and an option(answer for question)
   * Helper function to delete answers from the model or set option checkbox state to true
   *
   * @param state
   * @param option
   *
   * @return state.model after deleting or setting checkbox state for this option to true
   */
  toggleOrDeleteAnswer(state, option) {
    const tempModel = state.model;
    if (tempModel[option.label]) {
      delete tempModel[option.label];
    } else if (!option.requireTextInput) {
      tempModel[option.label] = true;
    }
    return tempModel;
  },
  /**
   * Takes in an option(answer for question) and the index of that option (i) in the mapping done in render
   * Controls logic to toggle checkbox states in state.model and to focus the keyboard if the option requiresTextInput
   *
   * @param option
   * @param {int} i
   */
  checkBoxPressed(option, i) {
    const { lockerLabel, answersLocked, model } = this.state;
    // if this answer can lock question and (no locker is set or it is the locker run this)
    if (option.lockAnswers && (!lockerLabel || option.label === lockerLabel)) {
      // if selecting option and requiresTextInput
      if (!lockerLabel && option.requireTextInput) {
        // workaround for this react native issue: https://github.com/facebook/react-native/issues/19366
        setTimeout(() => {
          this.refsArray[i].requireInputRef.focus();
        }, 150);
      }
      this.setState((state) => ({
        answersLocked: !state.answersLocked, // check if answers have been locked
        lockerLabel: !state.answersLocked ? [option][0].label : null, // question that locked the other questions
        model: this.toggleOrDeleteAnswer(state, option), // set the lockerLable in our model or delete it
      }));
    } else if (!answersLocked) {
      // else if answers are not locked, save them.
      // in an effort to keep the model object in state as clean as possible, meaning only answers and no control logic
      // if a choice requires input, its boolean state value, used for checkbox, will be saved outside the model in the state
      if (option.requireTextInput) {
        if (!model[option.label]) {
          // workaround for this react native issue: https://github.com/facebook/react-native/issues/19366
          setTimeout(() => {
            this.refsArray[i].requireInputRef.focus();
          }, 150);
        }
        this.setState((state) => ({
          [option.label]: !state[option.label], // saving checkbox boolean outside model
          model: this.toggleOrDeleteAnswer(state, option), // called to delete the answer from the model if unselected
        }));
      } else {
        // just a regular checkbox with no extra options
        this.setState((state) => ({
          model: this.toggleOrDeleteAnswer(state, option), // set the option to true in the state.model or delete if unselected
        }));
      }
    }
    // else do nothing
  },
  /**
   * Takes in an option(answer for question) and checks if the checkbox should be selected or not
   * helper method used for CheckBox component
   *
   * @param option
   *
   */
  checkHelper(option) {
    const { answersLocked, lockerLabel, model } = this.state;
    if (answersLocked) {
      return option.label === lockerLabel;
    }
    if (option.requireTextInput) {
      // eslint-disable-next-line react/destructuring-assignment
      return this.state[option.label];
    }
    return model[option.label];
  },
  /**
   * Takes in an option(answer for question) and returns color disabled or enabled for checkbox circle
   * helper method used in checkbox for conditional rendering
   * @param option
   *
   */
  uncheckedIconHelper(option) {
    const { answersLocked, lockerLabel } = this.state;
    if (answersLocked && option.label !== lockerLabel) {
      return <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="#dfe9fb" />;
    }
    return <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="#48AADF" />;
  },
  /**
   * Takes in an option(answer for question) and lowers the opacity of the card for this option
   * if the answers are locked and this option is not the one locking it.
   * Helper function to lower opacity of Card components to appear disabled
   * @param option
   *
   */
  uncheckedCardHelper(option) {
    const { answersLocked, lockerLabel } = this.state;
    if (answersLocked && option.label !== lockerLabel) {
      return { ...styles.choiceCardContainer, opacity: 0.5 };
    }
    return styles.choiceCardContainer;
  },
  /**
   * Takes in an option(answer for question) and index in the mapping in render of this option
   * Passed to CheckBox Title to display label and option or textinput if required
   *
   * @param option
   * @param {int} i
   */
  formatChoiceTitle(option, i) {
    const { lockerLabel, model, errorInputMessages, triggerAns } = this.state;
    if (option.requireTextInput) {
      // Logic Explained: so if the requiredInput is set then the boolean is saved in the state but if
      // requiredInput and lockAnswers is set then we need to check lockerlabel as well
      // eslint-disable-next-line react/destructuring-assignment
      const isSelected = this.state[option.label] || lockerLabel === option.label;
      return (
        <View style={styles.inputStyle}>
          {!isSelected ? <AppText style={styles.choiceTitle}>{option.label}</AppText> : null}
          {!isSelected && option.description ? <AppText style={styles.descriptionStyle}>{option.description}</AppText> : null}
          {/* This component is always rendered but hidden if the option has not been selected yet.
           * Reasoning: I need the Ref for this Input component so that I can focus (open keyboard) automatic when
           * the user selectes the option. Refs are only made for components that have been rendered
           */}
          <Input
            placeholder={option.label}
            value={model[option.label]}
            onChangeText={(userInput) => this.setState((state) => ({
              model: { ...state.model, [option.label]: userInput },
            }))}
            containerStyle={
              isSelected ? { paddingHorizontal: 0, width: '85%' } : { display: 'none', height: 0, overflow: 'hidden' }
            }
            inputStyle={{ fontFamily: 'source-sans-pro', fontSize: 15 }}
            ref={(ref) => {
              this.refsArray[i] = {
                ...this.refsArray[i],
                requireInputRef: ref,
              };
            }}
            onSubmitEditing={() => {
              if (!model[option.label]) {
                this.setState((state) => ({
                  errorInputMessages: {
                    ...state.errorInputMessages,
                    [option.label]: 'required field',
                  },
                }));
              } else {
                // removing the error message from the object using an immediately invoked function
                this.setState((state) => ({
                  errorInputMessages: ((errorState) => {
                    const tempErrorInputMessages = errorState;
                    delete tempErrorInputMessages[option.label];
                    return tempErrorInputMessages;
                  })(state.errorInputMessages),
                }));
                if (option.onPressOptions) {
                  this.refsArray[i].onPressOptionsRef.open();
                }
              }
            }}
            errorMessage={errorInputMessages[option.label]}
            blurOnSubmit={!!model[option.label]}
            editable={this.checkHelper(option)}
          />
          {option.onPressOptions && isSelected ? (
            <Button
              title={
                triggerAns[option.label]
                  ? `${option.onPressOptions[0].label} ${triggerAns[option.label]}`
                  : option.onPressOptions[0].label
              }
              type="outline"
              // raised={true}
              onPress={this.refsArray[i].onPressOptionsRef.open}
              containerStyle={styles.triggerButtonContainerStyle}
              titleStyle={{ fontFamily: 'source-sans-pro', fontSize: 13 }}
              disabled={!this.checkHelper(option)}
            />
          ) : null}
        </View>
      );
    }

    return (
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'column',
          marginRight: 10,
          marginLeft: 10,
          flex: 1,
        }}
      >
        <AppText style={styles.choiceTitle}>{option.label}</AppText>
        {option.description && <AppText style={styles.descriptionStyle}>{option.description}</AppText>}
        {option.onPressOptions && model[option.label] && (
          <Button
            title={
              triggerAns[option.label]
                ? `${option.onPressOptions[0].label} ${triggerAns[option.label]}`
                : option.onPressOptions[0].label
            }
            type="outline"
            onPress={this.refsArray[i].onPressOptionsRef.open}
            containerStyle={styles.triggerButtonContainerStyle}
            titleStyle={{ fontFamily: 'source-sans-pro', fontSize: 13 }}
            disabled={!this.checkHelper(option)}
          />
        )}
      </View>
    );
  },
  /**
   * Takes in an option(answer for question) and checks input to ensure correct types were passed in
   *
   * @param option
   *
   */
  checkOptionParams(option) {
    const { requireTextInput, lockAnswers, onPressOptions } = option;
    if (requireTextInput && typeof requireTextInput !== 'boolean') {
      throw new Error('requireTextInput must be of type boolean');
    }
    if (lockAnswers && typeof lockAnswers !== 'boolean') {
      throw new Error('lockAnswers must be of type boolean');
    }
    if (onPressOptions && !Array.isArray(onPressOptions)) {
      throw new Error('onPressOptions must be of type Array');
    }
  },
  /**
   * Renders one multiselect question and all its logic
   *
   * @param none
   *
   */
  render() {
    // console.log(this.props);
    const { config } = this.props || {};
    const { templateOptions: to } = config || {};
    // const to = this.props.config.templateOptions || {};
    const { options } = to || [];
    if (options === undefined || options.length === 0) {
      throw new Error('Options array is undefined or empty');
    }
    const { model, answersLocked } = this.state;
    // maps the choices to the JSX elements
    const choices = options.map((option, i) => {
      this.checkOptionParams(option);
      const cardCheckBox = (
        <Card key={i} containerStyle={this.uncheckedCardHelper([option][0])} borderRadius={5}>
          <CheckBox
            key={i}
            // conditional rendering on checkedIcon to make it look grayed out
            checkedIcon={
              <MaterialCommunityIcons name="circle" size={24} color="#48AADF" />
            }
            uncheckedIcon={this.uncheckedIconHelper([option][0])}
            containerStyle={styles.checkBox}
            checked={this.checkHelper([option][0])}
            onPress={() => {
              this.checkBoxPressed([option][0], i);
            }}
            title={this.formatChoiceTitle(option, i)}
            titleStyle={{ flex: 1 }}
          />
        </Card>
      );
      if (option.onPressOptions) {
        // the component is a custom way to display the option label and the section title
        if ('section' in option.onPressOptions[0]) {
          let section = option.label;
          if (option.requireTextInput && model[option.label]) {
            section = model[option.label];
          }
          const modalTitleComponent = (
            <View>
              <AppText
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: '4%',
                  fontSize: 16,
                }}
              >
                {section}
              </AppText>
              <AppText style={{ textAlign: 'center', fontSize: 15 }}>{option.onPressOptions[0].label}</AppText>
            </View>
          );
          // eslint-disable-next-line no-param-reassign
          option.onPressOptions[0] = {
            ...option.onPressOptions[0],
            component: modalTitleComponent,
          };
        }
        return (
          <ModalSelector
            data={option.onPressOptions}
            animationType="fade"
            initValue={option.onPressOptions[0].label}
            ref={(ref) => {
              this.refsArray[i] = {
                ...this.refsArray[i],
                onPressOptionsRef: ref,
              };
            }}
            keyExtractor={(data) => data.value}
            cancelContainerStyle={{
              display: 'none',
              height: 0,
              overflow: 'hidden',
            }}
            style={{ flex: 1 }}
            onChange={(selectedAns) => {
              this.setState((prevState) => ({
                triggerAns: {
                  ...prevState.triggerAns,
                  [option.label]: selectedAns.value,
                },
              }));
            }}
            key={i}
            customSelector={cardCheckBox}
            visible={!option.requireTextInput && model[option.label]}
          />
        );
      }

      return cardCheckBox;
    });
    // determines the logic for if the continue button should be enabled
    // by checking if answers are locked or the model is empty in state
    const isDisabled = !(answersLocked || Object.keys(model).length !== 0);

    return (
      <View style={styles.container}>
        <Card
          title={<AppText style={styles.questionText}>{to.question}</AppText>}
          containerStyle={styles.outsideCard}
          borderRadius={5}
        >
          <View style={styles.inCard}>
            <View style={{ flex: 9 }}>
              <ScrollView
                contentContainerStyle={{ paddingBottom: '1%' }}
                keyboardShouldPersistTaps="always"
              >
                <KeyboardShift>{choices}</KeyboardShift>
              </ScrollView>
            </View>
          </View>
        </Card>

        <Button
          containerStyle={styles.continueButtonContainer}
          buttonStyle={{ backgroundColor: '#48AADF' }}
          onPress={async () => {
            // console.log(`Moving to question ${model.questionIndex}`);
            // ------ EXTRACTING USER ANSWER BELOW --------
            const response = [];
            const { lockerLabel, triggerAns } = this.state;
            // if answers are 'locked' just return the choice they picked for locking it
            if (answersLocked) {
              response.push(lockerLabel);
            } // else it will add questions to an array if they dont have a trigger response else create an object and store both
            else {
              for (const [key, value] of Object.entries(model)) {
                const getTriggerAns = triggerAns[key];
                if (getTriggerAns) {
                  response.push({
                    [key]: [value, getTriggerAns],
                  });
                } else if (typeof value !== 'boolean') {
                  response.push({
                    [key]: [value],
                  });
                } else {
                  response.push(key);
                }
              }
            }
            await config.nextQuestion({
              key: config.key,
              question: to.question,
              response,
            });
          }}
          title={isDisabled ? <AppText>Please select at least one answer</AppText> : <AppText>Continue</AppText>}
          disabled={isDisabled}
          disabledStyle={{ backgroundColor: '#d6d6d6' }}
        />
      </View>
    );
  },
});

module.exports = Multiselect;

// styles for this Multiselect component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7ED',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '2%',
  },
  card: {
    paddingTop: '20%',
  },
  questionText: {
    fontSize: 19,
    textAlign: 'left',
    margin: '5%',
  },
  choiceCardContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    padding: 0,
  },
  answerButton: {
    paddingVertical: '2%',
  },
  answerText: {
    fontSize: 24,
    color: 'white',
  },
  checkBox: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    padding: '3%',
  },
  outsideCard: {
    flex: 14,
    padding: 0,
    margin: 15,
    alignSelf: 'center',
  },
  continueButtonContainer: {
    marginVertical: 15,
    paddingHorizontal: 17,
    width: '100%',
    // alignSelf: 'center',

  },
  continueButtonTitleStyle: {
    paddingBottom: '3%',
  },
  lockAnswersStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inCard: {
    flex: 1,
  },
  choiceTitle: {
    color: '#43484d',
    fontWeight: 'bold',
    paddingBottom: '1%',
    paddingRight: '1%',
    fontSize: 16,
  },
  descriptionStyle: {
    fontSize: 12,
    color: '#43484d',
  },
  inputStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  triggerQuestionStyle: {
    width: '80%',
    margin: '1%',
  },
  triggerButtonContainerStyle: {
    marginLeft: 1,
    marginTop: 6,
    width: '84%',
    borderColor: 'transparent',
  },
});
