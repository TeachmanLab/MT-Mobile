const apiPath = 'http://mindtrails-flask-env.eba-4iqbibpk.us-east-1.elasticbeanstalk.com/api/';

const errors = {
  error: 'There was an error creating your account, please try again.',
  username_taken: 'This username is already taken, please choose another.',
};

async function post(path, data, needsToken) {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (needsToken) {
      headers.Authorization = 'Bearer ';
    }

    const response = await fetch(path, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return {
      code: 'error',
    };
  }
}

export default {
  async saveAnswers(token, formName, questionIndex, answer) {
    try {
      const postBody = {
        name: formName,
        questionIndex,
        answers: {},
      };

      postBody.answers[answer.key] = {
        question: answer.question,
        response: answer.response,
        duration: answer.duration,
      };

      const path = `${apiPath}saveanswers`;

      const response = await fetch(path, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postBody),
      });

      const responseJson = await response.json();

      return responseJson.code === 'success';
    } catch (error) {
      console.log('Error submitting answers');
      return false;
    }
  },
  async register(data) {
    const path = `${apiPath}signup`;
    const response = await post(path, data, false);
    return {
      code: response.code,
      errorMessage: errors[response.code],
    };
  },
  async login(data) {
    try {
      const { email, password } = data;
      const path = `${apiPath}login`;
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const responseJson = await response.json();
      if (responseJson.code !== 'success') {
        // TODO; add different error messages based on return, backend also needs changed
        return {
          code: 'error',
          errorMessage: 'There was an error logging you in',
        };
      }
      const userToken = { token: responseJson.token };
      await SecureStore.setItemAsync('userToken', JSON.stringify(userToken));
      return {
        code: 'success',
      };
    } catch (error) {
      return {
        code: 'error',
        errorMessage: 'There was an error logging you in',
      };
    }
  },
  async checkEligible() {
    try {
      const { navigation } = this.props;
      const { eligibleAnswers } = this.state;
      let newModel = {};
      Object.keys(eligibleAnswers).forEach((key) => {
        const mapVal = indexToType[key];
        const mapKey = eligibleAnswers[key];
        newModel[mapVal] = mapKey;
      });
      const tempModel = { ...this.state };
      delete tempModel.eligibleAnswers;
      newModel = { ...newModel, ...tempModel };
      const path = `${apiPath}eligible`;
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newModel),
      });
      const responseJson = await response.json();
      if (responseJson.eligible) {
        navigation.navigate('Eligible', { go_back_key: navigation.state.key });
        return responseJson;
      }
      navigation.navigate('Ineligible', { go_back_key: navigation.state.key });
      return responseJson;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
