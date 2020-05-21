import React from 'react';
import createReactClass from 'create-react-class';
import { View, Text, Image, Slider, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';


const SliderPage = createReactClass({
    // Initial state for slider contains the values for the two questions
    // vivid_value: Value of top slider
    // relate_value: Value of bottom slider
    getInitialState() {
        const { config } = this.props;
        return {
          vivid_value: 0.0,
          relate_value: 0.0
        };
    },

    render() {
      // Castings for this.props and config.templateOptions to make code cleaner
      const { config, model, onChange } = this.props;
      const to = config.templateOptions;
      return (            
        <View style={styles.container}>
          {/* Card outlining the entire panel */}
          <Card
            title={<Text style={styles.formTitle}>Current Focus Area</Text>}
            borderRadius={10}
            containerStyle={{ height: '85%'}}
          >
            <Text style={styles.description}>{to.focusArea}</Text>
            
            {/* Card outlining first slider question */}
            <Card
              title={<Text style={styles.questionTitle}>How vividly have you been imagining these scenarios?</Text>}
              borderRadius={10}
              containerStyle={styles.innerContainer}
            >
              <Image
                source={require('../../assets/feelings.png')}
                style={styles.image}
              ></Image>

              {/* When the slider changes value, the respective state value is updated */}
              <Slider
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={this.state.vivid_value}
                onValueChange={(vivid_value) => this.setState({vivid_value})} 
              />
            </Card>

            <Text>            </Text>
            <Text>            </Text>

            {/* Card outlining second slider question */}
            <Card
              title={<Text style={styles.questionTitle}>How well do these stories relate to you?</Text>}
              borderRadius={10}
              containerStyle={styles.innerContainer}
            >
              <Image
                source={require('../../assets/feelings.png')}
                style={styles.image}
              ></Image>

              {/* When the slider changes value,  the respective state value is updated */}
              <Slider
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={this.state.relate_value}
                onValueChange={(relate_value) => this.setState({relate_value})} 
              />
            </Card>
          </Card>

          {/* Button pushes state values to the model, submitting the answers and moving to the next question */}
          <Button
            style={{ alignSelf: 'center', paddingTop: '1%', paddingBottom: '1%', width: '92%' }}
            onPress={ () => {
              model.questionIndex += 1;
              model.responses.push({
                vivid_value: this.state.vivid_value,
                relate_value: this.state.relate_value,
              });
              onChange();
            } }
            title="Next" 
          ></Button>
        </View>
      );
    }
});

module.exports = SliderPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f5ea',
    },
    innerContainer: {
      height: '35%',
      backgroundColor: '#e5e7ed',
    },
    fillContainer: {
      width: '90%',
      backgroundColor: '#f6f5ea',
      alignItems: 'center',
    },
    formTitle: {
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center',
      paddingHorizontal: '1%',
      paddingVertical: '3%',
    },
    questionTitle: {
      fontSize: 18,
      textAlign: 'center',
      paddingHorizontal: '1%',
      paddingVertical: '3%',
    },
    description: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    image: {
      height: '30%',
      width: '100%',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: 'black',
      alignSelf: 'center',
      paddingVertical: '10%',
    }
  });
  