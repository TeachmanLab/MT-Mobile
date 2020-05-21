import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Text style={[styles.title]}>The Science of MindTrails</Text>
        <Text style={[styles.body]}>
          The program you’re completing is a type of intervention called
          <Text style={{ fontWeight: 'bold' }}> cognitive bias modification</Text> (CBM), and it is designed to help you
          change how you think in response to situations that make you feel anxious or upset.
        </Text>
        <Text style={[styles.header]}>What Is the MindTrails Project?</Text>
        <Text style={[styles.body]}>
          Cognitive biases are tendencies to pay attention to, remember, and interpret things differently when
          processing information tied to your emotional responses. For example, sometimes it can be difficult to tell
          whether something that happens is good or bad. Our tendency to interpret these ambiguous events as positive or
          negative can happen very rapidly and even without our being aware of our interpretation, so it can be
          difficult to catch these thinking habits — even though a tendency to routinely interpret things in negative
          ways can make us feel more anxious or sad. That’s where CBM might help.
        </Text>
        <Text style={[styles.body]}>
          Several research studies have shown that CBM is effective at changing interpretations in people with clinical
          levels of anxiety. Further, many studies have found that CBM leads to decreases in anxiety symptoms and/or
          anxious reactions to potentially stressful situations, compared to control conditions (a condition that may
          look like the active training but is not expected to work as well).
        </Text>
        <Text style={[styles.header]}>The Need for Research</Text>
        <Text style={[styles.body]}>
          Although there are many examples of CBM programs helping to reduce anxiety, and even helping other problem
          areas like depression, substance use (e.g., alcohol abuse), eating disorders, and anger problems (among
          others), there are also some mixed findings. Not all studies using these approaches get the same results, and
          some studies find decreases in one anxiety measure but not another. Also, more research needs to be done to
          find the optimal number of training sessions, and to figure out how to make CBM as effective if completed
          online as in the clinic or lab. Though there are still open questions, one goal of this site is to work on
          answering these questions in order to refine and improve this promising treatment method.
        </Text>
        <Text style={[styles.header]}>Resources</Text>
        <Text style={[styles.body]}>
          Below are a few resources if you’re interested in learning more about CBM or the research supporting it:
          `&quot;`Behavior change in 15-minute sessions?`&quot;` – American Psychological Association
          `&quot;`Therapist-free therapy`&quot;` – The Economist `&quot;`A meta-analysis of the effect of cognitive bias
          modification on anxiety and depression`&quot;` – Psychological Bulletin `&quot;`Cognitive bias modification
          for anxiety: Current evidence and future directions`&quot;` – Expert Review of Neurotherapeutics `&quot;`Role
          of imagery in assessing and treating emotional disorders`&quot;` – Clinical Psychology Review
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    // backgroundColor: '#E5E7ED',
    backgroundColor: '#E5E7ED',
    flex: 1,
  },
  title: {
    marginTop: '5%',
    marginLeft: '5%',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2DC2E7',
  },
  header: {
    marginTop: '5%',
    marginLeft: '5%',
    fontSize: 19,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 15,
    margin: '5%',
    letterSpacing: 0.7,
  },
});
