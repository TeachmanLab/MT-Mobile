/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-es6-class */
import React from 'react';
import createReactClass from 'create-react-class';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Card, Rating, AirbnbRating } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { ScrollView } from 'react-native-gesture-handler';
import imageDict from '../Json/imageDict';
import AppText from '../AppText.jsx';

const yesNo = createReactClass({
  getInitialState() {
    const initState = {
      incorrect: false, // user answered incorrectly
      correct: false, // user answered correctly
      progressIndex: 0, // indicator for progress bar when user gets answer wrong
      completed: false,
      model: {}, // currently used to store star answers
    };
    return initState;
  },

  // Displays red or green message to user depending on their answer
  handleAnswer(pressedAnswer) {
    const { config } = this.props;
    const to = config.templateOptions;
    if (to.answer === pressedAnswer) {
      // if answer is correct
      this.setState({ correct: true });
      setTimeout(() => {
        // this.onComplete();
        this.setState({ completed: true });
      }, 1500);
    } else {
      // if it is not correct
      this.setState({ incorrect: true });
      const timerId = setInterval(() => {
        this.setState((state) => ({
          progressIndex: state.progressIndex + 1,
        }));
      }, 1);
      setTimeout(() => {
        clearInterval(timerId);
        this.setState({ incorrect: false, progressIndex: 0 }); // reset incorrect in state so red message disappears
      }, 6100);
    }
  },

  onComplete() {
    const { model, onChange } = this.props;
    model.questionIndex += 1;
    onChange();
    console.log(`Moving to question ${model.questionIndex}`);
  },
  componentDidUpdate() {
    // console.log(this.state);
  },
  // renders proper red or green message depending on correctness of user response
  renderReply() {
    const { incorrect } = this.state;
    return incorrect ? (
      <AppText style={{ fontSize: 15, textAlign: 'center' }}>
        Whoops! That doesn’t look right. Please wait a moment and try again.
      </AppText>
    ) : (
      <AppText style={{ fontSize: 15, color: 'green', textAlign: 'center', marginBottom: '4%' }}>Great job!</AppText>
    );
  },

  disabledStyleHelper(option, correctAnswer) {
    // can clean up logic later
    const { incorrect, correct } = this.state; // destruct state
    if (correct && option == correctAnswer) {
      return { backgroundColor: '#62A74C' };
    }
    if ((incorrect && option == correctAnswer) || (correct && option != correctAnswer)) {
      return { backgroundColor: '#B5E7FA' };
    }
    return { backgroundColor: '#FAB9B5' };
  },
  render() {
    const { config } = this.props; // destruct props
    const { incorrect, correct, completed } = this.state; // destruct state
    const to = config.templateOptions; // template options from json
    const { imgUrl, scenarioTitle, scenarioKey, showStars, toggleVertical } = to; // image URL for corner circle
    const wasPressed = incorrect || correct;
    const correctAnswer = to.answer.toLowerCase();
    const choices = to.options.map((option, i) => (
      <Button
        key={i}
        onPress={() => this.handleAnswer(option)}
        buttonStyle={styles.choiceButtonStyle}
        title={<AppText>{option}</AppText>}
        titleStyle={{ color: 'black', fontSize: 19 }}
        containerStyle={
          toggleVertical
            ? { height: '40%', width: '65%', marginRight: '12%' }
            : { height: '45%', width: '30%', marginRight: '11%' }
        }
        disabled={wasPressed}
        disabledStyle={this.disabledStyleHelper(option.toLowerCase(), correctAnswer)}
        disabledTitleStyle={{ color: 'black', opacity: 0.3 }}
      />
    ));

    return (
      <View style={styles.container}>
        <Card
          // title={<AppText style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30, marginBottom: '5%' , color: "#4095C3"}}>{to.title}</AppText>}
          containerStyle={styles.buttonContainer}
          borderRadius={5}
          wrapperStyle={{ flex: 1 }}
        >
          {/* CIRCLE IMAGE AND TITLE RENDERED HERE */}
          <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  borderRadius: 28,
                  borderWidth: 6,
                  borderColor: '#B5E7FA',
                  height: '100%',
                  width: '100%',
                  aspectRatio: 1, // helps keep
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
              }}
            >
              <AppText
                style={{
                  fontWeight: 'bold',
                  fontSize: 22,
                  color: '#4095C3',
                  textAlign: 'center',
                }}
              >
                {scenarioTitle}
              </AppText>
            </View>
            {scenarioTitle.length <= 15 && (
              //  an empty view with flex:1 to help center the title more
              <View style={{ flex: 1 }} />
            )}
          </View>
          {/* DESCRIPTION RENDERED HERE */}
          <View style={{ flex: 4, justifyContent: 'flex-end', paddingBottom: '8%' }}>
            <Card containerStyle={{ backgroundColor: '#F0ECEC' }} borderRadius={5}>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <AppText style={{ fontSize: 20, paddingVertical: '5%', textAlign: 'left' }}>{to.question}</AppText>
              </ScrollView>
            </Card>
          </View>
          {/* SELECTION & NEXT BUTTONS & STARS RENDERED HERE */}
          <View style={{ flex: 6 }}>
            {/* if user has not responded yet, incorrect and correct should both be false */}
            {/* {!incorrect && !correct ? <View style={styles.choices}>{choices}</View> : this.renderReply()} */}
            {/* style={toggleVertical ? { ...styles.choices, flex: 3 } : styles.choices} */}
            <View style={styles.choices}>
              {/* BUTTONS ARE RENDERED HERE */}
              <View style={toggleVertical ? styles.buttonStyleVertical : styles.buttonStyleHorizontal}>{choices}</View>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                {wasPressed && correct && (
                  <Image source={require('../../assets/rightIcon.png')} style={styles.iconStyle} resizeMode="contain" />
                )}
                {wasPressed && incorrect && (
                  <Image source={require('../../assets/wrongIcon.png')} style={styles.iconStyle} resizeMode="contain" />
                )}
              </View>
            </View>
            <View style={{ flex: 4 }}>
              {/* if it was pressed but incorrect, display the progress bar else show the Great Job and
                  wait for button and stars (if set) to appear
              */}
              {wasPressed && incorrect ? (
                <View style={{ flex: 1, marginBottom: '1%', justifyContent: 'center' }}>
                  <Progress.Bar
                    // style={{}}
                    progress={this.state.progressIndex / 350}
                    unfilledColor="#979797"
                    borderColor="grey"
                    color="#233367"
                    height={14}
                    // width={screenWidth * 0.93}
                    borderRadius={3}
                    width={null}
                    // animationType={'timing'}
                  />
                  <AppText style={{ fontSize: 15, textAlign: 'center' }}>
                    Whoops! That doesn’t look right. Please wait a moment and try again.
                  </AppText>
                </View>
              ) : (
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 1, justifyContent: 'center' }}>
                    {wasPressed && correct && (
                      // <View style={{ flex: 1 }}>
                      <AppText style={{ fontSize: 15, color: 'green', textAlign: 'center' }}>Great job!</AppText>
                      // </View>
                    )}
                  </View>
                  <View style={{ flex: 6 }}>
                    {completed && (
                      <View style={{ alignItems: 'center', flex: 1 }}>
                        <View style={{ flex: 2 }}>
                          {showStars && (
                            <View style={{ flex: 1 }}>
                              <View style={{ flex: 1, justifyContent: 'center' }}>
                                <AppText style={{ fontSize: 15 }}>How well did this story relate to you?</AppText>
                              </View>
                              <View style={{ flex: 2 }}>
                                <AirbnbRating
                                  // reviews={[]}
                                  showRating={false}
                                  defaultRating={0}
                                  onFinishRating={(rating) => {
                                    this.setState((state) => ({
                                      model: {
                                        ...state.model,
                                        rating,
                                      },
                                    }));
                                  }}
                                />
                              </View>
                            </View>
                          )}
                        </View>
                        <View
                          style={{
                            width: '60%',
                            flex: 1,
                          }}
                        >
                          <Button
                            onPress={async () => {
                              await config.nextQuestion({
                                key: config.key,
                                question: to.question,
                                response: to.answer,
                              });
                            }}
                            buttonStyle={{ backgroundColor: '#48AADF', height: '100%' }}
                            title={<AppText style={{ fontSize: 20, fontWeight: 'bold' }}>Next</AppText>}
                            containerStyle={{}}
                          />
                        </View>
                      </View>
                    )}
                  </View>
                </View>
              )}
            </View>
          </View>
        </Card>
      </View>
    );
  },
});

module.exports = yesNo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f6f5ea',
    backgroundColor: '#E5E7ED',
    alignItems: 'center',
    // justifyContent: 'space-around',
    // paddingTop: '20%',
  },
  buttonContainer: {
    width: '93%',
    // justifyContent: 'center',
    flex: 1,
    marginBottom: '8%',
  },
  // fillContainer: {
  //   width: '90%',
  //   // backgroundColor: '#f6f5ea',
  //   backgroundColor: '#E5E7ED',
  //   alignItems: 'center',
  // },
  choices: {
    flex: 3,
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    // justifyContent: 'flex-end',
  },
  choice: {
    paddingHorizontal: '5%',
    // color: '#B5E7FA',
  },
  question: {
    fontSize: 19,
  },
  answers: {
    fontSize: 18,
  },
  item: {
    flex: 1,
    paddingBottom: 50,
  },
  containItems: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  choiceButtonStyle: {
    backgroundColor: '#B5E7FA',
    height: '100%',
  },
  iconStyle: {
    width: '100%',
  },
  buttonStyleHorizontal: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor: 'pink',
    alignItems: 'center',
  },
  buttonStyleVertical: {
    flex: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    // flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonViewVertical: {
    width: '60%',
    marginLeft: '8.5%',
    flex: 1,
    justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  buttonViewHorizontal: {
    width: '37%',
    marginLeft: '8.5%',
    // flex: 1,
    justifyContent: 'flex-end',
  },
});

{
  /* <View style={{ flex: 1, marginHorizontal: '8%' }}>
                  <Button
                    onPress={() => this.handleAnswer('Yes')}
                    buttonStyle={styles.choiceButtonStyle}
                    title={to.options[0]}
                    titleStyle={{ color: 'black', fontSize: 23 }}
                    containerStyle={{}}
                    // raised={true}
                  />
                </View>
                <View style={{ flex: 1, marginHorizontal: '8%' }}>
                  <Button
                    onPress={() => this.handleAnswer('No')}
                    title={to.options[1]}
                    buttonStyle={styles.choiceButtonStyle}
                    titleStyle={{ color: 'black', fontSize: 23 }}
                    containerStyle={{}}
                    // raised={true}
                  />
                </View> */
}

// <View style={{ flex: 2, justifyContent: 'flex-end' }}>
//   <View style={{ flexDirection: 'row' }}>
//     {wasPressed && incorrect && (
//       <View style={{ flex: 1, marginBottom: '1%' }}>
//         <Progress.Bar
//           // style={{}}
//           progress={this.state.progressIndex / 11}
//           unfilledColor="#979797"
//           borderColor="grey"
//           color="#233367"
//           height={14}
//           // width={screenWidth * 0.93}
//           borderRadius={5}
//           width={null}
//         />
//         <AppText style={{ fontSize: 15, textAlign: 'center' }}>
//           Whoops! That doesn’t look right. Please wait a moment and try again.
//         </AppText>
//       </View>
//     )}
//   </View>
//   {/* {wasPressed && this.renderReply()} */}
// </View>
// <View style={{ flex: 3, justifyContent: 'center' }}>
//   {/* Renders the stars and message */}
//   {completed && (
//     <View style={{ alignItems: 'center', flex: 1 }}>
//       {showStars && (
//         <AppText style={{ fontSize: 15, flex: 1 }}> How well did this story relate to you?</AppText>
//       )}
//       {showStars && (
//         <View style={{ flex: 2 }}>
//           <AirbnbRating
//             // reviews={[]}
//             showRating={false}
//             defaultRating={0}
//             onFinishRating={(rating) => {
//               this.setState((state) => ({
//                 model: {
//                   ...state.model,
//                   rating: rating,
//                 },
//               }));
//             }}
//           />
//         </View>
//       )}
//       <AppText style={{ fontSize: 15, color: 'green', textAlign: 'center', marginBottom: '4%' }}>
//         Great job!
//       </AppText>
//       <View style={{ width: '60%', flex: 3, justifyContent: 'center' }}>
//         <Button
//           onPress={this.onComplete}
//           buttonStyle={{ backgroundColor: '#48AADF', borderRadius: 8 }}
//           title="Next"
//           titleStyle={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
//         />
//       </View>
//     </View>
//   )}
// </View>
