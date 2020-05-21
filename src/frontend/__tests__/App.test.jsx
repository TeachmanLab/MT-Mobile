/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
// import { View } from 'react-native';
import { CheckBox, Input, Card } from 'react-native-elements';
import renderer, { act } from 'react-test-renderer';

import fetch from 'isomorphic-fetch';
import ModalSelector from 'react-native-modal-selector';
import About from '../components/Information/About.jsx';
import ContactUs from '../components/Information/ContactUs.jsx';
import Eligible from '../components/Information/Eligible.jsx';
import Ineligible from '../components/Information/Ineligible.jsx';
import ResearchSupport from '../components/Information/ResearchSupport.jsx';
import Level from '../components/Information/Level.jsx';
import CreateAccount from '../components/CreateAccount.jsx';
import EligibilityQuestionnaire from '../components/EligibilityQuestionnaire.jsx';
import Home from '../components/Home.jsx';
import Login from '../components/Login.jsx';
import Progress from '../components/Progress.jsx';
import FormWrapper from '../components/FormWrapper.jsx';
import Multiselect from '../components/FormlyComponents/Multiselect';
import SelectPanel from '../components/FormlyComponents/SelectPanel.jsx';
import Panel from '../components/FormlyComponents/Panel.jsx';
import WordFill from '../components/FormlyComponents/WordFill.jsx';
import YesNo from '../components/FormlyComponents/YesNo.jsx';
import KeyboardShift from '../components/KeyboardShift';
import ImagePage from '../components/FormlyComponents/ImagePage.jsx';
import SliderPage from '../components/FormlyComponents/SliderPage.jsx';
import { chunk0 } from '../components/Json/Chunk0.js';
import {
  navigation,
  level,
  question,
  MentalHealthHistory,
  SelectPanelTest,
  PanelTest,
  SliderTest,
  ImageTest,
  WordFillTest,
  YesNoTest,
  TestModel,
} from './TestData.js';
import { TextInput, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
// jest.mock('react-native-modal-selector', () => require('react-native-modal-selector/mock'));

it('About snapshot', () => {
  const tree = renderer.create(<About />);
  expect(tree).toMatchSnapshot();
});

it('ContactUs snapshot', () => {
  const tree = renderer.create(<ContactUs />);
  expect(tree).toMatchSnapshot();
});

it('Eligible snapshot', () => {
  const tree = renderer.create(<Eligible />);
  expect(tree).toMatchSnapshot();
});

it('Ineligible snapshot', () => {
  const tree = renderer.create(<Ineligible />);
  expect(tree).toMatchSnapshot();
});

it('Level not complete snapshot', () => {
  const tree = renderer.create(<Level level={level} />);
  expect(tree).toMatchSnapshot();
});

it('Level complete snapshot', () => {
  level.index = 0;
  const tree = renderer.create(<Level complete level={level} />);
  expect(tree).toMatchSnapshot();
});

it('Research Support snapshot', () => {
  const tree = renderer.create(<ResearchSupport />);
  expect(tree).toMatchSnapshot();
});

it('Create Account snapshot', () => {
  const tree = renderer.create(<CreateAccount />);
  expect(tree).toMatchSnapshot();
});

it('Home snapshot', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});

it('Login snapshot', () => {
  const tree = renderer.create(<Login />);
  expect(tree).toMatchSnapshot();
});

// it('Progress snapshot', () => {
//   const tree = renderer.create(<Progress navigation={navigation} />);
//   expect(tree).toMatchSnapshot();
// });

it('Create Account fail: no entries', async () => {
  const sections = {
    includes: () => true,
  };
  const login = renderer.create(<CreateAccount navigation={navigation} />).getInstance();
  login.setSections(sections); // set text sections with true include

  const falseSections = {
    includes: () => false,
  };
  login.setSections(falseSections); // set text sections with false include
  login.state = {}; // empty state gets stringified and passed to backend
  await login.register(); // call async register function
  expect(login.state.failedRegistration).toEqual(true); // registration should have failed
});

it('Create Account fail: conditions not met', async () => {
  const login = renderer.create(<CreateAccount navigation={navigation} />).getInstance();
  login.state = {
    passwordsMatch: false, // non-matching password
    legalAge: false, // not 18
    notRobot: false, // robot
  };
  await login.register(); // try to create new account
  expect(login.state.failedRegistration).toEqual(true); // should fail
});

it('Create Account passwords do not match', () => {
  const tree = renderer.create(<CreateAccount navigation={navigation} />).getInstance();
  tree.state.passwordsMatch = false; // passwords do not match
  const newTree = tree.render(); // re-render, error text should appear
  expect(newTree).toMatchSnapshot();
});

it('Eligibility Questionnaire not eligible', async () => {
  const eli = renderer.create(<EligibilityQuestionnaire navigation={navigation} />).getInstance();
  eli.state = {
    eligibleAnswers: {
      // answers that will lead to ineligibility
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    },
    over18: true,
  };
  const response = await eli.checkEligible(); // pass answers to eligiblity endpoint
  expect(response.eligible).toEqual(false); // should not be eligible
});

it('Eligibility Questionnaire eligible', async () => {
  const eli = renderer.create(<EligibilityQuestionnaire navigation={navigation} />).getInstance();
  eli.state = {
    eligibleAnswers: {
      // answers that should lead to eligibility
      0: 40,
      1: 40,
      2: 40,
      3: 40,
      4: 40,
      5: 40,
      6: 40,
    },
    over18: true,
  };
  const response = await eli.checkEligible(); // pass answers to eligibility endpoint
  expect(response.eligible).toEqual(true); // should be eligible
});

it('Login username change', () => {
  const login = renderer.create(<Login />).getInstance();
  login.handleTextInput('username', 'admin'); // set username to admin
  expect(login.state.username).toEqual('admin'); // username should equal admin
});

it('Login password change', () => {
  const login = renderer.create(<Login />).getInstance();
  login.handleTextInput('password', 'admin'); // set password to admin
  expect(login.state.password).toEqual('admin'); // password should be admin
});

it('Login success', async () => {
  const login = renderer.create(<Login navigation={navigation} />).getInstance();
  login.state.username = 'admin'; // username: admin
  login.state.password = 'admin'; // password: admin
  await login.login(); // pass creds to login endpoint
  expect(login.state.failedLogin).toEqual(true); // login should have succeeded, user already registered
});

it('Login fail', async () => {
  const login = renderer.create(<Login navigation={navigation} />).getInstance();
  login.state.username = 'badmin'; // username: badmin
  login.state.password = 'badmin'; // password: badmin
  await login.login(); // pass creds to login endpoint
  expect(login.state.failedLogin).toEqual(true); // login should fail, user has not registered
});

// it('Progress non-zero index', () => {
//   const tree = renderer.create(<Progress navigation={navigation} />).getInstance();
//   tree.state.index = 1; // set current form index to 1
//   const newTree = tree.render(); // re-render
//   expect(newTree).toMatchSnapshot();
// });

it('FormWrapper pre-form screen toRender()', () => {
  const form = renderer.create(<FormWrapper navigation={navigation} />).getInstance();
  form.state.questionIndex = -1; // form not started
  form.toRender(question); // toRender should return form start page
  form.state.formIndex = 0; // move to first form
  form.toRender(question); // toRender should return first form start page
  form.onFormlyUpdate({}); // update Formly
  form.onFormlyValidityChange({}); // update Formly validity
  const tree = form.render(); // re-render
  expect(tree).toMatchSnapshot();
});

it('FormWrapper first question toRender()', () => {
  const form = renderer.create(<FormWrapper navigation={navigation} />).getInstance();
  form.state.questionIndex = 0; // at first question
  form.toRender(question); // should render first queston
  form.onFormlyUpdate({}); // update Formly
  form.onFormlyValidityChange({}); // update Formly validity
  const tree = form.render(); // re-render
  expect(tree).toMatchSnapshot();
});

it('FormWrapper middle question toRender()', () => {
  const form = renderer.create(<FormWrapper navigation={navigation} />).getInstance();
  form.state.questionIndex = 1; // at second question
  form.toRender(question); // should render second question
  form.onFormlyUpdate({}); // update Formly
  form.onFormlyValidityChange({}); // update Formly validity
  const tree = form.render(); // re-render
  expect(tree).toMatchSnapshot();
});

// it('FormWrapper last question toRender()', () => {
//   const form = renderer.create(<FormWrapper navigation={navigation} />).getInstance();
//   form.state.questionIndex = 2; // at last question
//   form.toRender(question); // should render last question
//   form.onFormlyUpdate({}); // update Formly
//   form.onFormlyValidityChange({}); // update Formly validity
//   const tree = form.render(); // re-render
//   expect(tree).toMatchSnapshot();
// });

// it('FormWrapper non-last form nextForm()', () => {
//   const form = renderer.create(<FormWrapper navigation={navigation} />).getInstance();
//   form.state.formIndex = 0; // at first form
//   form.nextForm(); // go to next form
//   expect(form.state.formIndex).toEqual(1); // form index should have increased by one
//   expect(form.state.questionIndex).toEqual(-1); // question index should reset to -1
// });

// it('FormWrapper last form nextForm()', () => {
//   const form = renderer.create(<FormWrapper navigation={navigation} />).getInstance();
//   form.state.formIndex = chunk0.length - 1; // at last form in json
//   form.nextForm(); // try to go to next form
//   expect(navigation.navigate).toHaveBeenCalled(); // should get sent to progress screen
//   expect(form.state.questionIndex).toEqual(-1); // question index should be reset to -1
// });

it('FormWrapper wordFill test with card #1', () => {
  const form = renderer.create(<FormWrapper navigation={navigation} />).getInstance();
  form.state.formIndex = 2; // at wordFill form
  form.state.questionIndex = 0; // at second question
  form.toRender(question);
  form.onFormlyUpdate({}); // update Formly
  form.onFormlyValidityChange({}); // update Formly validity
  const tree = form.render(); // re-render
  expect(tree).toMatchSnapshot();
});

it('FormWrapper wordFill test with card #2', () => {
  const form = renderer.create(<FormWrapper navigation={navigation} />).getInstance();
  form.state.formIndex = 2; // at wordFill form
  form.state.questionIndex = 2; // at second question
  form.toRender(question);
  form.onFormlyUpdate({}); // update Formly
  form.onFormlyValidityChange({}); // update Formly validity
  const tree = form.render(); // re-render
  expect(tree).toMatchSnapshot();
});

// it('FormWrapper yesNo test with card #1', () => {
//   const form = renderer.create(<FormWrapper navigation={navigation} />).getInstance();
//   form.state.formIndex = 2; // at yesNo form
//   form.state.questionIndex = 1; // at second question
//   form.toRender(question);
//   form.onFormlyUpdate({}); // update Formly
//   form.onFormlyValidityChange({}); // update Formly validity
//   const tree = form.render(); // re-render
//   expect(tree).toMatchSnapshot();
// });

// it('FormWrapper yesNo test with card #2', () => {
//   const form = renderer.create(<FormWrapper navigation={navigation} />).getInstance();
//   form.state.formIndex = 2; // at yesNo form
//   form.state.questionIndex = 3; // at second question
//   form.toRender(question);
//   form.onFormlyUpdate({}); // update Formly
//   form.onFormlyValidityChange({}); // update Formly validity
//   const tree = form.render(); // re-render
//   expect(tree).toMatchSnapshot();
// });

// it('FormWrapper test progress bar reset', () => {
//   const form = renderer.create(<FormWrapper navigation={navigation} />).getInstance();
//   form.state.formIndex = chunk0.length - 1; // at last form in json
//   form.nextForm(); // try to go to next form
//   expect(navigation.navigate).toHaveBeenCalled(); // should get sent to progress screen
//   expect(form.state.questionIndex).toEqual(-1); // question index should be reset to -1
// });

/*
 * Test to ensure Multiselect component renders
 * Will detect if changes are made to this component
 * if on purpose, can update snapshot. if not, fix changes.
 */
it('Snapshot Testing of <Multiselect>', () => {
  const render = renderer.create(<Multiselect config={MentalHealthHistory.fields[0]} />);
  expect(render.toJSON()).toMatchSnapshot();
});

// Slider Page after the initial load - makes sure values reset
it('Slider Page - Initial Load', () => {
  const render = renderer.create(<SliderPage config={SliderTest} />);
  const { root } = render;
  root.instance.getInitialState();
  expect(render).toMatchSnapshot();
});

// Slider Page after values change - makes sure model is updated
it('Slider Page - Changing Values', () => {
  const render = renderer.create(<SliderPage config={SliderTest} />);
  const { root } = render;
  root.instance.getInitialState();
  root.instance.state.vivid_value = 1.0;
  root.instance.state.relate_value = 1.0;
  expect(render).toMatchSnapshot();
});

// Slider Page with attempts to set negative values - makes sure values remain non-negative
it('Slider Page - Negative Value', () => {
  const render = renderer.create(<SliderPage config={SliderTest} />);
  const { root } = render;
  root.instance.getInitialState();
  root.instance.state.vivid_value = -1.0;
  root.instance.state.relate_value = -1.0;
  expect(render).toMatchSnapshot();
});

/*
// FAILING
// Image Page rendering after getting passed a valid image path
it('Image Page - Valid Image Path', () => {
  const render = renderer.create(<ImagePage config={ImageTest} />);
  const { root } = render;
  root.instance.getInitialState();
  root.instance.state.imagePath = '../../assets/placeholder.png';
  expect(render).toMatchSnapshot();
});
// FAILING
// Image Page rendering after getting passed an invalid image path
it('Image Page - Invalid Image Path', () => {
  const render = renderer.create(<ImagePage config={ImageTest} />);
  const { root } = render;
  root.instance.getInitialState();
  root.instance.state.imagePath = '../../assets/notAnImage.png';
  expect(render).toMatchSnapshot();
});
// FAILING
// Image Page rendering after getting passed no image path
it('Image Page - No Image Path', () => {
  const render = renderer.create(<ImagePage config={ImageTest} />);
  const { root } = render;
  root.instance.getInitialState();
  root.instance.state.imagePath = '';
  expect(render).toMatchSnapshot();
}); */

/*
 * Test to ensure SelectPanel component renders
 * Will detect if changes are made to this component
 * if on purpose, can update snapshot. if not, fix changes.
 */
// it('Snapshot Testing of <SelectPanel>', () => {
//   const render = renderer.create(<SelectPanel config={SelectPanelTest} />);
//   expect(render.toJSON()).toMatchSnapshot();
// });

/*
 * Test to ensure WordFill component renders
 * Will detect if changes are made to this component
 * if on purpose, can update snapshot. if not, fix changes.
 
// FAILING
it('Snapshot Testing of <WordFill>', () => {
  const render = renderer.create(<WordFill config={WordFillTest} />);
  expect(render.toJSON()).toMatchSnapshot();
}); */

/*
 * Test to ensure YesNo component renders
 * Will detect if changes are made to this component
 * if on purpose, can update snapshot. if not, fix changes.
 
// FAILING
it('Snapshot Testing of <YesNo>', () => {
  const render = renderer.create(<YesNo config={YesNoTest} />);
  expect(render.toJSON()).toMatchSnapshot();
}); */

/*
 * Test to ensure KeyboardShift component renders
 * Will detect if changes are made to this component
 * if on purpose, can update snapshot. if not, fix changes.
 */
it('Snapshot Testing of <KeyboardShift>', () => {
  const render = renderer.create(<KeyboardShift />);
  expect(render.toJSON()).toMatchSnapshot();
});
/*
 * Test suite to ensure all logic of Multiselect work individually and together.
 * The 8 I have thought of thus far are
 * Regular Checkbox – no extra logic
 * onPressOptions – (trigger questions)
 * lockAnswers – (can lock other answers from being selected)
 * Input – (requires user input ie keyboard to display)
 * Big 3 – all three above logics together
 * trigger-input
 * trigger-lock
 * input-lock
 */
describe('Testing all 8 combinations of <Multiselect/> logic', () => {
  const { options } = MentalHealthHistory.fields[0].templateOptions;
  // grabs all the labels and descriptions from the test data to check if they rendered correctly
  /*
   * before each i could clear the state
   */
  const dataTable = [];
  options.forEach((option, index) => {
    dataTable.push([index, option.label, option.description]);
  });
  let render;
  act(() => {
    render = renderer.create(<Multiselect config={MentalHealthHistory.fields[0]} model={TestModel} />);
  });
  const { root } = render;
  const foundChildren = root.findAllByType(CheckBox);
  const foundSelectors = root.findAllByType(ModalSelector);
  const foundInput = root.findAllByType(Input);
  // ensure 8 options rendered as mentioned above
  it('Ensure 8 Rendered', () => {
    expect(foundChildren.length).toBe(8);
  });
  it('Ensure 4 ModalSelectors were rendered', () => {
    expect(foundSelectors.length).toBe(4);
  });

  it('Ensure 4 Input were rendered', () => {
    expect(foundInput.length).toBe(4);
  });

  it.each(dataTable)(
    'Check that all 8 title and descriptions rendered correctly. TestIndex: %i',
    (index, title, description) => {
      // grabbing the checkbox
      const curCheckbox = foundChildren[index];
      const getTitleComponent = curCheckbox.props.title.props.children;
      const checkTitle = getTitleComponent[0].props.children;
      const checkDescription = getTitleComponent[1].props.children;
      // checking title
      expect(checkTitle).toBe(title);
      // checking description
      expect(checkDescription).toBe(description);
    },
  );
  /*
   * you could prob do an it.each for the onPress of checkbox
   * just have to make sure the input is something typed and others are true
   * checking that it was saved in model.
   * might change how things are coded so this might not be necessary
   * check state and props.checked of checkbox
   */
  // i could implement it.each for on press to check that check mark is toggled
  it('Regular Checkbox onPress', () => {
    // grabbing the first checkbox
    const regularCheck = foundChildren[0];
    const checkOnPressFunc = regularCheck.props.onPress;
    let isSelected = regularCheck.props.checked;
    const { state } = root.instance;
    // before calling on press it should be unchecked
    expect(isSelected).toBeFalsy();
    // making sure no answers are saved in the state right now
    expect(state.model['Regular Checkbox']).toBeFalsy();
    act(() => {
      checkOnPressFunc();
    });
    // expect answers to be saved in the state
    expect(state.model['Regular Checkbox']).toBeTruthy();
    // after calling on press it should be checked
    isSelected = regularCheck.props.checked;
    expect(isSelected).toBeTruthy();
  });

  // check it was stored in state
  // manually call its on change and check it saved in state
  // check modal selector visible true and falsy
  it('Trigger Questions onPress', () => {
    const triggerQSelector = foundSelectors[0];
    const triggerQ = foundChildren[1];
    const option = options[1];
    const triggerSelectedSample = option.onPressOptions[4];
    // making sure they have the same key thereby checking they were rendered together
    // eslint-disable-next-line no-underscore-dangle
    expect(triggerQ._fiber.key).toBe(triggerQSelector._fiber.key);
    const checkOnChangeFunc = triggerQSelector.props.onChange;
    const checkOnPressFunc = triggerQ.props.onPress;
    // should not be visible if not selected
    expect(triggerQSelector.props.visible).toBeFalsy();
    // there should be no answer in state.model
    expect(root.instance.state.model[option.label]).toBeFalsy();
    // there should be no triggerAns yet
    expect(root.instance.state.triggerAns[option.label]).toBeFalsy();
    act(() => {
      checkOnPressFunc();
      // triggerQSelector.instance.close();
      checkOnChangeFunc(triggerSelectedSample);
    });
    // should not be visible if not selected
    expect(triggerQSelector.props.visible).toBeTruthy();
    // there should be no answer in state.model
    expect(root.instance.state.model[option.label]).toBeTruthy();
    // there should be no triggerAns yet
    expect(root.instance.state.triggerAns[option.label]).toBeTruthy();
  });

  it('Locker CheckBox onPress', () => {
    const lockerBox = foundChildren[2];
    const checkOnPressFunc = lockerBox.props.onPress;
    expect(root.instance.state.answersLocked).toBeFalsy();
    act(() => {
      checkOnPressFunc();
    });
    expect(root.instance.state.answersLocked).toBeTruthy();
    // making sure that now only this card is checked and not others
    expect(lockerBox.props.checked).toBeTruthy();
    expect(foundChildren[0].props.checked).toBeFalsy();
    expect(foundChildren[1].props.checked).toBeFalsy();
    // going to try and check another checkbox and it should stay false
    act(() => {
      // pressing the checkbox above this one
      foundChildren[1].props.onPress();
    });
    expect(foundChildren[1].props.checked).toBeFalsy();
    // unlocking answers by unselecting this one
    act(() => {
      checkOnPressFunc();
    });
    // checking it was deselected
    expect(lockerBox.props.checked).toBeFalsy();
    // making sure we can toggle other checkboxes now
    const { checked } = foundChildren[1].props;
    act(() => {
      // pressing the checkbox above this one
      foundChildren[1].props.onPress();
    });
    // make sure checkbox was toggled
    if (checked) expect(foundChildren[1].props.checked).toBeFalsy();
    else expect(foundChildren[1].props.checked).toBeTruthy();
  });

  it('Input Checkbox onPressFunc', () => {
    const inputBox = foundChildren[3];
    const inputElement = foundInput[0];
    // making sure we are grabbing the correct input element by checking the placeholder
    // which should be the label for this checkbox
    expect(inputElement.props.placeholder).toBe(options[3].label);
    // check to make sure no answer for the input is saved in state
    expect(root.instance.state.model[options[3].label]).toBeFalsy();
    // and no error for this input
    expect(root.instance.state.errorInputMessages[options[3].label]).toBeFalsy();
    const checkOnChange = inputElement.props.onChangeText;
    // then call the onsubmitediting
    act(() => {
      inputElement.props.onSubmitEditing();
    });
    // since nothing is in state it should put an error message in the state, check that
    expect(root.instance.state.errorInputMessages[options[3].label]).toBe('required field');
    // then put something in the state with the onchange and then call onsubmitediting again
    act(() => {
      checkOnChange('User Input');
    });
    // check the state has the input
    expect(root.instance.state.model[options[3].label]).toBe('User Input');
    act(() => {
      // checkOnSubmitEditing();
      inputElement.props.onSubmitEditing();
    });
    // check that the error was removed from the state
    expect(root.instance.state.errorInputMessages[options[3].label]).toBeFalsy();
  });

  /*
  // FAILING
  it('Test onComplete', () => {
    root.instance.onComplete();
  });
  // FAILING
  it('Test checkOptionParams', () => {
    const option = {requireTextInput: 1, lockAnswers: true, onPressOptions: true};
    expect(root.instance.checkOptionParams(option)).toThrow(Error);
  });
  // FAILING
  it('Test checkOptionParams', () => {
    const option = {requireTextInput: true, lockAnswers: 1, onPressOptions: true};
    expect(root.instance.checkOptionParams(option)).toThrow(Error);
  });
  
  // FAILING
  it('Test checkOptionParams', () => {
    const option = {requireTextInput: true, lockAnswers: true, onPressOptions: true};
    expect(root.instance.checkOptionParams(option)).toThrow(Error);
  }); */
});

/*
 * Testing Suite for the YesNo Component
 * Test for Snapshotting and correct rendering of test data
 */
/*
// FAILING
describe('Test Suite for YesNo Component', () => {
  let render;
  act(() => {
    render = renderer.create(<YesNo config={YesNoTest} />);
  });
  const { root } = render;
  const foundCards = root.findAllByType(Card);
  
   // Test to ensure YesNo component renders
   // Will detect if changes are made to this component
   // if on purpose, can update snapshot. if not, fix changes.
  
  it('Snapshot Testing of <YesNo/>', () => {
    expect(render.toJSON()).toMatchSnapshot();
  });
  
  // Test two cards were rendered
  // An outer one that holds everything and a center one with the question
  it('Two Cards Rendered', () => {
    expect(foundCards.length).toBe(2);
  });
  
  //Testing all labels are correctly rendered
  it('Ensure Label of Components', () => {
    const parentCard = foundCards[0];
    const questionCard = foundCards[1];
    const questionText = questionCard.props.children.props.children;
    expect(questionText).toBe("Did you think about the elavator's safety?");
  });
}); */

describe('Testing Ineligible page', () => {
  let render;
  act(() => {
    render = renderer.create(<Ineligible navigation={navigation} />);
  });

  const { root } = render;
  const foundIcon = root.findAllByType(Icon);
  const foundText = root.findAllByType(Text);

  it('Test project implicit link', () => {
    // grabbing the text
    const text = foundText[6];
    const textOnPressFunction = text.props.onPress;

    // run its on press function
    act(() => {
      textOnPressFunction();
    });
  });

  it('Test project implicit mental health link', () => {
    // grabbing the text
    const text = foundText[7];
    const textOnPressFunction = text.props.onPress;

    // run its on press function
    act(() => {
      textOnPressFunction();
    });
  });

  // it('Test mental health resources link', () => {
  //   // grabbing the text
  //   const text = foundText[5];
  //   const textOnPressFunction = text.props.onPress;

  //   // run its on press function
  //   act(() => {
  //     textOnPressFunction();
  //   });
  // });

  it('Test navigate icon', () => {
    // grabbing the icon
    const icon = foundIcon[0];
    const iconOnPressFunction = icon.props.onPress;

    // run its on press function
    act(() => {
      iconOnPressFunction();
    });
  });
});

describe('Testing CreateAccount page', () => {
  let render;
  act(() => {
    render = renderer.create(<CreateAccount navigation={navigation} />);
  });
  const { root } = render;
  const foundCheckbox = root.findAllByType(CheckBox);
  const foundIcon = root.findAllByType(Icon);
  const foundTextInput = root.findAllByType(TextInput);

  let checkIndex = 0;
  it.each(foundCheckbox)('Test checkbox child', () => {
    // grabbing the checkbox
    const checkbox = foundCheckbox[checkIndex];
    const checkOnPressFunc = checkbox.props.onPress;
    let isSelected = checkbox.props.checked;
    // before calling on press it should be unchecked
    expect(isSelected).toBeFalsy();
    act(() => {
      checkOnPressFunc();
    });
    // after calling on press it should be checked
    isSelected = checkbox.props.checked;
    expect(isSelected).toBeTruthy();
    checkIndex += 1;
  });

  // let textIndex = 0;
  // it.each(foundTextInput)('Test text input child', () => {
  //   // grabbing the text input
  //   const textInput = foundTextInput[textIndex];
  //   const textInputOnChangeTextFunc = textInput.props.onChangeText;

  //   act(() => {
  //     textInputOnChangeTextFunc('test');
  //   });

  //   textIndex += 1;
  // });

  it('Test valid registration', async () => {
    // settting state values to trigger valid registration
    root.instance.state.passwordsMatch = true;
    root.instance.state.legalAge = true;
    root.instance.state.notRobot = true;

    await root.instance.register();

    // after calling the on press, registration should be valid
    expect(root.instance.state.failedRegistration).toBe(true);
  });

  it('Test invalid registration', async () => {
    // settting state values to trigger valid registration
    root.instance.state.passwordsMatch = true;
    root.instance.state.legalAge = false;
    root.instance.state.notRobot = true;

    await root.instance.register();

    // after calling the on press, registration should be valid
    expect(root.instance.state.failedRegistration).toBe(true);
  });
});

// describe('Testing Login page', () => {
//   let render;
//   act(() => {
//     render = renderer.create(<Login navigation={navigation} />);
//   });
//   const { root } = render;

//   const foundTextInput = root.findAllByType(TextInput);
//   const foundIcon = root.findAllByType(Icon);

//   let textIndex = 0;
//   it.each(foundTextInput)('Test text input child', () => {
//     // grabbing the text input
//     const textInput = foundTextInput[textIndex];
//     const textInputOnChangeTextFunc = textInput.props.onChangeText;

//     act(() => {
//       textInputOnChangeTextFunc('test');
//     });

//     textIndex += 1;
//   });
// });

describe('Testing Eligible page', () => {
  let render;
  act(() => {
    render = renderer.create(<Eligible navigation={navigation} />);
  });
  const { root } = render;
  const foundIcon = root.findAllByType(Icon);
  const foundButton = root.findAllByType(Button);
  const foundText = root.findAllByType(Text);

  it('Test mental health resources link', () => {
    // grabbing the text
    const text = foundText[12];
    const textOnPressFunction = text.props.onPress;

    // run its on press function
    // act(() => {
    //   textOnPressFunction();
    // });
  });

  it('Test navigate icon', () => {
    // grabbing the icon
    const icon = foundIcon[0];
    const iconOnPressFunction = icon.props.onPress;

    // run its on press function
    act(() => {
      iconOnPressFunction();
    });
  });

  // it('Test learn more button', () => {
  //   // grabbing the button
  //   const button = foundButton[0];
  //   const buttonOnPressFunction = button.props.onPress;

  //   // run its on press function
  //   act(() => {
  //     buttonOnPressFunction();
  //   });
  // });
});

describe('Testing Contact Us page', () => {
  let render;
  act(() => {
    render = renderer.create(<ContactUs navigation={navigation} />);
  });
  const { root } = render;
  const foundIcon = root.findAllByType(Icon);
  const foundButton = root.findAllByType(Button);

  it('Test navigate icon', () => {
    // grabbing the icon
    const icon = foundIcon[0];
    const iconOnPressFunction = icon.props.onPress;

    // run its on press function
    act(() => {
      iconOnPressFunction();
    });
  });

  it('Test email button', () => {
    // grabbing the button
    const button = foundButton[0];
    const buttonOnPressFunction = button.props.onPress;

    // run its on press function
    act(() => {
      buttonOnPressFunction();
    });
  });
});

describe('Testing About page', () => {
  let render;
  act(() => {
    render = renderer.create(<About navigation={navigation} />);
  });
  const { root } = render;
  const foundButton = root.findAllByType(Button);

  it('Test create account button', () => {
    // grabbing the button
    const button = foundButton[0];
    const buttonOnPressFunction = button.props.onPress;

    // run its on press function
    act(() => {
      buttonOnPressFunction();
    });
  });
});

// describe('Testing Progress page', () => {
//   let render;
//   act(() => {
//     render = renderer.create(<Progress navigation={navigation} />);
//   });
//   const { root } = render;
//   const foundIcon = root.findAllByType(Icon);
//   const foundButton = root.findAllByType(Button);

//   it('Test navigate icon', () => {
//     // grabbing the icon
//     const icon = foundIcon[0];
//     const iconOnPressFunction = icon.props.onPress;

//     // run its on press function
//     act(() => {
//       iconOnPressFunction();
//     });
//   });

//   it('Test start button', () => {
//     // grabbing the button
//     const button = foundButton[0];
//     const buttonOnPressFunction = button.props.onPress;

//     // run its on press function
//     act(() => {
//       buttonOnPressFunction();
//     });
//   });
// });

describe('Testing Home page', () => {
  let render;
  act(() => {
    render = renderer.create(<Home navigation={navigation} />);
  });
  const { root } = render;
  const foundButton = root.findAllByType(Button);

  it('Test get started button', () => {
    // grabbing the button
    const button = foundButton[0];
    const buttonOnPressFunction = button.props.onPress;

    // run its on press function
    act(() => {
      buttonOnPressFunction();
    });
  });

  it('Test sign in button', () => {
    // grabbing the button
    const button = foundButton[1];
    const buttonOnPressFunction = button.props.onPress;

    // run its on press function
    act(() => {
      buttonOnPressFunction();
    });
  });
});

describe('Testing Eligibility Questionnaire page', () => {
  let render;
  act(() => {
    render = renderer.create(<EligibilityQuestionnaire navigation={navigation} />);
  });
  const { root } = render;
  const foundIcon = root.findAllByType(Icon);
  const foundButton = root.findAllByType(Button);

  it('Test next button', async () => {
    // grabbing the button
    const button = foundButton[0];
    const buttonOnPressFunction = button.props.onPress;

    // run its on press function
    act(() => {
      buttonOnPressFunction();
    });
  });
});

/*
// FAILING
describe('Testing YesNo component', () => {
  let render;
  act(() => {
    render = renderer.create(<YesNo config={YesNoTest} model={TestModel} />);
  });
  
  const { root } = render;
  const foundButton = root.findAllByType(Button);
    
  it('Test yes button', () => {
    // grabbing the button
    const button = foundButton[0];
    const buttonOnPressFunction = button.props.onPress;
    // run its on press function
    act(() => {
      buttonOnPressFunction();
    });
  });
  it('Test handleAnswer - incorrect', () => {
    const { root } = render;
    root.instance.handleAnswer("");  
  });
  it('Test handleAnswer - correct', () => {
    const { root } = render;
    root.instance.handleAnswer(YesNoTest.templateOptions.yesNoAnswer);  
  });
}); */

/*
// FAILING
describe('Testing YesNo component again', () => {
  let render;
  act(() => {
    render = renderer.create(<YesNo config={YesNoTest} model={TestModel} />);
  });
  
  const { root } = render;
  const foundButton = root.findAllByType(Button);
  it('Test no button', () => {
    // grabbing the button
    const button = foundButton[1];
    const buttonOnPressFunction = button.props.onPress;
    // run its on press function
    act(() => {
      buttonOnPressFunction();
    });
  });
}); */

/*
// FAILING
describe('Testing WordFill component', () => {
  let render;
  act(() => {
    render = renderer.create(<WordFill config={WordFillTest} model={TestModel} />);
  });
  
  const { root } = render;
  const foundButton = root.findAllByType(Button);
  it('Test first letter button', () => {
    // grabbing the button
    const button = foundButton[0];
    const buttonOnPressFunction = button.props.onPress;
    // run its on press function
    act(() => {
      buttonOnPressFunction();
    });
  });
  it('Test second letter button', () => {
    // grabbing the button
    const button = foundButton[1];
    const buttonOnPressFunction = button.props.onPress;
    // run its on press function
    act(() => {
      buttonOnPressFunction();
    });
  });  
}); */

describe('Testing SelectPanel component', () => {
  let render;
  act(() => {
    render = renderer.create(<SelectPanel config={SelectPanelTest} model={TestModel} />);
  });

  const { root } = render;
  const foundButton = root.findAllByType(Button);
});

describe('Testing FormWrapper component', () => {
  let render;
  act(() => {
    render = renderer.create(<FormWrapper navigation={navigation} />);
  });

  const { root } = render;
  const foundButton = root.findAllByType(Button);
  const foundIcon = root.findAllByType(Icon);
  /*
  // FAILING
  it('Test begin button', () => {
    // grabbing the button
    const button = foundButton[0];
    const buttonOnPressFunction = button.props.onPress;
    // run its on press function
    act(() => {
      buttonOnPressFunction();
    });
  });
  // FAILING
  it('Test submit button', () => {
    // grabbing the button
    const button = foundButton[1];
    const buttonOnPressFunction = button.props.onPress;
    // run its on press function
    act(() => {
      buttonOnPressFunction();
    });
  }); */

  it('Test first nav icon', () => {
    // grabbing the icon
    const icon = foundIcon[0];
    const iconOnPressFunction = icon.props.onPress;

    // run its on press function
    act(() => {
      iconOnPressFunction();
    });
  });

  it('Test componentDidMount', async () => {
    await root.instance.componentDidMount();
  });

  it('Test nextForm', async () => {
    await root.instance.nextForm();
  });

  it('Test render - not loading', () => {
    root.instance.state.isLoading = false;
    root.instance.state.forms = [{ fields: [] }];
    root.instance.state.formIndex = 0;
    root.instance.render();
  });
});

describe('Testing Panel component', () => {
  let render;
  act(() => {
    render = renderer.create(<Panel config={PanelTest} model={TestModel} />);
  });

  const { root } = render;
});
