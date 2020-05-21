import React from 'react';
import createReactClass from 'create-react-class';
import Slider from 'react-native-slider';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';

// custom component for having a panel question with sub questions and answers with a slider
const Panel = createReactClass({
  // this method is currently setting the default for this component and the model it was given.
  // may require changing in the future
  getInitialState() {
    const { key } = this.props.config;
    // console.log(this.props)
    const initialMap = {
      key,
    }; // this map is for the panel component to remember that state
    this.props.model[key] = {}; // this is mapping a default for the form so that if they never click a slider, the model represents that
    this.props.config.templateOptions.questions.map((question, i) => {
      // initialMap[i] = -1;
      this.props.model[key][i] = -1;
    });
    // this.props.onChange();
    // return initialMap;
    return {};
  },
  displaySelected(question, i) {
    // const getResponse = this.state[i];
    // if (getResponse) {
    //   return answers[getResponse + 1];
    // } else {
    //   return 'Please select an answer';
    // }
    // return answers[this.state[i] + 1] || answers[0];
    return this.state[question] || 'Please select an answer';
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
  render() {
    const { config } = this.props;
    const { parentTitle, templateOptions: to } = config;
    // const to = (this.props.config || {}).templateOptions || {};
    const { paragraph, title: getTitle } = to;
    const title = getTitle || parentTitle;
    const questions = to.questions || [];
    const diffKey = this.props.config.key;
    const answeredAll = Object.keys(this.state).length === questions.length;
    const items = questions.map((question, i) => (
      <View key={i} style={styles.item}>
        <View
          style={{
            borderWidth: 2,
            borderRadius: 20,
            borderColor: '#5c5c5c',
            backgroundColor: '#ffffff',
            width: '93.5%',
          }}
        >
          <View style={{ paddingHorizontal: '5%' }}>
            <Text style={styles.question}>{question}</Text>
            <Text style={{ fontSize: 15, paddingTop: '5%', textAlign: 'center' }}>
              {this.displaySelected(question, i)}
            </Text>
            <Slider
              value={0}
              minimumValue={0}
              maximumValue={to.answers.length - 1}
              step={1}
              minimumTrackTintColor="cornflowerblue"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="cornflowerblue"
              onValueChange={(value) => {
                this.setState({ [question]: to.answers[value] });
                this.props.model[diffKey][i] = value;
              }}
            />

            {/* <Text style={{ fontSize: 16, paddingBottom: 15, paddingLeft: 50 * this.state[i] || 0 }}>{this.displaySelected(to.answers, i)}</Text> */}
          </View>
        </View>
      </View>
    ));
    // console.log(this.props)
    return (
      // <View style={{ flex: 1, paddingTop: '5%' }}>
      //   {/* <Text style={{ color: "red" }}>hello</Text> */}
      //   {paragraph && (
      //     <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20, paddingBottom: 15 }}>{paragraph}</Text>
      //   )}
      //   {items}
      // </View>

      <View style={styles.container}>
        <Card
          // title={<Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30, marginBottom: '5%' , color: "#4095C3"}}>{to.title}</Text>}
          containerStyle={styles.buttonContainer}
          borderRadius={10}
          wrapperStyle={{ flex: 1 }}
        >
          {/* TITLE RENDERED HERE */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: '#4095C3',
                textAlign: 'center',
                // marginTop: '1.5%',
                // marginLeft: '11%',
              }}
            >
              {title}
            </Text>
          </View>
          {/* DESCRIPTION RENDERED HERE */}
          <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Card containerStyle={{ backgroundColor: '#F0ECEC' }} borderRadius={15}>
              <Text style={{ fontSize: 18, paddingVertical: '5%', textAlign: 'left' }}>{paragraph}</Text>
            </Card>
          </View>
          {/* SLIDERS & NEXT BUTTON RENDERED HERE */}
          <View style={{ flex: 6, marginTop: '4%' }}>
            <ScrollView
              style={{ marginHorizontal: '2%' }}
              // contentContainerStyle={{ backgroundColor: 'orange', flexShrink: 1, flex: 1 }}}
            >
              {items}
            </ScrollView>
          </View>
        </Card>
        {/* NEXT BUTTON RENDERED HERE */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'red',
            // marginBottom: '8%',
          }}
        >
          <Button
            onPress={this.onComplete}
            buttonStyle={{ backgroundColor: '#48AADF', borderRadius: 8 }}
            title={!answeredAll ? 'Please answer all questions' : 'Next'}
            titleStyle={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
            containerStyle={{
              // width: '50%', height: '90%'
              flex: 1,
              paddingHorizontal: 15,
              width: '100%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            disabled={!answeredAll}
            disabledStyle={{ backgroundColor: '#d6d6d6' }}
          />
        </View>
      </View>
    );
  },
});

module.exports = Panel;

// styles for this customer component
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // // flexDirection: 'column',
    // // alignItems: 'center',
    // // justifyContent: 'center',
    // // marginBottom: '30%',
    // // backgroundColor: '#f6f5ea',
    // backgroundColor: '#E5E7ED',
    flex: 1,
    backgroundColor: '#E5E7ED',
    alignItems: 'center',
  },
  question: {
    paddingTop: '5%',
    fontSize: 14,
  },
  answers: {
    fontSize: 18,
  },
  item: {
    // flex: 1,
    paddingBottom: '5%',
    // backgroundColor: 'blue',
    alignItems: 'center',
    // width: '95%',
  },
  containItems: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  buttonContainer: {
    width: '93%',
    // justifyContent: 'center',
    flex: 9,
    // marginBottom: '8%',
  },
});

// tapSliderHandler = (evt) => { this.refs.slider.measure((fx, fy, width, height, px, py) => { this.setState({value: (evt.nativeEvent.locationX - px) / width}); })); }
// <View ref="slider"> <TouchableWithoutFeedback onPressIn={this.tapSliderHandler}> <Slider value={this.state.value}/> </TouchableWithoutFeedback> </View>
