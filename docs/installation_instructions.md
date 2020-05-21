## Table of Contents
1. [Installation Guide](#installation-guide) 
2. [Assumptions](#assumptions)  
3. [Frontend Installation](#frontend-react-native-installation)
4. [Backend Installation](#backend-flask-installation)
5. [Demo App Guide](#demo-guide)

# Installation Guide

## Installation Overview
- Installation and Demo instructions for future MindTrails developers to pick up and continue our work.  

## Assumptions  
- Node 10 LTS or greater installed
- Amazon Web Services Account
- AWS CLI installed (https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- AWS Elastic Bean CLI installed (https://github.com/aws/aws-elastic-beanstalk-cli-setup)
- Simulator Options 
  * Easiest
    * Go get the Expo app on your Android or iOS device. It's available on the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US) and on the [iOS App Store](https://apps.apple.com/us/app/expo-client/id982107779)
    * Create a free Expo Account 
    * Note: for this option your Android or IOS device must be connected to the same WiFi as your Expo tunnel
  * For Windows/Linux Users
    * Download and install JDK (v7 or newer)
    * Download and install Android Studio
  * For Mac 
    * Download and install Xcode. Needed for IOS simulators 
- For Development
  * You’ve downloaded and unzipped the latest release of the source code from github repo into development environment. 
  * Currently that is v1.0.0 

## Frontend React Native Installation
- Instructions on getting React Native development running.
- Since we are building a mobile app, the app would technically be deployed to the App Store or Google Play Store. Therefore, these installation instructions are for starting a development tunnel for an expo tunnel that would serve the React Native frontend. 

### Starting Expo
- On the machine you will be developing on, use npm to install the Expo CLI command line utility: `npm install -g expo-cli`
- From unzipped code source folder named MindTrails-[version] run `cd src/frontend`
- Run `npm install` to install project depencendies 
- Inside the frontend folder there is a file named `package.json` that contains a list of scripts/commands available for starting an expo tunnel and running test.  
- To start the expo tunnel run `expo start` 
  * Take note of the localhost port that expo opens for you (e.g. http://localhost:19002)

Congratulations! You have succesfully started up an Expo tunnel to serve the frontend. Open the localhost port through a web broswer. 

### Starting Simulator 
- Expo App 
  * The tunnel will display a QR code in the bottom left corner of the screen. 
  * On Android, open the Expo App, go to Projects and scan the QR Code. For iOS, open up the native camera app on your phone and scan the QR code. 
- Android device/emulator 
  * In the tunnel, click `Run on Android device/emulator` 
- IOS Simulator 
  * In the tunnel, click `Run on IOS Simulator`
  
Congratulations! You are now free to develop into the sunset.

## Backend Flask Installation
- In your terminal, navigate to Mindtrails/src/backend
- To double-check you are in the correct directory, make sure the file "application.py" is contained in your current directory
- Initialize a new AWS Elastic Bean repository with the command `eb init -p python-3.6 flask-tutorial --region us-east-2`
- Create a new Elastic Bean environment and add the Flask app to it with the command: `eb create mindtrails-flask-env`
- It may take several minutes for the AWS environment to be fully set up, the console will output when the process has finished
- Once your environment has been successfully created, you can access the backend by running the command: `eb open` inside the backend directory

# Demo Guide 

### Demo Overview
- This section includes instructions for the customer/white team to access and test the app 

### How to access App: 
1. Download the Expo app 
* Google Play Store link – https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US
* App Store link – https://apps.apple.com/us/app/expo-client/id982107779
2. Open the Expo app and login in using these credentials: 
* Username: MindTrails
* Password: MindTrails2020! (case-sensitive)
3. Ensure you are in the Profile section in the expo navbar 
* ![Alt text](PublishedProjects.png?raw=true "Title")
4. Click on MindTrails under Published Projects to get the most recent build


### Current Implemented First-Time User Flow
1. User would hit the Get Started Button 
2. They would then fill in the Eligibility Questionnaire by dragging the sliders to select their answers. Note: eligibility is determined using the logic found on the MindTrails GitHub page
3. If brought to the Eligibility screen the User is then able to click the Learn More button which will navigate them to the Create an Account Screen
4. After filling out the form the User can select the Give Consent and Create Account button which will navigate them to the Log in Screen
5. User would Log in with the Username and Password they just created
6. User would then be brought to the Progress screen
7. User can then hit the Start button to begin filling out the forms we implemented 
8. After filling out all the forms the User will be brought back to the Progress screen. This time displaying “Section complete” underneath their completed forms


### Credentials 

- Login to Expo: 
  * Username: MindTrails
  * Password: MindTrails2020!
- Profile Screen in Expo should look like this 
  * ![Alt text](PublishedProjects.png?raw=true "Title")

