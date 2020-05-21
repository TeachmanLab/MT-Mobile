import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './Home.jsx';
import CreateAccount from './CreateAccount.jsx';
import Login from './Login.jsx';
import Progress from './Progress.jsx';
import Eligible from './Information/Eligible.jsx';
import Ineligible from './Information/Ineligible.jsx';
import About from './Information/About.jsx';
import ContactUs from './Information/ContactUs.jsx';
import EligibilityQuestionnaire from './EligibilityQuestionnaire.jsx';
import FormWrapper from './FormWrapper.jsx';
import AccountSettings from './AccountComponents/AccountSettings';
import MyAccount from './AccountComponents/MyAccount';
import EditInformation from './AccountComponents/EditInformation';
import ExitQuestionnaire from './Information/ExitQuestionnaire';
import ExitStudy from './Information/ExitStudy';
import Debrief from './Information/Debrief';

const Hidden = () => null;

// Overall navigation for app, new pages must be placed with MyDrawerNavigator in order to view them
// Any main pages (Home, About, Contact Us, etc.) will appear in the Drawer slide-in
// Sub-pages (Eligibility Questionnaire, Eligible, Ineligible) should have a drawer label of hidden to avoid appearing in the drawer
const MyDrawerNavigator = createDrawerNavigator(
  {

    'Account Settings': {
      screen: AccountSettings,
    },
    'Change Password': {
      screen: EditInformation,
    },
    Progress: {
      screen: Progress,
    },
    'About Us': {
      screen: About,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
    'Contact Us': {
      screen: ContactUs,
    },
    'Exit the Study': {
      screen: ExitStudy,
    },
    'Log Out': {
      screen: Home,
    },
    'Eligibility Questionnaire': {
      screen: EligibilityQuestionnaire,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
    Eligible: {
      screen: Eligible,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
    Ineligible: {
      screen: Ineligible,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
    'Create Account': {
      screen: CreateAccount,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
    Login: {
      screen: Login,
      // options: { unmountOnBlur: true },
      unmountOnBlur: true,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
    FormWrapper: {
      screen: FormWrapper,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
    // 'Account Settings': {
    //   screen: AccountSettings,
    //   navigationOptions: {
    //     drawerLabel: <Hidden />,
    //   },
    // },
    // 'Edit Information': {
    //   screen: EditInformation,
    //   navigationOptions: {
    //     drawerLabel: <Hidden />,
    //   },
    // },
    // 'Exit the Study': {
    //   screen: ExitStudy,
    //   navigationOptions: {
    //     drawerLabel: <Hidden />,
    //   },
    // },
    Debrief: {
      screen: Debrief,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
    ExitQuestionnaire: {
      screen: ExitQuestionnaire,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
  },
  {
    initialRouteName: 'Log Out',
    drawerType: 'front',
    drawerPosition: 'right',
    // unmountInactiveRoutes: true,
  },
);
// Container to pass the drawer navigator in the app, this will be the main component exported by the app
const Navigation = createAppContainer(MyDrawerNavigator);
export default Navigation;
