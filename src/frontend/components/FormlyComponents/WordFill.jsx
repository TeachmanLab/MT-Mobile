/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-es6-class */
import React from 'react';
import createReactClass from 'create-react-class';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import imageDict from '../Json/imageDict';
import AppText from '../AppText.jsx';

const WordFill = createReactClass({
  getInitialState() {
    const { config } = this.props;
    const to = config.templateOptions; // template options from json
    const { phrase, lettersToRemove: let2Remove } = to;
    const lettersToRemove = let2Remove || 1;

    // removes a certain number of letters and returns an array with two arrays
    const removeRanLetters = this.removeRandomLetters(phrase.toUpperCase(), lettersToRemove);
    // array of phrase with add [ ] for the missing letters
    const displayArray = removeRanLetters[0];
    // array of the letters removed
    const ranLetters = this.showLetterOptions(removeRanLetters[1]);
    // each button has its type/disabled status stored in buttons
    // config.templateOptions.options.forEach((element) => {
    //   buttons[element] = {
    //     type: 'solid',
    //     disabled: false,
    //   };
    // });

    return {
      // buttonStyles: buttons, // object that maps a letter to its buttons tyles
      // phrase: config.templateOptions.phrase, // unfilled phrase from form json
      // incorrect: false, // user answered incorrectly
      wasPressed: false, // has user selected an answer
      correct: false, // did user select correct answer
      optionSelected: '', // the option that the user clicked
      buttonsClicked: {},
      displayArray,
      selectLetters: ranLetters,
      removedLetters: removeRanLetters[1],
    };
  },
  componentDidUpdate() {
    // console.log(this.state);
  },
  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   * @param  {Array} array The array to shuffle
   * @return {String}      The first item in the shuffled array
   */
  shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  },

  // this is the function to remove N number of random letters
  // returns an array containing the original string split by letter or space
  //    followed by array of removed letters
  // ie. given 'animal',2 returns [['a','[ ]','[ ]','m','a','l'], ['n','i']]
  // @author - Dan Funk for core logic (used with permission)
  removeRandomLetters(str, amount) {
    if (str == null) return ['', ''];
    let letters = [];
    let pos = 0;
    let tries = 0;
    // select a value that is a word character, not a space or punctuation
    // And don't select the first letter in the phase, And Don't try to look forever.
    while (letters == '') {
      tries++;
      // Pick a random position in the string, greater than 0
      pos = Math.floor(Math.random() * (str.length - 1)) + 1;
      if (pos == 0) continue;
      // Assure that the position begins at a series of characters long
      // enough to support the total number of letters to remove.
      const testLetters = str.substring(pos, pos + amount);
      const re = new RegExp(`^\\w{${amount}}$`);
      if (re.test(testLetters)) {
        letters = testLetters;
      }
      // Reduce the number of letters examined if we can't find a long enough string.
      if (tries > str.length * 10) {
        amount--;
        tries = 0;
      }
      if (amount == 0) break;
    }
    const frontArray = str.substring(0, pos).split('');
    const bracketArray = Array(amount).fill('[ ]');
    const backArray = str.substring(pos + amount).split('');
    return [frontArray.concat(bracketArray, backArray), letters.split('')];
    // return [str.substring(0, pos) + Array(amount + 1).join('[ ]') + str.substring(pos + amount), letters.split('')];
  },
  // will return an array of length 4 containing the removedletters
  // plus (4-removedletters.length) random letters
  showLetterOptions(removedLetters) {
    // the possible letters to choose from
    const possible = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    const exAns = removedLetters.concat(Array(4 - removedLetters.length).fill(null));
    // var exAns = [answer, answer, answer];
    let i = removedLetters.length;
    while (exAns.indexOf(null) >= 0) {
      t = possible.charAt(Math.floor(Math.random() * possible.length));
      if (exAns.indexOf(t) < 0) {
        exAns[i] = t;
        i += 1;
      }
    }
    return this.shuffle(exAns);
  },

  render() {
    const { config, model, onChange } = this.props; // destruct props
    const {
      wasPressed,
      correct,
      buttonsClicked,
      displayArray,
      selectLetters,
      removedLetters,
      optionSelected,
    } = this.state; // destruct props
    const to = config.templateOptions; // template options from json
    const choiceIcon = correct ? require('../../assets/rightIcon.png') : require('../../assets/wrongIcon.png');
    const { imgUrl, scenarioTitle, scenarioKey, paragraph } = to;
    const displayButtons = displayArray.map((option, i) => {
      const isMissing = option == '[ ]';
      option = isMissing ? optionSelected : option;
      return (
        // <View key={i} style={{ width: '13%', height: '90%', justifyContent: 'center', backgroundColor: 'blue' }}>
        <Button
          // buttonStyles={{ color: buttonStyles[option].color }}
          buttonStyle={
            isMissing
              ? {
                borderColor: 'black',
                borderWidth: 0.25,
                height: '100%',
                backgroundColor:
                    (!wasPressed && 'rgba(218,218,218,.3)')
                    || (wasPressed && correct && 'rgba(98,167,76,.4)')
                    || '#FF9E80',
                // flexGrow: 1,
              }
              : { height: '100%', backgroundColor: '#B5E7FA' }
          }
          key={i}
          title={option}
          titleStyle={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
          style={styles.choice}
          type="solid"
          // disabled={buttonStyles[option].disabled}
          containerStyle={styles.displayButtonContainerStyle}
        />
        // </View>
      );
    });
    // map each letter option to a rendered button
    const choices = selectLetters.map((option, i) => (
      <Button
        // the onpress should save in the state the letter selected so i can put in display buttons
        // onPress={() => {
        //   if (option !== to.answer) {
        //     // if letter is incorrect
        //     const currStyles = buttonStyles;
        //     currStyles[option].disabled = true; // change button style to disabled
        //     this.setState({ buttonStyles: currStyles }); // set button styles in state
        //   } else {
        //     // if answer is correct
        //     this.setState({ phrase: to.filledWord });
        //     setTimeout(() => {
        //       model.questionIndex += 1; // go to next question after 2 seconds
        //       onChange();
        //     }, 2000);
        //   }
        // }}
        onPress={() => {
          // if the option is in the removedLetters array, means it is correct
          if (removedLetters.includes(option)) {
            this.setState((state) => ({
              wasPressed: true,
              correct: true,
              optionSelected: option,
              buttonsClicked: {
                ...state.buttonsClicked,
                [option]: { disabled: false },
              },
            }));
            setTimeout(async () => {
              await config.nextQuestion({
                key: config.key,
                question: `${to.paragraph} ${to.phrase}`,
                response: removedLetters.toString(),
              });
            }, 2000);
          } else {
            this.setState((state) => ({
              wasPressed: true,
              optionSelected: option,
              buttonsClicked: {
                ...state.buttonsClicked,
                [option]: { disabled: true },
              },
            }));
          }
        }}
        // buttonStyles={{ color: buttonStyles[option].color }}
        buttonStyle={{ height: '100%', backgroundColor: '#B5E7FA' }}
        key={i}
        title={option}
        titleStyle={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
        style={styles.choice}
        type="solid"
        // disabled={buttonStyles[option].disabled}
        disabled={(buttonsClicked[option] && buttonsClicked[option].disabled) || (wasPressed && correct)}
        disabledStyle={
          buttonsClicked[option] && buttonsClicked[option].disabled
            ? { backgroundColor: '#FF9E80' }
            : { backgroundColor: '#B5E7FA' }
        }
        disabledTitleStyle={{ color: 'black', opacity: 0.25 }}
        containerStyle={{ justifyContent: 'center', width: '15%', height: '53%' }}
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
          {/* CIRCLE AND SCENARIO TITLE */}
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
                }}
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
              <AppText
                style={{
                  fontWeight: 'bold',
                  fontSize: 22,
                  color: '#4095C3',
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
          {/* PARAGRAPH */}
          <View style={{ flex: 7, justifyContent: 'center' }}>
            <Card containerStyle={{ backgroundColor: '#F0ECEC', justifyContent: 'center' }} borderRadius={5}>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <AppText style={{ fontSize: 21, textAlign: 'left' }}>{paragraph}</AppText>
              </ScrollView>
            </Card>
          </View>
          {/* DISPLAYS WORDFILL AND OPTIONS TILES */}
          <View style={{ flex: 4 }}>
            {/* if user has not responded yet, incorrect and correct should both be false */}
            {/* {!incorrect && !correct ? <View style={styles.choices}>{choices}</View> : this.renderReply()} */}
            {/* style={toggleVertical ? { ...styles.choices, flex: 3 } : styles.choices} */}
            {/* DISPLAYED BUTTONS WITH THE GAP */}
            <View
              style={{
                flex: 1,
                // backgroundColor: 'orange',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              {/* Buttons are rendered here */}
              {displayButtons}

            </View>
            {/* OPTION BUTTIONS AND SELECT TILES */}
            <View
              style={{
                flex: 2,
                // flexDirection: 'row',
                // justifyContent: 'center',
                // alignItems: 'center',
              }}
            >
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <AppText style={{ textAlign: 'center', fontSize: 20 }}>SELECT A TILE:</AppText>
              </View>

              {/* TILES BUTTONS ARE RENDERED HERE */}
              <View style={{ flex: 2, flexDirection: 'row' }}>
                <View
                  style={{
                    flex: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                >
                  {choices}
                </View>
                {/* CHECK/WRONG ICON RENDERED HERE */}
                {wasPressed
                && (
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      source={choiceIcon}
                      style={styles.iconStyle}
                      resizeMode="contain"
                    />
                  </View>
                )}
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  },
});

module.exports = WordFill;

const styles = StyleSheet.create({
  container: {
    // flex: 19,
    // // backgroundColor: '#f6f5ea',
    // backgroundColor: '#E5E7ED',
    // alignItems: 'center',
    // paddingTop: '20%',
    flex: 1,
    // backgroundColor: '#f6f5ea',
    backgroundColor: '#E5E7ED',
    alignItems: 'center',
    // justifyContent: 'space-around',
    // paddingTop: '20%',
  },
  // buttonContainer: {
  //   width: '93%',
  //   justifyContent: 'center',
  // },
  choices: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  choice: {
    paddingHorizontal: '5%',
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
  }, // mine below here
  buttonContainer: {
    width: '93%',
    // justifyContent: 'center',
    flex: 1,
    marginBottom: '8%',
  },
  iconStyle: {
    width: '100%',
    // flex: 1,
    // height: '100%',
  },
  displayButtonContainerStyle: {
    justifyContent: 'center',
    // backgroundColor: 'red',
    width: '13%',
    height: '70%',
  },
});
