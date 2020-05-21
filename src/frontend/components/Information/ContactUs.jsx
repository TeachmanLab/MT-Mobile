import React from 'react';
import { Card, Divider, Icon, Header, Button } from 'react-native-elements';
import { StyleSheet, ScrollView, View, Linking, Alert } from 'react-native';
import AppText from '../AppText.jsx';

export default function About(props) {
  const { navigation } = props;
  async function openURL() {
    try {
      await Linking.openURL('mailto:studyteam@mindtrails.org');
    } catch (error) {
      // console.log(error);
      Alert.alert("Couldn't Open Mail App", 'Unfortunately, we were unable to open your mail client');
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#E5E7ED' }}>
      <Header
        alignSelf="center"
        centerComponent={{ text: 'MindTrails', style: { fontSize: 24, color: '#fff' } }}
        rightComponent={
          <Icon onPress={() => navigation.toggleDrawer()} size={40} name="navicon" type="evilicon" color="white" />
        }
      />
      <ScrollView style={styles.scrollContainer}>
        <Card
          title={<AppText style={styles.title}>Contact Us</AppText>}
          borderRadius={5}
        >
          <Divider style={{ marginBottom: '3%' }} />
          <Button
            containerStyle={{
              width: '100%',
              alignSelf: 'center',
            }}
            buttonStyle={{ backgroundColor: '#48AADF' }}
            onPress={openURL}
            title="studyteam@mindtrails.org"
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#48AADF',
    alignSelf: 'center',
  },
});
