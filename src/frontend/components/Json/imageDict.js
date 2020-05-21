// React Native needs require to have a static path because it bundles it during compile time
// therefore for now we will create this array with each one. React Native doesn't have a problem
// doing dynamic request though. So if the images are served on a website, you can dynamically pass it the url no problem.
const imageDict = [
  {
    // "small": require('../../assets/scenario1Corner.png'),
    // "large" : ....
    placeholder: 'zero',
  },
  {
    small: require('../../assets/scenario1Corner.png'),
    large: require('../../assets/scenario1.png'),
  },
];

export default imageDict;
