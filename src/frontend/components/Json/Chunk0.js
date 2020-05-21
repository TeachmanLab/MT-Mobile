export const forms = [
  {
    name: 'Credibility',
    title: 'How Does Calm Thinking Work?',
    description:
      'In our program, we are helping you change the way you think about common but potentially stressful situations in order to reduce your anxiety. During each session, you will be asked either to read information about anxiety problems and their treatment, and then answer questions; or to read brief stories and then complete word fragments by filling in one or more missing letters in a word. These tasks are not meant to be tricky or too difficult.\n\nThe exercises are designed to help you change the way you make sense of events which may cause anxiety. The program can feel a little repetitive, but the repetition is important so you develop a more balanced thinking style. Don’t worry if you don’t use smartphones or computers much — the tasks are not designed to be difficult, and you can always email questions to the team at studyteam@mindtrails.org.\n\nThis is an experimental program so it is still in the testing phase, but prior research suggests this program may be able to reduce anxious thinking as effectively as therapy for some people. We want to determine if it can be helpful for you. If you would like to learn more about the science behind Calm Thinking, take a look at the "The Science of MindTrails" button at the top of the page.',
    fields: [
      {
        key: 'credibilityAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'Please answer these questions about your anxiety.',
          questions: [
            'How important is reducing your anxiety to you right now?',
            'How confident are you that an online training program will reduce your anxiety?',
          ],
          answers: ['Very', 'A lot', 'Somewhat', 'A little', 'Not at all', 'Prefer not to answer'],
        },
      },
    ],
  },
  {
    name: 'Personal Background',
    title: 'Personal Background',
    description:
      'We would like to start with a few questions to get to know you better. Answers to these personal questions are kept confidential, but they help us improve Calm Thinking by figuring out for whom it works well.',
    fields: [
      {
        key: 'genderIdentity',
        type: 'selectPanel',
        templateOptions: {
          // label: "You have visitors over for dinner and they leave sooner than you expected. Why?",
          question: 'What is your gender identity?',
          options: ['Female', 'Male', 'Transgender Female', 'Transgender Male', 'Other', 'Prefer not to answer'],
        },
      },
      {
        key: 'race',
        type: 'multiselect',
        templateOptions: {
          question: 'What is your race? Please select all that apply.',
          options: [
            {
              label: 'American Indian/Alaska Native',
            },
            {
              label: 'East Asian',
            },
            {
              label: 'South Asian',
            },
            {
              label: 'Native Hawaiian, Pacific Islander',
            },
            {
              label: 'Black/African origin',
            },
            {
              label: 'White/European origin',
            },
            {
              label: 'Other or Unknown',
            },
            {
              label: 'Prefer not to answer',
            },
          ],
        },
      },
      {
        key: 'ethnicity',
        type: 'selectPanel',
        templateOptions: {
          question: 'What is your ethnicity?',
          options: ['Hispanic or Latino', 'Not Hispanic or Latino', 'Unknown', 'Prefer not to answer'],
        },
      },
      {
        key: 'education',
        type: 'selectPanel',
        templateOptions: {
          question: 'What is your highest educational attainment?',
          options: [
            'Elementary School',
            'Junior High',
            'Some High School',
            'High School Graduate',
            'Some College',
            "Associate's Degree",
            "Bachelor's Degree",
            'Some Graduate School',
            "Master's Degree",
            'M.B.A.',
            'J.D.',
            'M.D.',
            'Ph.D.',
            'Other Advanced Degree',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'MaritalStat',
        type: 'selectPanel',
        templateOptions: {
          question: 'What is your relationship status?',
          options: [
            'Single',
            'Single, but casually dating',
            'Single, but currently engaged to be married',
            'Single, but currently living with someone in a marriage-like relationship',
            'Married',
            'In a domestic or civil union',
            'Separated',
            'Divorced',
            'Widow/widower',
            'Other',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'employmentStat',
        type: 'selectPanel',
        templateOptions: {
          question: 'What is your employment status?',
          options: [
            'Working full-time',
            'Working part-time',
            'Unemployed or laid off',
            'Looking for work',
            'Homemaker/keeping house or raising children full-time',
            'Retired',
            'Student',
            'Other',
            'Unknown',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'Income',
        type: 'selectPanel',
        templateOptions: {
          question:
            'What is your household annual income, before taxes and other deductions (in US dollars or equivalent)?',
          options: [
            'Less than $5,000',
            '$5,000 through $11,999',
            '$12,000 through $15,999',
            '$16,000 through $24,999',
            '$25,000 through $34,999',
            '$35,000 through $49,999',
            '$50,000 through $74,999',
            '$75,000 through $99,999',
            '$100,000 through $149,999',
            '$150,000 through $199,999',
            '$200,000 through $249,999',
            '$250,000 or greater',
            "Don't know",
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'PtpReason',
        type: 'selectPanel',
        templateOptions: {
          question: 'How did you learn about Calm Thinking and/or The MindTrails Project?',
          options: [
            'Project Implicit Mental Health site front page',
            'At the Project Implicit Mental Health site, after completing a study about my anxiety symptoms',
            'A friend or family member',
            'Press coverage',
            'Internet search for mental health info',
            'Mental health professional recommended it',
            'Link from another mental health site',
            'Other',
            'Prefer not to answer',
          ],
        },
      },
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
        },
      },
      {
        key: 'receivingHelp',
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
    name: 'OA',
    title: 'Anxiety Review',
    description:
      'The following questions ask about anxiety and fear. For each question, select the answer that best describes your experience over the past week.',
    fields: [
      {
        key: 'howOften',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the answer that best describes your experience over the past week.',
          questions: ['In the past week, how often have you felt anxious?'],
          answers: [
            'No anxiety',
            'Infrequent anxiety',
            'Occasional anxiety',
            'Frequent anxiety',
            'Constant anxiety',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'intensity',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the answer that best describes your experience over the past week.',
          questions: ['In the past week, when you have felt anxious, how intense or severe was your anxiety?'],
          answers: ['Little or None', 'Mild', 'Moderate', 'Severe', 'Extreme', 'Prefer not to answer'],
        },
      },
      {
        key: 'oftenAvoid',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the answer that best describes your experience over the past week.',
          questions: [
            'In the past week, how often did you avoid situations, places, objects, or activities because of anxiety or fear?',
          ],
          answers: ['Never', 'Infrequently', 'Occasionally', 'Frequently', 'All the time', 'Prefer not to answer'],
        },
      },
      {
        key: 'interfered',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the answer that best describes your experience over the past week.',
          questions: [
            'In the past week, how much did your anxiety interfere with your ability to do the things you needed to do at work, at school, or at home?',
            'In the past week, how much has anxiety interfered with your social life and relationships?',
          ],
          answers: ['Not at all', 'Midly', 'Moderately', 'Severely', 'Extremely', 'Prefer not to answer'],
        },
      },
    ],
  },
  {
    name: 'AnxietyTriggers',
    title: 'Anxiety Triggers',
    description:
      'People become anxious for lots of different reasons. To what extent do you routinely experience moderate-to-severe anxiety in the following situations? For each situation, select the number that best describes your experience.',
    fields: [
      {
        // custom component that shows the visitor answers
        key: 'AnxietyTriggersP1',
        type: 'panel',
        templateOptions: {
          paragraph:
            'To what extent do you routinely experience moderate-to-severe anxiety in the following situations?',
          questions: [
            'Anxiety at social gatherings (e.g., parties), speaking in public, when meeting new people or dating, or talking to an authority figure (e.g., boss, teacher)',
            'Fear about changes in bodily feelings (e.g., feeling dizzy, short of breath, or rapid heartbeat) or fears about having a "panic attack"',
            'Fear about becoming anxious and not being able to leave a situation (e.g., getting stuck at a movie theater or in a crowd)',
            'Extreme fear about a particular object or situation, like flying, being in a high place, certain insects or animals, or seeing blood or a wound',
          ],
          answers: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely', 'Prefer not to answer'],
        },
      },
      {
        key: 'AnxietyTriggersP2',
        type: 'panel',
        templateOptions: {
          paragraph:
            'To what extent do you routinely experience moderate-to-severe anxiety in the following situations?',
          questions: [
            'Anxiety about upsetting thoughts or images that keep coming to mind, or anxiety about rituals or activities you feel you have to do over and over again (e.g., checking things or washing your hands)',
            'Anxiety related to reminders of a prior traumatic experience (e.g., natural disaster, accident, assault, or exposure to combat or violence)',
            'Anxiety about COVID-19 and its impact on my and others’ health, work, relationships, finances, and social life.',
          ],
          answers: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely', 'Prefer not to answer'],
        },
      },
    ],
  },
  {
    name: 'Completing Short Stories',
    title: 'Completing Short Stories',
    description:
      'In this section, 14 situations are presented in which it is not quite clear what is happening. Please rate the extent to which you think each of the three explanations for a situation would be likely to be true if you found yourself in that situation. Use the scale below for your ratings.',
    fields: [
      {
        key: 'elevatorFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Elevator',
          paragraph:
            'You are in the lobby of your friend’s new apartment building.\n\nYou press the button to the elevator to go up. The building looks old.\n\nAs you get on the elevator you think about its…',
          phrase: 'safety',
        },
      },
      {
        key: 'elevatorQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Elevator',
          question: 'Did you think about the elevator’s safety?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'weddingFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Wedding Reception',
          paragraph:
            'Your friend asks you to give a speech at her wedding reception.\n\nYou prepare some remarks and when the time comes, get to your feet.\n\nAs you speak, you notice some people in the audience start to…',
          phrase: 'laugh',
          yesNoTitle: 'Story: The Wedding Reception',
          yesNoBody: 'Does the audience laugh when you speak?',
          yesNoAnswer: 'Yes',
        },
      },
      {
        key: 'weddingQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Wedding Reception',
          question: 'Does the audience laugh when you speak?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'jobFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Job',
          paragraph:
            'You are currently working as a contractor for a company.\n\nOnce this job is finished, you will be without employment until you can find your next job.\n\nYou think about not having an income for a few weeks and about your future…',
          phrase: 'finances',
          yesNoBody: 'Will you be without an income soon?',
          yesNoAnswer: 'Yes',
        },
      },
      {
        key: 'jobQuestion',
        type: 'wordFill',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Job',
          question: 'Will you be without an income soon?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'noiseFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Loud Noise',
          paragraph:
            'You are woken up in the middle of the night by a loud noise.\n\nYou are not sure what caused the noise and leave your bedroom to see what happened.\n\nYou walk…',
          phrase: 'downstairs',
          yesNoBody: 'Have you been woken up in the middle of the night?',
          yesNoAnswer: 'Yes',
        },
      },
      {
        key: 'noiseQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Loud Noise',
          question: 'Have you been woken up in the middle of the night?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'friendFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: Meeting a Friend',
          paragraph:
            "In the street you bump into an old friend you haven't seen for a long time.\n\nShe is too busy to stop, so you arrange to meet later in a bar.\n\nYou arrive a little late but the bar is empty and a few minutes later she is still not…",
          phrase: 'there',
          yesNoBody: 'Did your friend stop?',
          yesNoAnswer: 'No',
        },
      },
      {
        key: 'friendQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: Meeting a Friend',
          question: 'Did your friend stop?',
          options: ['Yes', 'No'],
          answer: 'No',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'lunchFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Lunch',
          paragraph:
            'You are eating lunch with a friend.\n\nAs you start eating your salad, you describe your plans for the weekend.\n\nYou accidentally drop a piece of lettuce, and your friend looks at…',
          phrase: 'you',
          yesNoBody: 'Do you have salad for lunch?',
          yesNoAnswer: 'Yes',
        },
      },
      {
        key: 'lunchQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Lunch',
          question: 'Do you have salad for lunch?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'scrapeFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Scrape',
          paragraph:
            'You are playing basketball with some friends.\n\nWhile running toward the ball, you trip and scrape your knee.\n\nThe scrape hurts a bit, but does not…',
          phrase: 'bleed',
          yesNoBody: 'Are you playing soccer with your friend?',
          yesNoAnswer: 'No',
        },
      },
      {
        key: 'scrapeQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Scrape',
          question: 'Are you playing soccer with your friend?',
          options: ['Yes', 'No'],
          answer: 'No',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'shoppingFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Shopping Trip',
          paragraph:
            'You are at the mall with your friend.\n\nWhile you shop, she tells you how several of her friends have recently come down with a strange illness.\n\nYou think about your recent health, and wonder if you will get…',
          phrase: 'sick',
          yesNoBody: 'Are you shopping alone?',
          yesNoAnswer: 'No',
        },
      },
      {
        key: 'shoppingQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Shopping Trip',
          question: 'Are you shopping alone?',
          options: ['Yes', 'No'],
          answer: 'No',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'bloodFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Blood Test',
          paragraph:
            "You are at a routine doctor's appointment.\n\nAt the appointment, the doctor decides to run a few blood tests to check your health.\n\nThe doctor says he will call you in a few weeks, and you will find out your test results at that…",
          phrase: 'time',
          yesNoBody: 'Did you take blood tests?',
          yesNoAnswer: 'Yes',
        },
      },
      {
        key: 'bloodQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Blood Test',
          question: 'Did you take blood tests?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
    ],
  },
  {
    name: 'Completing Short Stories, Pt.2',
    title: 'Completing Short Stories - Continued',
    description:
      'Below, you will see the titles of the nine short stories you just read. After each one, you will see four sentences.\n\nNone of these sentences are identical to the original story, but some are more similar than others.Think back to the story you read, and rate how similar each sentence is to what you read in the original story.\n\nWe are interested in your understanding of the original story, whether or not that matches what you would personally think or do in that situation.',
    fields: [
      {
        key: 'elevator',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE ELEVATOR: The building looks old, and as you get on the elevator...',
          questions: [
            'You think that the elevator will probably break down while you are on it.',
            'You think that you are going to like your friend’s new apartment.',
            'You think about how smelly the lobby is.',
            'You think that riding the elevator will be safe.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'wedding',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE WEDDING RECEPTION: As you enter the room...',
          questions: [
            'People in the audience laugh in appreciation.',
            'You notice a friend you were hoping to see walk into the reception.',
            'People in the audience find your efforts laughable.',
            'You notice someone you do not like just walked into the reception.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'job',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE JOB: You think about not having an income for a few weeks...',
          questions: [
            'And know that you can rely on your savings.',
            'And are excited about not having to set an alarm.',
            'And worry about becoming broke.',
            'And are sad about leaving your current coworkers.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'noise',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE LOUD NOISE: As you walk downstairs...',
          questions: [
            'You feel happy, and think about how lovely your house is.',
            'You feel afraid, and worry that you cannot handle the fear.',
            'You feel afraid, but you know that you can tolerate the feeling.',
            'You feel cold, and think about how the house needs better heating.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'friend',
        type: 'panel',
        templateOptions: {
          paragraph: 'MEETING A FRIEND: You arrive a little late, and...',
          questions: [
            'Order your favorite snack.',
            'Notice the bar smells gross.',
            'Get a call from your friend who is on her way, but running late.',
            'Think your friend decided she did not want to see you.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'lunch',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE LUNCH: Your friend looks at you...',
          questions: [
            'Because she thinks you are a slob.',
            'And you frown because you forgot to bring water to lunch.',
            'Because she is paying attention as you describe your weekend plans.',
            'And you smile because your lunch tastes good.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'shopping',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE SHOPPING TRIP: You think about your recent health...',
          questions: [
            'And think you are probably coming down with the strange illness.',
            'And think you are unlikely to catch the strange illness.',
            'And smile because you enjoy shopping.',
            'And feel bored of shopping.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'blood',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE BLOOD TEST: The doctor says he will call you in a few weeks...',
          questions: [
            'And you think about how nice your doctor is.',
            'And you are annoyed because your doctor is not very friendly.',
            'And you think that you will not be able to stand your anxiety while you wait.',
            'And you know that you can handle your anxiety while you wait.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
    ],
  },
  {
    name: 'BBSIQ',
    title: 'Why Things Happen',
    description:
      'In this section, 14 situations are presented in which it is not quite clear what is happening. Please rate the extent to which you think each of the three explanations for a situation would be likely to be true if you found yourself in that situation. Use the scale below for your ratings.',
    fields: [
      {
        key: 'visitorAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You have visitors over for dinner and they leave sooner than you expected. Why?',
          questions: [
            'They did not wish to outstay their welcome.',
            'They had another pressing engagement to go to.',
            'They did not enjoy the visit and were bored with your company.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'breathAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You feel short of breath. Why?',
          questions: [
            'You are developing the flu.',
            'You are about to suffocate or stop breathing.',
            'You are physically “out of shape.”',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'visionAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'Your vision has become slightly blurred. Why?',
          questions: [
            'You have strained your eyes slightly.',
            'You need to get glasses or change your existing glasses.',
            'This is the sign of a serious illness.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'ignoreAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You go into a shop and the assistant ignores you. Why?',
          questions: [
            'They are bored with their job, and this makes them rude.',
            'They are concentrating very hard on something else.',
            'They find you irritating and resent your presence.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'lightheadedAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You feel lightheaded and weak. Why?',
          questions: [
            'You are about to faint.',
            'You need to get something to eat.',
            'You didn’t get enough sleep last night.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'smokeAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You smell smoke. What’s burning?',
          questions: ['Your house is on fire.', 'Some food is burning.', 'Someone is smoking a cigarette.'],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'ownHouseAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'A friend suggests that you change the way that you’re doing a job in your own house. Why?',
          questions: [
            'They are trying to be helpful.',
            'They think you’re incompetent.',
            'They have done the job more often and know an easier way.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'chestAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'Your chest feels uncomfortable and tight. Why?',
          questions: ['You have indigestion.', 'You have a sore muscle.', 'Something is wrong with your heart.'],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'joltAnswers',
        type: 'panel',
        templateOptions: {
          paragraph:
            'You wake with a jolt in the middle of the night, thinking you heard a noise, but all is quiet. What woke you up?',
          questions: [
            'You were woken by a dream.',
            'A burglar broke into your house.',
            'A door or window rattled in the wind.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'partyAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You are introduced to someone at a party. The person fails to reply to a question you ask. Why?',
          questions: [
            'They did not hear the question.',
            'They think you are uninteresting and boring.',
            'They were preoccupied with something else at the time.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'heartAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You notice that your heart is beating quickly and pounding. Why?',
          questions: [
            'Because you have been physically active.',
            'Because there is something wrong with your heart.',
            'Because you are feeling excited.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'confusedAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'Suddenly, you feel confused and find it hard to think straight. Why?',
          questions: [
            'You are going out of your mind.',
            'You are coming down with a cold.',
            'You’ve been working too hard and need a rest.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'urgentAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'A letter marked "URGENT" arrives. What is in the letter?',
          questions: [
            'It is junk mail designed to attract your attention.',
            'You forgot to pay a bill.',
            'It is news that someone you know has died or is seriously ill.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'dizzyAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You notice that your heart is pounding, and you feel breathless, dizzy, and unreal. Why?',
          questions: [
            'You have been overdoing it and are overtired.',
            'Something you ate disagreed with you.',
            'You are dangerously ill or going mad.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
    ],
  },
  {
    name: 'Comorbid',
    title: 'Mood and Drinking Patterns',
    description:
      'The following questions ask about mood and drinking patterns. For each question, select the number for the answer that best describes your experience.',
    fields: [
      {
        key: 'interestAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'Over the past two weeks, how often have you been bothered by any of the following problems?',
          questions: ['Little interest or pleasure in doing things', 'Feeling down, depressed, or hopeless'],
          answers: [
            'Not at all',
            'Several days',
            'More than half of the days',
            'Nearly every day',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'alcoholComor',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the number for the answer that best describes your experience.',
          questions: ['How often do you have a drink containing alcohol?'],
          answers: [
            'Never',
            'Monthly or less',
            '2 to 4 times a month',
            '2 to 3 times a week',
            '4 or more times a week',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'alcoholComor2',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the number for the answer that best describes your experience.',
          questions: ['How many drinks containing alcohol do you have on a typical day when you are drinking?'],
          answers: ['0 to 2', '3 or 4', '5 or 6', '7 to 9', '10 or more', 'Prefer not to answer'],
        },
      },
      {
        key: 'alcoholComor3',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the number for the answer that best describes your experience.',
          questions: ['How often do you have six or more drinks on one occasion?'],
          answers: [
            'Never',
            'Less than monthly',
            'Monthly',
            '2 to 3 times a week',
            '4 or more times a week',
            'Prefer not to answer',
          ],
        },
      },
    ],
  },
  {
    name: 'Wellness',
    title: 'What I Believe',
    description:
      'Below, a number of statements related to thoughts and feelings are presented. For each statement, select the number for the answer that best describes your own perspective.',
    fields: [
      {
        key: 'lifeWhole',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each statement, select the number for the answer that best describes your own perspective.',
          questions: ['All things considered, how satisfied are you with your life as a whole?'],
          answers: [
            '0 (Completely dissatisfied)',
            '1',
            '2',
            '3',
            '4',
            '5 (Neither satisfied nor dissatisfied)',
            '6',
            '7',
            '8',
            '9',
            '10 (Completely satisfied)',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'difficultSituations',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each statement, select the number for the answer that best describes your own perspective.',
          questions: [
            'When facing difficult tasks, I am certain that I will accomplish them.',
            'I am confident that I can perform well on many different tasks.',
            'Compared to other people, I can do most tasks very well.',
          ],
          answers: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree', 'Prefer not to answer'],
        },
      },
      {
        key: 'learnNewThings',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each statement, select the number for the answer that best describes your own perspective.',
          questions: [
            "You can learn new things, but you can't really change how you think.",
            'No matter how much you have been thinking a particular way, you can always change it quite a bit.',
            'You can always substantially change how you think.',
          ],
          answers: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree', 'Prefer not to answer'],
        },
      },
      {
        key: 'goWrong',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each statement, select the number for the answer that best describes your own perspective.',
          questions: ['If something can go wrong with me, it will.', 'I hardly ever expect things to go my way.'],
          answers: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree', 'Prefer not to answer'],
        },
      },
    ],
  },
];

// JSON object containing all forms
export const chunk0 = [
  {
    name: 'Credibility',
    title: 'How Does Calm Thinking Work?',
    description:
      'In our program, we are helping you change the way you think about common but potentially stressful situations in order to reduce your anxiety. During each session, you will be asked either to read information about anxiety problems and their treatment, and then answer questions; or to read brief stories and then complete word fragments by filling in one or more missing letters in a word. These tasks are not meant to be tricky or too difficult.\n\nThe exercises are designed to help you change the way you make sense of events which may cause anxiety. The program can feel a little repetitive, but the repetition is important so you develop a more balanced thinking style. Don’t worry if you don’t use smartphones or computers much — the tasks are not designed to be difficult, and you can always email questions to the team at studyteam@mindtrails.org.\n\nThis is an experimental program so it is still in the testing phase, but prior research suggests this program may be able to reduce anxious thinking as effectively as therapy for some people. We want to determine if it can be helpful for you. If you would like to learn more about the science behind Calm Thinking, take a look at the "The Science of MindTrails" button at the top of the page.',
    fields: [
      {
        key: 'credibilityAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'Please answer these questions about your anxiety.',
          questions: [
            'How important is reducing your anxiety to you right now?',
            'How confident are you that an online training program will reduce your anxiety?',
          ],
          answers: ['Very', 'A lot', 'Somewhat', 'A little', 'Not at all', 'Prefer not to answer'],
        },
      },
    ],
  },
  {
    name: 'Personal Background',
    title: 'How Does Calm Thinking Work?',
    description:
      'We would like to start with a few questions to get to know you better. Answers to these personal questions are kept confidential, but they help us improve Calm Thinking by figuring out for whom it works well.',
    fields: [
      {
        key: 'genderIdentity',
        type: 'selectPanel',
        templateOptions: {
          // label: "You have visitors over for dinner and they leave sooner than you expected. Why?",
          question: 'What is your gender identity?',
          options: ['Female', 'Male', 'Transgender Female', 'Transgender Male', 'Other', 'Prefer not to answer'],
        },
      },
      {
        key: 'race',
        type: 'selectPanel',
        templateOptions: {
          question: 'What is your gender identiy?',
          options: [
            'American Indian/Alaska Native',
            'East Asian',
            'South Asian',
            'Native Hawaiian, Pacific Islander',
            'Black/African origin',
            'White/European origin',
            'Other or Unknown',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'ethnicity',
        type: 'selectPanel',
        templateOptions: {
          question: 'What is your ethnicity?',
          options: ['Hispanic or Latino', 'Not Hispanic or Latino', 'Unknown', 'Prefer not to answer'],
        },
      },
      {
        key: 'education',
        type: 'selectPanel',
        templateOptions: {
          question: 'What is your highest educational attainment?',
          options: [
            'Elementary School',
            'Junior High',
            'Some High School',
            'High School Graduate',
            'Some College',
            "Associate's Degree",
            "Bachelor's Degree",
            'Some Graduate School',
            "Master's Degree",
            'M.B.A.',
            'J.D.',
            'M.D.',
            'Ph.D.',
            'Other Advanced Degree',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'MaritalStat',
        type: 'selectPanel',
        templateOptions: {
          question: 'What is your relationship status?',
          options: [
            'Single',
            'Single, but casually dating',
            'Single, but currently engaged to be married',
            'Single, but currently living with someone in a marriage-like relationship',
            'Married',
            'In a domestic or civil union',
            'Separated',
            'Divorced',
            'Widow/widower',
            'Other',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'employmentStat',
        type: 'selectPanel',
        templateOptions: {
          question: 'What is your employment status?',
          options: [
            'Working full-time',
            'Working part-time',
            'Unemployed or laid off',
            'Looking for work',
            'Homemaker/keeping house or raising children full-time',
            'Retired',
            'Student',
            'Other',
            'Unknown',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'Income',
        type: 'selectPanel',
        templateOptions: {
          question:
            'What is your household annual income, before taxes and other deductions (in US dollars or equivalent)?',
          options: [
            'Less than $5,000',
            '$5,000 through $11,999',
            '$12,000 through $15,999',
            '$16,000 through $24,999',
            '$25,000 through $34,999',
            '$35,000 through $49,999',
            '$50,000 through $74,999',
            '$75,000 through $99,999',
            '$100,000 through $149,999',
            '$150,000 through $199,999',
            '$200,000 through $249,999',
            '$250,000 or greater',
            "Don't know",
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'PtpReason',
        type: 'selectPanel',
        templateOptions: {
          question: 'How did you learn about Calm Thinking and/or The MindTrails Project?',
          options: [
            'Project Implicit Mental Health site front page',
            'At the Project Implicit Mental Health site, after completing a study about my anxiety symptoms',
            'A friend or family member',
            'Press coverage',
            'Internet search for mental health info',
            'Mental health professional recommended it',
            'Link from another mental health site',
            'Other',
            'Prefer not to answer',
          ],
        },
      },
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
        },
      },
      {
        key: 'receivingHelp',
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
    name: 'OA',
    title: 'Anxiety Review',
    description:
      'The following questions ask about anxiety and fear. For each question, select the answer that best describes your experience over the past week.',
    fields: [
      {
        key: 'howOften',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the answer that best describes your experience over the past week.',
          questions: ['In the past week, how often have you felt anxious?'],
          answers: [
            'No anxiety',
            'Infrequent anxiety',
            'Occasional anxiety',
            'Frequent anxiety',
            'Constant anxiety',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'intensity',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the answer that best describes your experience over the past week.',
          questions: ['In the past week, when you have felt anxious, how intense or severe was your anxiety?'],
          answers: ['Little or None', 'Mild', 'Moderate', 'Severe', 'Extreme', 'Prefer not to answer'],
        },
      },
      {
        key: 'oftenAvoid',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the answer that best describes your experience over the past week.',
          questions: [
            'In the past week, how often did you avoid situations, places, objects, or activities because of anxiety or fear?',
          ],
          answers: ['Never', 'Infrequently', 'Occasionally', 'Frequently', 'All the time', 'Prefer not to answer'],
        },
      },
      {
        key: 'interfered',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the answer that best describes your experience over the past week.',
          questions: [
            'In the past week, how much did your anxiety interfere with your ability to do the things you needed to do at work, at school, or at home?',
            'In the past week, how much has anxiety interfered with your social life and relationships?',
          ],
          answers: ['Not at all', 'Midly', 'Moderately', 'Severely', 'Extremely', 'Prefer not to answer'],
        },
      },
    ],
  },
  {
    name: 'AnxietyTriggers',
    title: 'Anxiety Triggers',
    description:
      'People become anxious for lots of different reasons. To what extent do you routinely experience moderate-to-severe anxiety in the following situations? For each situation, select the number that best describes your experience.',
    fields: [
      {
        //custom component that shows the visitor answers
        key: 'AnxietyTriggersP1',
        type: 'panel',
        templateOptions: {
          paragraph:
            'To what extent do you routinely experience moderate-to-severe anxiety in the following situations?',
          questions: [
            'Anxiety at social gatherings (e.g., parties), speaking in public, when meeting new people or dating, or talking to an authority figure (e.g., boss, teacher)',
            'Fear about changes in bodily feelings (e.g., feeling dizzy, short of breath, or rapid heartbeat) or fears about having a "panic attack"',
            'Fear about becoming anxious and not being able to leave a situation (e.g., getting stuck at a movie theater or in a crowd)',
            'Extreme fear about a particular object or situation, like flying, being in a high place, certain insects or animals, or seeing blood or a wound',
          ],
          answers: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely', 'Prefer not to answer'],
        },
      },
      {
        key: 'AnxietyTriggersP2',
        type: 'panel',
        templateOptions: {
          paragraph:
            'To what extent do you routinely experience moderate-to-severe anxiety in the following situations?',
          questions: [
            'Anxiety about upsetting thoughts or images that keep coming to mind, or anxiety about rituals or activities you feel you have to do over and over again (e.g., checking things or washing your hands)',
            'Anxiety related to reminders of a prior traumatic experience (e.g., natural disaster, accident, assault, or exposure to combat or violence)',
            'Anxiety about COVID-19 and its impact on my and others’ health, work, relationships, finances, and social life.',
          ],
          answers: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely', 'Prefer not to answer'],
        },
      },
    ],
  },
  {
    name: 'Completing Short Stories',
    title: 'Completing Short Stories',
    description:
      'In this section, 14 situations are presented in which it is not quite clear what is happening. Please rate the extent to which you think each of the three explanations for a situation would be likely to be true if you found yourself in that situation. Use the scale below for your ratings.',
    fields: [
      {
        key: 'elevatorFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Elevator',
          paragraph:
            'You are in the lobby of your friend’s new apartment building.\n\nYou press the button to the elevator to go up. The building looks old.\n\nAs you get on the elevator you think about its…',
          phrase: 'safety',
        },
      },
      {
        key: 'elevatorQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Elevator',
          question: 'Did you think about the elevator’s safety?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'weddingFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Wedding Reception',
          paragraph:
            'Your friend asks you to give a speech at her wedding reception.\n\nYou prepare some remarks and when the time comes, get to your feet.\n\nAs you speak, you notice some people in the audience start to…',
          phrase: 'laugh',
          yesNoTitle: 'Story: The Wedding Reception',
          yesNoBody: 'Does the audience laugh when you speak?',
          yesNoAnswer: 'Yes',
        },
      },
      {
        key: 'weddingQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Wedding Reception',
          question: 'Does the audience laugh when you speak?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'jobFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Job',
          paragraph:
            'You are currently working as a contractor for a company.\n\nOnce this job is finished, you will be without employment until you can find your next job.\n\nYou think about not having an income for a few weeks and about your future…',
          phrase: 'finances',
          yesNoBody: 'Will you be without an income soon?',
          yesNoAnswer: 'Yes',
        },
      },
      {
        key: 'jobQuestion',
        type: 'wordFill',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Job',
          question: 'Will you be without an income soon?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'noiseFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Loud Noise',
          paragraph:
            'You are woken up in the middle of the night by a loud noise.\n\nYou are not sure what caused the noise and leave your bedroom to see what happened.\n\nYou walk…',
          phrase: 'downstairs',
          yesNoBody: 'Have you been woken up in the middle of the night?',
          yesNoAnswer: 'Yes',
        },
      },
      {
        key: 'noiseQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Loud Noise',
          question: 'Have you been woken up in the middle of the night?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'friendFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: Meeting a Friend',
          paragraph:
            "In the street you bump into an old friend you haven't seen for a long time.\n\nShe is too busy to stop, so you arrange to meet later in a bar.\n\nYou arrive a little late but the bar is empty and a few minutes later she is still not…",
          phrase: 'there',
          yesNoBody: 'Did your friend stop?',
          yesNoAnswer: 'No',
        },
      },
      {
        key: 'friendQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: Meeting a Friend',
          question: 'Did your friend stop?',
          options: ['Yes', 'No'],
          answer: 'No',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'lunchFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Lunch',
          paragraph:
            'You are eating lunch with a friend.\n\nAs you start eating your salad, you describe your plans for the weekend.\n\nYou accidentally drop a piece of lettuce, and your friend looks at…',
          phrase: 'you',
          yesNoBody: 'Do you have salad for lunch?',
          yesNoAnswer: 'Yes',
        },
      },
      {
        key: 'lunchQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Lunch',
          question: 'Do you have salad for lunch?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'scrapeFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Scrape',
          paragraph:
            'You are playing basketball with some friends.\n\nWhile running toward the ball, you trip and scrape your knee.\n\nThe scrape hurts a bit, but does not…',
          phrase: 'bleed',
          yesNoBody: 'Are you playing soccer with your friend?',
          yesNoAnswer: 'No',
        },
      },
      {
        key: 'scrapeQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Scrape',
          question: 'Are you playing soccer with your friend?',
          options: ['Yes', 'No'],
          answer: 'No',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'shoppingFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Shopping Trip',
          paragraph:
            'You are at the mall with your friend.\n\nWhile you shop, she tells you how several of her friends have recently come down with a strange illness.\n\nYou think about your recent health, and wonder if you will get…',
          phrase: 'sick',
          yesNoBody: 'Are you shopping alone?',
          yesNoAnswer: 'No',
        },
      },
      {
        key: 'shoppingQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Shopping Trip',
          question: 'Are you shopping alone?',
          options: ['Yes', 'No'],
          answer: 'No',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
      {
        key: 'bloodFill',
        type: 'wordFill',
        templateOptions: {
          scenarioKey: 1,
          imgUrl: 'small',
          lettersToRemove: 1,
          scenarioTitle: 'Story: The Blood Test',
          paragraph:
            "You are at a routine doctor's appointment.\n\nAt the appointment, the doctor decides to run a few blood tests to check your health.\n\nThe doctor says he will call you in a few weeks, and you will find out your test results at that…",
          phrase: 'time',
          yesNoBody: 'Did you take blood tests?',
          yesNoAnswer: 'Yes',
        },
      },
      {
        key: 'bloodQuestion',
        type: 'yesNo',
        templateOptions: {
          scenarioTitle: 'Story: The Blood Test',
          question: 'Did you take blood tests?',
          options: ['Yes', 'No'],
          answer: 'Yes',
          imgUrl: 'small',
          scenarioKey: 1,
        },
      },
    ],
  },
  {
    name: 'Completing Short Stories, Pt.2',
    title: 'Completing Short Stories - Continued',
    description:
      'Below, you will see the titles of the nine short stories you just read. After each one, you will see four sentences.\n\nNone of these sentences are identical to the original story, but some are more similar than others.Think back to the story you read, and rate how similar each sentence is to what you read in the original story.\n\nWe are interested in your understanding of the original story, whether or not that matches what you would personally think or do in that situation.',
    fields: [
      {
        key: 'elevator',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE ELEVATOR: The building looks old, and as you get on the elevator...',
          questions: [
            'You think that the elevator will probably break down while you are on it.',
            'You think that you are going to like your friend’s new apartment.',
            'You think about how smelly the lobby is.',
            'You think that riding the elevator will be safe.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'wedding',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE WEDDING RECEPTION: As you enter the room...',
          questions: [
            'People in the audience laugh in appreciation.',
            'You notice a friend you were hoping to see walk into the reception.',
            'People in the audience find your efforts laughable.',
            'You notice someone you do not like just walked into the reception.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'job',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE JOB: You think about not having an income for a few weeks...',
          questions: [
            'And know that you can rely on your savings.',
            'And are excited about not having to set an alarm.',
            'And worry about becoming broke.',
            'And are sad about leaving your current coworkers.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'noise',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE LOUD NOISE: As you walk downstairs...',
          questions: [
            'You feel happy, and think about how lovely your house is.',
            'You feel afraid, and worry that you cannot handle the fear.',
            'You feel afraid, but you know that you can tolerate the feeling.',
            'You feel cold, and think about how the house needs better heating.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'friend',
        type: 'panel',
        templateOptions: {
          paragraph: 'MEETING A FRIEND: You arrive a little late, and...',
          questions: [
            'Order your favorite snack.',
            'Notice the bar smells gross.',
            'Get a call from your friend who is on her way, but running late.',
            'Think your friend decided she did not want to see you.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'lunch',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE LUNCH: Your friend looks at you...',
          questions: [
            'Because she thinks you are a slob.',
            'And you frown because you forgot to bring water to lunch.',
            'Because she is paying attention as you describe your weekend plans.',
            'And you smile because your lunch tastes good.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'shopping',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE SHOPPING TRIP: You think about your recent health...',
          questions: [
            'And think you are probably coming down with the strange illness.',
            'And think you are unlikely to catch the strange illness.',
            'And smile because you enjoy shopping.',
            'And feel bored of shopping.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
      {
        key: 'blood',
        type: 'panel',
        templateOptions: {
          paragraph: 'THE BLOOD TEST: The doctor says he will call you in a few weeks...',
          questions: [
            'And you think about how nice your doctor is.',
            'And you are annoyed because your doctor is not very friendly.',
            'And you think that you will not be able to stand your anxiety while you wait.',
            'And you know that you can handle your anxiety while you wait.',
          ],
          answers: ['Very different', 'Different', 'Similar', 'Very similar', 'Prefer not to answer'],
        },
      },
    ],
  },
  {
    name: 'BBSIQ',
    title: 'Why Things Happen',
    description:
      'In this section, 14 situations are presented in which it is not quite clear what is happening. Please rate the extent to which you think each of the three explanations for a situation would be likely to be true if you found yourself in that situation. Use the scale below for your ratings.',
    fields: [
      {
        key: 'visitorAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You have visitors over for dinner and they leave sooner than you expected. Why?',
          questions: [
            'They did not wish to outstay their welcome.',
            'They had another pressing engagement to go to.',
            'They did not enjoy the visit and were bored with your company.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'breathAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You feel short of breath. Why?',
          questions: [
            'You are developing the flu.',
            'You are about to suffocate or stop breathing.',
            'You are physically “out of shape.”',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'visionAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'Your vision has become slightly blurred. Why?',
          questions: [
            'You have strained your eyes slightly.',
            'You need to get glasses or change your existing glasses.',
            'This is the sign of a serious illness.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'ignoreAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You go into a shop and the assistant ignores you. Why?',
          questions: [
            'They are bored with their job, and this makes them rude.',
            'They are concentrating very hard on something else.',
            'They find you irritating and resent your presence.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'lightheadedAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You feel lightheaded and weak. Why?',
          questions: [
            'You are about to faint.',
            'You need to get something to eat.',
            'You didn’t get enough sleep last night.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'smokeAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You smell smoke. What’s burning?',
          questions: ['Your house is on fire.', 'Some food is burning.', 'Someone is smoking a cigarette.'],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'ownHouseAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'A friend suggests that you change the way that you’re doing a job in your own house. Why?',
          questions: [
            'They are trying to be helpful.',
            'They think you’re incompetent.',
            'They have done the job more often and know an easier way.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'chestAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'Your chest feels uncomfortable and tight. Why?',
          questions: ['You have indigestion.', 'You have a sore muscle.', 'Something is wrong with your heart.'],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'joltAnswers',
        type: 'panel',
        templateOptions: {
          paragraph:
            'You wake with a jolt in the middle of the night, thinking you heard a noise, but all is quiet. What woke you up?',
          questions: [
            'You were woken by a dream.',
            'A burglar broke into your house.',
            'A door or window rattled in the wind.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'partyAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You are introduced to someone at a party. The person fails to reply to a question you ask. Why?',
          questions: [
            'They did not hear the question.',
            'They think you are uninteresting and boring.',
            'They were preoccupied with something else at the time.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'heartAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You notice that your heart is beating quickly and pounding. Why?',
          questions: [
            'Because you have been physically active.',
            'Because there is something wrong with your heart.',
            'Because you are feeling excited.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'confusedAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'Suddenly, you feel confused and find it hard to think straight. Why?',
          questions: [
            'You are going out of your mind.',
            'You are coming down with a cold.',
            'You’ve been working too hard and need a rest.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'urgentAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'A letter marked "URGENT" arrives. What is in the letter?',
          questions: [
            'It is junk mail designed to attract your attention.',
            'You forgot to pay a bill.',
            'It is news that someone you know has died or is seriously ill.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'dizzyAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'You notice that your heart is pounding, and you feel breathless, dizzy, and unreal. Why?',
          questions: [
            'You have been overdoing it and are overtired.',
            'Something you ate disagreed with you.',
            'You are dangerously ill or going mad.',
          ],
          answers: [
            'Not at all likely',
            'A little likely',
            'Moderately likely',
            'Very likely',
            'Extremely likely',
            'Prefer not to answer',
          ],
        },
      },
    ],
  },
  {
    name: 'Comorbid',
    title: 'Mood and Drinking Patterns',
    description:
      'The following questions ask about mood and drinking patterns. For each question, select the number for the answer that best describes your experience.',
    fields: [
      {
        key: 'interestAnswers',
        type: 'panel',
        templateOptions: {
          paragraph: 'Over the past two weeks, how often have you been bothered by any of the following problems?',
          questions: ['Little interest or pleasure in doing things', 'Feeling down, depressed, or hopeless'],
          answers: [
            'Not at all',
            'Several days',
            'More than half of the days',
            'Nearly every day',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'alcoholComor',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the number for the answer that best describes your experience.',
          questions: ['How often do you have a drink containing alcohol?'],
          answers: [
            'Never',
            'Monthly or less',
            '2 to 4 times a month',
            '2 to 3 times a week',
            '4 or more times a week',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'alcoholComor2',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the number for the answer that best describes your experience.',
          questions: ['How many drinks containing alcohol do you have on a typical day when you are drinking?'],
          answers: ['0 to 2', '3 or 4', '5 or 6', '7 to 9', '10 or more', 'Prefer not to answer'],
        },
      },
      {
        key: 'alcoholComor3',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each question, select the number for the answer that best describes your experience.',
          questions: ['How often do you have six or more drinks on one occasion?'],
          answers: [
            'Never',
            'Less than monthly',
            'Monthly',
            '2 to 3 times a week',
            '4 or more times a week',
            'Prefer not to answer',
          ],
        },
      },
    ],
  },
  {
    name: 'Wellness',
    title: 'What I Believe',
    description:
      'Below, a number of statements related to thoughts and feelings are presented. For each statement, select the number for the answer that best describes your own perspective.',
    fields: [
      {
        key: 'lifeWhole',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each statement, select the number for the answer that best describes your own perspective.',
          questions: ['All things considered, how satisfied are you with your life as a whole?'],
          answers: [
            '0 (Completely dissatisfied)',
            '1',
            '2',
            '3',
            '4',
            '5 (Neither satisfied nor dissatisfied)',
            '6',
            '7',
            '8',
            '9',
            '10 (Completely satisfied)',
            'Prefer not to answer',
          ],
        },
      },
      {
        key: 'difficultSituations',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each statement, select the number for the answer that best describes your own perspective.',
          questions: [
            'When facing difficult tasks, I am certain that I will accomplish them.',
            'I am confident that I can perform well on many different tasks.',
            'Compared to other people, I can do most tasks very well.',
          ],
          answers: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree', 'Prefer not to answer'],
        },
      },
      {
        key: 'learnNewThings',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each statement, select the number for the answer that best describes your own perspective.',
          questions: [
            "You can learn new things, but you can't really change how you think.",
            'No matter how much you have been thinking a particular way, you can always change it quite a bit.',
            'You can always substantially change how you think.',
          ],
          answers: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree', 'Prefer not to answer'],
        },
      },
      {
        key: 'goWrong',
        type: 'panel',
        templateOptions: {
          paragraph: 'For each statement, select the number for the answer that best describes your own perspective.',
          questions: ['If something can go wrong with me, it will.', 'I hardly ever expect things to go my way.'],
          answers: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree', 'Prefer not to answer'],
        },
      },
    ],
  },
];
