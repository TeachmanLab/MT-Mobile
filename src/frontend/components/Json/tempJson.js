export const chunk0 = [
  {
    name: 'ShortStories',
    title: 'Why Things Happen',
    description:
      'In this section, 14 situations are presented in which it is not quite clear what is happening. Please rate the extent to which you think each of the three explanations for a situation would be likely to be true if you found yourself in that situation. Use the scale below for your ratings.',
    fields: [
      // {
      //   key: 'elevator',
      //   type: 'wordFill',
      //   templateOptions: {
      //     title: 'Story: The Elevator',
      //     body: 'You are in the lobby of your friend’s new apartment building. You press the button to the elevator to go up. The building looks old. As you get on the elevator you think about its…',
      //     word: 'sa[ ]ety',
      //     filledWord: 'sa[f]ety',
      //     answer: 'f',
      //     options: ['c', 'b', 'k', 'f'],
      //   },
      // },
      //  {
      //    key: 'finalSlider',
      //    type: 'sliderPage',
      //    templateOptions: {
      //      focusArea: 'Medical',
      //    },
      //  },
      {
        key: 'painHip',
        type: 'yesNo',
        templateOptions: {
          // title: 'Story: The Elevator',
          // yesNoBody: 'Did you think about the elevator’s safety?',
          // yesNoAnswer: 'Yes',
          scenarioKey: 1,
          scenarioTitle: 'The Elevator',
          question: 'You think that the pain in your hip is...',
          options: ['Temporary', 'A sign of injury'],
          answer: 'Temporary',
          //  imgUrl: "require('../../assets/scenario1Corner.png')",
          imgUrl: 'small',
          showStars: true,
          toggleVertical: true,
        },
      },
      {
        key: 'image',
        type: 'imagePage',
        templateOptions: {
          scenarioTitle: 'The Blood Test',
          description: 'Tasked in a new job',
          //  imagePath: require('../../assets/placeholder.png'),
          scenarioKey: 1,
          imgUrl: 'small',
          imgScenarioURL: 'large',
        },
      },
      {
        key: 'blood',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          scenarioTitle: 'The Blood Test',
          lettersToRemove: 1,
          paragraph:
            "You are at a routine doctor's appointment.\n\nAt the appointment, the doctor decides to run a few blood tests to check your health.\n\nThe doctor says he will call you in a few weeks, and you will find out your test results at that…",
          phrase: 'failure',
        },
      },
      {
        key: 'bloodYesNo',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'The Blood Test',
          question: 'Did you take blood tests?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
          showStars: true,
        },
      },

      //  {
      //    key: 'image2',
      //    type: 'imagePage',
      //    templateOptions: {
      //      title: 'Image 2 Title',
      //      description: 'Image 2 Description',
      //      imagePath: require('../../assets/placeholder2.png'),
      //    },
      //  },
      //  {
      //    key: 'image3',
      //    type: 'imagePage',
      //    templateOptions: {
      //      title: 'Image 3 Title',
      //      description: 'Image 3 Description',
      //      imagePath: require('../../assets/placeholder3.png'),
      //    },
      //  },

      {
        key: 'professor',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          scenarioTitle: 'The Wedding Reception',
          paragraph:
            'You are new to a class, and your professor gives you an assignment.\n\nYou finish it before the deadline and your professor points out that you made a mistake.\n\nShe probably thinks you are a...',
          phrase: 'failure',
          lettersToRemove: 1,
        },
      },
      //  {
      //    key: 'wedding',
      //    type: 'wordFill',
      //    templateOptions: {
      //      scenarioKey:1,
      //      scenarioTitle: 'Story: The Wedding Reception',
      //      question: 'Your friend asks you to give a speech at her wedding reception. You prepare some remarks and when the time comes, get to your feet. As you speak, you notice some people in the audience start to…',
      //      phrase: 'laugh',
      //      lettersToRemove: 1
      //    },
      //   },

      {
        key: 'elevatorYesNo',
        type: 'yesNo',
        templateOptions: {
          // title: 'Story: The Elevator',
          // yesNoBody: 'Did you think about the elevator’s safety?',
          // yesNoAnswer: 'Yes',
          scenarioKey: 1,
          scenarioTitle: 'Story: The Elevator',
          question: "Did you think about the elevator's safety?",
          options: ['Yes', 'No'],
          answer: 'Yes',
          //  imgUrl: "require('../../assets/scenario1Corner.png')",
          imgUrl: 'small',
          showStars: true,
          toggleVertical: false,
        },
      },
      // {
      //   key: 'weddingYesNo',
      //   type: 'yesNo',
      //   templateOptions: {
      //     title: 'Story: The Wedding Reception',
      //     yesNoBody: 'Does the audience laugh when you speak?',
      //     yesNoAnswer: 'Yes',
      //   },
      // },
      // {
      //   key: 'job',
      //   type: 'wordFill',
      //   templateOptions: {
      //     title: 'Story: The Job',
      //     body: 'You are currently working as a contractor for a company. Once this job is finished, you will be without employment until you can find your next job. You think about not having an income for a few weeks and about your future…',
      //     word: 'finance[ ]',
      //     filledWord: 'finance[s]',
      //     answer: 's',
      //     options: ['k', 'e', 'l', 's'],
      //   },
      // },
      // {
      //   key: 'jobYesNo',
      //   type: 'yesNo',
      //   templateOptions: {
      //     title: 'Story: The Job',
      //     yesNoBody: 'Will you be without an income soon?',
      //     yesNoAnswer: 'Yes',
      //   },
      // },
      // {
      //   key: 'noise',
      //   type: 'wordFill',
      //   templateOptions: {
      //     title: 'Story: The Loud Noise',
      //     body: 'You are woken up in the middle of the night by a loud noise. You are not sure what caused the noise and leave your bedroom to see what happened. You walk…',
      //     word: 'downsta[ ]rs',
      //     filledWord: 'downsta[i]rs',
      //     answer: 'i',
      //     options: ['k', 'e', 'i', 'c'],
      //   },
      // },
      // {
      //   key: 'noiseYesNo',
      //   type: 'yesNo',
      //   templateOptions: {
      //     title: 'Story: The Loud Noise',
      //     yesNoBody: 'Have you been woken up in the middle of the night?',
      //     yesNoAnswer: 'Yes',
      //   },
      // },
      // {
      //   key: 'friend',
      //   type: 'wordFill',
      //   templateOptions: {
      //     title: 'Story: Meeting a Friend',
      //     body: 'In the street you bump into an old friend you haven\'t seen for a long time. She is too busy to stop, so you arrange to meet later in a bar. You arrive a little late but the bar is empty and a few minutes later she is still not…',
      //     word: 'th[ ]re',
      //     filledWord: 'th[e]re',
      //     answer: 'e',
      //     options: ['k', 'e', 'm', 'j'],
      //   },
      // },
      // {
      //   key: 'friendYesNo',
      //   type: 'yesNo',
      //   templateOptions: {
      //     title: 'Story: Meeting a Friend',
      //     yesNoBody: 'Did your friend stop?',
      //     yesNoAnswer: 'No',
      //   },
      // },
      // {
      //   key: 'lunch',
      //   type: 'wordFill',
      //   templateOptions: {
      //     title: 'Story: The Lunch',
      //     body: 'You are eating lunch with a friend. As you start eating your salad, you describe your plans for the weekend. You accidentally drop a piece of lettuce, and your friend looks at…',
      //     word: 'yo[ ]',
      //     filledWord: 'yo[u]',
      //     answer: 'u',
      //     options: ['w', 'z', 'm', 'u'],
      //   },
      // },
      // {
      //   key: 'lunchYesNo',
      //   type: 'yesNo',
      //   templateOptions: {
      //     title: 'Story: The Lunch',
      //     yesNoBody: 'Do you have salad for lunch?',
      //     yesNoAnswer: 'Yes',
      //   },
      // },
      // {
      //   key: 'scrape',
      //   type: 'wordFill',
      //   templateOptions: {
      //     title: 'Story: The Scrape',
      //     body: 'You are playing basketball with some friends. While running toward the ball, you trip and scrape your knee. The scrape hurts a bit, but does not…',
      //     word: 'b[ ]eed',
      //     filledWord: 'b[l]eed',
      //     answer: 'l',
      //     options: ['f', 'w', 's', 'l'],
      //   },
      // },
      // {
      //   key: 'scrapeYesNo',
      //   type: 'yesNo',
      //   templateOptions: {
      //     title: 'Story: The Scrape',
      //     yesNoBody: 'Are you playing soccer with your friend?',
      //     yesNoAnswer: 'No',
      //   },
      // },
      // {
      //   key: 'shopping',
      //   type: 'wordFill',
      //   templateOptions: {
      //     title: 'Story: The Shopping Tree',
      //     body: 'You are at the mall with your friend. While you shop, she tells you how several of her friends have recently come down with a strange illness. You think about your recent health, and wonder if you will get…',
      //     word: 's[ ]ck',
      //     filledWord: 's[i]ck',
      //     answer: 'i',
      //     options: ['i', 'l', 'b', 'r'],
      //   },
      // },
      // {
      //   key: 'shoppingYesNo',
      //   type: 'yesNo',
      //   templateOptions: {
      //     title: 'Story: The Shopping Tree',
      //     yesNoBody: 'Are you shopping alone?',
      //     yesNoAnswer: 'No',
      //   },
      // },
      // {
      //   key: 'blood',
      //   type: 'wordFill',
      //   templateOptions: {
      //     title: 'Story: The Blood Test',
      //     body: 'You are at a routine doctor\'s appointment. At the appointment, the doctor decides to run a few blood tests to check your health. The doctor says he will call you in a few weeks, and you will find out your test results at that…',
      //     word: 'tim[ ]',
      //     filledWord: 'tim[e]',
      //     answer: 'e',
      //     options: ['d', 'e', 'j', 'n'],
      //   },
      // },
      // {
      //   key: 'bloodYesNo',
      //   type: 'yesNo',
      //   templateOptions: {
      //     title: 'Story: The Blood Test',
      //     yesNoBody: 'Did you take blood tests?',
      //     yesNoAnswer: 'Yes',
      //   },
      // },
    ],
  },
  {
    name: 'MentalHealth',
    title: 'Mental Health and Treatment History',
    description:
      'We would like to ask a few questions about your mental health and treatment history. Answers to these personal questions are kept confidential, but they help us improve Calm Thinking by figuring out for whom it works well.',
    fields: [
      {
        key: 'currentlyStruggling',
        type: 'multiselect',
        templateOptions: {
          question:
            'Are you currently struggling with any of the following mental disorders?\nPlease select all that apply.',
          options: [
            {
              label: 'Generalized anxiety disorder (GAD)',
              // 'description': "Examples: psychologist, licensed mental health practitioner (LMHC), school counselor, social worker, marriage and family therapist, group therapist"
              //other things can be like descriptions and conditional rendering
            },
            {
              label: 'Obsessive-compulsive disorder (OCD)',
            },
            {
              label: 'Panic disorder',
            },
            {
              label: 'Agoraphobia',
            },
            {
              label: 'Posttraumatic stress disorder (PTSD)',
            },
            {
              label: 'Social anxiety disorder',
            },
            {
              label: 'Specific phobia(s)',
            },
            {
              label: 'Dementia or other cognitive disorder',
            },
            {
              label: 'Substance use disorder',
            },
            {
              label: 'Schizophrenia or other psychotic disorder',
            },
            {
              label: 'Depression',
            },
            {
              label: 'Bipolar disorder',
            },
            {
              label: 'Eating disorder',
            },
            {
              label: 'Personality disorder',
            },
            {
              label: 'Other (please specify)',
              requireTextInput: true,
            },
            {
              // "label": "I am not struggling with a mental disorder",
              label: 'No mental disorders',
              lockAnswers: true,
            },
            {
              label: 'Prefer not to answer',
              lockAnswers: true,
            },
          ],
          // options: ['Generalized anxiety disorder (GAD)', 'Obsessive-compulsive disorder (OCD)', 'Panic disorder', 'Agoraphobia', 'Posttraumatic stress disorder (PTSD)', 'Social anxiety disorder', 'Specific phobia(s)', 'Dementia or other cognitive disorder', 'Substance use disorder', 'Schizophrenia or other psychotic disorder', 'Depression', 'Bipolar disorder', 'Eating disorder', 'Personality disorder', 'Other (please specify):', ' I am not struggling with a mental disorder', 'Prefer not to answer']
        },
      },
      {
        key: 'receiveHelp',
        type: 'multiselect',
        templateOptions: {
          question:
            'Are you currently receiving help for any of the previously listed disorders? \nPlease select all that apply, or “I am not receiving help”.',
          options: [
            {
              label: 'Therapy (talking with a trained professional)',
              description:
                'Examples: psychologist, licensed mental health practitioner (LMHC), school counselor, social worker, marriage and family therapist, group therapist',
              onPressOptions: [
                //value: is what is saved as the response
                //label: is what is displayed
                // for the first value
                // label is the question to ask at the top,
                //section needs to be the first value in the array. Section is the question to prompt users
                // if section is not first, or it is not set, only answers will be displayed
                { value: 0, section: true, label: 'Has this been helpful?' },
                { value: '1 (Not helpful at all)', label: '1 (Not helpful at all)' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4 (Somewhat helpful)', label: '4 (Somewhat helpful)' },
                { value: '5', label: '5' },
                { value: '6', label: '6' },
                { value: '7 (Extremely helpful)', label: '7 (Extremely helpful)' },
                { value: 'Prefer not to answer', label: 'Prefer not to answer' },
              ],
            },
            {
              label: 'Prescription medications',
              description: 'Examples: Psychiatrist, medical doctor',
              onPressOptions: [
                { value: 0, section: true, label: 'Has this been helpful?' },
                { value: '1 (Not helpful at all)', label: '1 (Not helpful at all)' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4 (Somewhat helpful)', label: '4 (Somewhat helpful)' },
                { value: '5', label: '5' },
                { value: '6', label: '6' },
                { value: '7 (Extremely helpful)', label: '7 (Extremely helpful)' },
                { value: 'Prefer not to answer', label: 'Prefer not to answer' },
              ],
            },
            {
              label: 'Seeking social support (talking with non-professionals)',
              description: 'Examples: Teacher, family member, friend, religious leader, coach',
              onPressOptions: [
                { value: 0, section: true, label: 'Has this been helpful?' },
                { value: '1 (Not helpful at all)', label: '1 (Not helpful at all)' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4 (Somewhat helpful)', label: '4 (Somewhat helpful)' },
                { value: '5', label: '5' },
                { value: '6', label: '6' },
                { value: '7 (Extremely helpful)', label: '7 (Extremely helpful)' },
                { value: 'Prefer not to answer', label: 'Prefer not to answer' },
              ],
            },
            {
              label: 'Self-guided help',
              description:
                'Examples: Self-help book, blogs, online intervention (other than MindTrails), mobile applications',
              onPressOptions: [
                { value: 0, section: true, label: 'Has this been helpful?' },
                { value: '1 (Not helpful at all)', label: '1 (Not helpful at all)' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4 (Somewhat helpful)', label: '4 (Somewhat helpful)' },
                { value: '5', label: '5' },
                { value: '6', label: '6' },
                { value: '7 (Extremely helpful)', label: '7 (Extremely helpful)' },
                { value: 'Prefer not to answer', label: 'Prefer not to answer' },
              ],
            },
            {
              label: 'Over-the-counter medications and/or supplements',
              onPressOptions: [
                { value: 0, section: true, label: 'Has this been helpful?' },
                { value: '1 (Not helpful at all)', label: '1 (Not helpful at all)' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4 (Somewhat helpful)', label: '4 (Somewhat helpful)' },
                { value: '5', label: '5' },
                { value: '6', label: '6' },
                { value: '7 (Extremely helpful)', label: '7 (Extremely helpful)' },
                { value: 'Prefer not to answer', label: 'Prefer not to answer' },
              ],
            },
            {
              label: 'Other (please specify)',
              requireTextInput: true,
              onPressOptions: [
                { value: 0, section: true, label: 'Has this been helpful?' },
                { value: '1 (Not helpful at all)', label: '1 (Not helpful at all)' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4 (Somewhat helpful)', label: '4 (Somewhat helpful)' },
                { value: '5', label: '5' },
                { value: '6', label: '6' },
                { value: '7 (Extremely helpful)', label: '7 (Extremely helpful)' },
                { value: 'Prefer not to answer', label: 'Prefer not to answer' },
              ],
            },
            {
              label: 'I am not receiving help',
              lockAnswers: true,
            },
            {
              label: 'Prefer not to answer',
              lockAnswers: true,
            },
          ],
        },
      },
      {
        key: 'changes',
        type: 'multiselect',
        templateOptions: {
          question:
            'In the past two months, have there been any changes to your mental health treatment? Check all that apply.',
          options: [
            {
              label: 'I started therapy',
            },
            {
              label: 'I ended therapy',
            },
            {
              label: 'I changed therapists',
            },
            {
              label: 'My prescriber changed my prescription dose',
            },
            {
              label: 'I started a prescription medication',
            },
            {
              label: 'I stopped a prescription medication',
            },
            {
              label: 'Other (please specify)',
              requireTextInput: true,
            },
            {
              label: "I haven't had any changes",
              lockAnswers: true,
            },
            {
              label: 'Prefer not to answer',
              lockAnswers: true,
            },
          ],
        },
      },
      {
        key: 'symptoms',
        type: 'selectPanel',
        templateOptions: {
          question: 'How long have you been experiencing moderate-to-severe anxiety symptoms?',
          options: [
            'One week',
            'Between 1 week and 1 month',
            'Between 1-3 months',
            'Between 3-6 months',
            'Between 6-12 months',
            'Between 1-2 years',
            'Between 2-5 years',
            'Between 5-10 years',
            'More than 10 years',
            'Prefer not to answer',
          ],
        },
      },
    ],
  },
  {
    name: 'Credibility',
    title: 'How Does Calm Thinking Work?',
    description:
      'In our program, we are helping you change the way you think about common but potentially stressful situations in order to reduce your anxiety. During each session, you will be asked either to read information about anxiety problems and their treatment, and then answer questions; or to read brief stories and then complete word fragments by filling in one or more missing letters in a word. These tasks are not meant to be tricky or too difficult. The exercises are designed to help you change the way you make sense of events which may cause anxiety. The program can feel a little repetitive, but the repetition is important so you develop a more balanced thinking style. Don’t worry if you don’t use smartphones or computers much — the tasks are not designed to be difficult, and you can always email questions to the team at studyteam@mindtrails.org. This is an experimental program so it is still in the testing phase, but prior research suggests this program may be able to reduce anxious thinking as effectively as therapy for some people. We want to determine if it can be helpful for you. If you would like to learn more about the science behind Calm Thinking, take a look at the "The Science of MindTrails" button at the top of the page.',
    fields: [
      {
        key: 'important',
        type: 'selectPanel',
        templateOptions: {
          question: 'How important is reducing your anxiety to you right now?',
          options: ['Very', 'A lot', 'Somewhat', 'A little', 'Not at all', 'Prefer not to answer'],
        },
      },
      {
        key: 'confident',
        type: 'selectPanel',
        templateOptions: {
          question: 'How confident are you that an online training program will reduce your anxiety?',
          options: ['Very', 'A lot', 'Somewhat', 'A little', 'Not at all', 'Prefer not to answer'],
        },
      },
    ],
  },
  {
    name: 'OA',
    title: 'Anxiety Review',
    description:
      'The following questions ask about anxiety and fear. For each question, select the answer that best describes your experience over the past week.',
    fields: [
      {
        key: 'oftenFelt',
        type: 'selectPanel',
        templateOptions: {
          question: 'In the past week, how often have you felt anxious?',
          options: [
            'Extremely',
            'Severely',
            'Moderately',
            'Mildly',
            'Not at all',
            'Prefer not to answer',
            'Not at all',
            'Not at all',
            'Not at all',
            'Not at all',
            'Not at all',
          ],
        },
      },
      {
        key: 'intense',
        type: 'selectPanel',
        templateOptions: {
          question: 'In the past week, when you have felt anxious, how intense or severe was your anxiety?',
          options: ['Extremely', 'Severely', 'Moderately', 'Mildly', 'Not at all', 'Prefer not to answer'],
        },
      },
      {
        key: 'oftenAvoid',
        type: 'selectPanel',
        templateOptions: {
          question:
            'In the past week, how often did you avoid situations, places, objects, or activities because of anxiety or fear?',
          options: ['Extremely', 'Severely', 'Moderately', 'Mildly', 'Not at all', 'Prefer not to answer'],
        },
      },
      {
        key: 'interfereNeed',
        type: 'selectPanel',
        templateOptions: {
          question:
            'In the past week, how much did your anxiety interfere with your ability to do the things you needed to do at work, at school, or at home?',
          options: ['Extremely', 'Severely', 'Moderately', 'Mildly', 'Not at all', 'Prefer not to answer'],
        },
      },
      {
        key: 'interfereSocial',
        type: 'selectPanel',
        templateOptions: {
          question: 'In the past week, how much has anxiety interfered with your social life and relationships?',
          options: ['Extremely', 'Severely', 'Moderately', 'Mildly', 'Not at all', 'Prefer not to answer'],
        },
      },
    ],
  },
];
