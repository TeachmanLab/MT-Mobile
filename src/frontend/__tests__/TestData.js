export const navigation = {
  state: {
    key: '',
    params: {
      go_back_key: ''
    }
  },
  navigate: jest.fn(),
  getParam: () => '',
  toggleDrawer: () => '',
};

export const level = {
  levelTitle: 'Initial Assessment',
  levelNumber: 0,
  giftCard: 5,
  wait: 5,
  contents: [
    {
      title: 'Personal Background',
      duration: 2,
    },
    {
      title: 'Mental Health and Treatment History',
      duration: 2,
    },
    {
      title: 'Anxiety Review',
      duration: 2,
    },
    {
      title: 'Completing Short Stories',
      duration: 2,
    },
  ],
};

export const question = {
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
      key: 'important',
      type: 'selectPanel',
      templateOptions: {
        question: 'How important is reducing your anxiety to you right now?',
        options: ['Very', 'A lot', 'Somewhat', 'A little', 'Not at all', 'Prefer not to answer'],
      },
    },
  ],
};

// testing all posibilities of the three logics: lockAnswers, triggerQuestions, requireTextInput
export const MentalHealthHistory = {
  name: 'MentalHealth',
  title: 'Mental Health and Treatment History',
  description:
    'We would like to ask a few questions about your mental health and treatment history. Answers to these personal questions are kept confidential, but they help us improve Calm Thinking by figuring out for whom it works well.',
  fields: [
    {
      key: 'allCases',
      type: 'multiselect',
      templateOptions: {
        question:
          'Are you currently receiving help for any of the previously listed disorders? \nPlease select all that apply, or “I am not receiving help”.',
        options: [
          {
            label: 'Regular Checkbox',
            description: 'testing regular checkbox',
          },
          {
            label: 'Trigger Questions',
            description: 'testing trigger questions only',
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
            label: 'Locker Checkbox',
            description: 'testing locker checkbox only',
            lockAnswers: true,
          },
          {
            label: 'Input Checkbox',
            description: 'testing input checkbox only',
            requireTextInput: true,
          },
          {
            label: 'Big 3',
            lockAnswers: true,
            requireTextInput: true,
            description: 'testing all three baby!',
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
            label: 'trigger-input',
            requireTextInput: true,
            description: 'testing trigger options and input',
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
            label: 'trigger-lock',
            description: 'testing triggering more options and locker',
            lockAnswers: true,
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
            label: 'input-lock',
            description: 'testing input and locking',
            lockAnswers: true,
            requireTextInput: true,
          },
        ],
      },
    },
  ],
};

export const YesNo = {
  name: 'ShortStories',
  title: 'Why Things Happen',
  description:
    'In this section, 14 situations are presented in which it is not quite clear what is happening. Please rate the extent to which you think each of the three explanations for a situation would be likely to be true if you found yourself in that situation. Use the scale below for your ratings.',
  fields: [
    {
      key: 'elevatorYesNo',
      type: 'yesNo',
      templateOptions: {
        // title: 'Story: The Elevator',
        // yesNoBody: 'Did you think about the elevator’s safety?',
        // yesNoAnswer: 'Yes',
        scenario: 'Story: The Elevator',
        question: "Did you think about the elavator's safety?",
        options: ['Yes', 'No'],
        answer: 'Yes',
      },
    },
  ],
};

export const SliderTest = {
  key: 'health',
  type: 'slider',
  templateOptions: {
    focusArea: 'health'
  }
};

export const ImageTest = {
  key: 'image',
  type: 'image',
  templateOptions: {
    imgUrl: '', 
    scenarioTitle: '', 
    scenarioKey: '', 
    description: '', 
    imgScenarioURL: ''
  }
};

export const SelectPanelTest = {
  "key": "symptoms",
  "type": "selectPanel",
  "templateOptions": {
    "question": "How long have you been experiencing moderate-to-severe anxiety symptoms?",
    "options": ['One week', 'Between 1 week and 1 month', 'Between 1-3 months', 'Between 3-6 months', 'Between 6-12 months', 'Between 1-2 years', 'Between 2-5 years', 'Between 5-10 years', 'More than 10 years', 'Prefer not to answer'],
  },
  "nextQuestion": {
    "key": "two",
    "question": "another question",
    "response": "nothing"
  }
};

export const PanelTest = {
  "key": "symptoms",
  "type": "selectPanel",
  "templateOptions": {
    "questions": ["How long have you been experiencing moderate-to-severe anxiety symptoms?"],
    "answers": ['One week', 'Between 1 week and 1 month', 'Between 1-3 months', 'Between 3-6 months', 'Between 6-12 months', 'Between 1-2 years', 'Between 2-5 years', 'Between 5-10 years', 'More than 10 years', 'Prefer not to answer'],
  },
  "nextQuestion": {
    "key": "two",
    "question": "another question",
    "response": "nothing"
  },
};

export const WordFillTest = {
  key: 'elevator',
  type: 'wordFill',
  templateOptions: {
    title: 'Story: The Elevator',
    body: 'You are in the lobby of your friend’s new apartment building. You press the button to the elevator to go up. The building looks old. As you get on the elevator you think about its…',
    word: 'sa[ ]ety',
    filledWord: 'sa[f]ety',
    answer: 'f',
    options: ['k', 'f'],
  },
};

export const YesNoTest = {
  key: 'elevatorYesNo',
  type: 'yesNo',
  templateOptions: {
    title: 'Story: The Elevator',
    question: 'Did you think about the elevator’s safety?',
    answer: 'Yes',
    options: ['Yes', 'No']
  },
};

export const TestModel = {
  questionIndex: 0,
  responses: {

  }
};