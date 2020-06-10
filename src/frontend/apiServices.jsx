import * as SecureStore from 'expo-secure-store';

// const apiPath = 'http://mindtrails-flask-env.eba-4iqbibpk.us-east-1.elasticbeanstalk.com/api/';
const apiPath = 'http://127.0.0.1:5000/api/';

const errors = {
  error: 'There was an error creating your account, please try again.',
  username_taken: 'This username is already taken, please choose another.',
};

async function get(path, token) {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(path, {
      method: 'GET',
      headers,
    });

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return {
      code: 'error',
    };
  }
}

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
  async register(data) {
    const path = `${apiPath}signup`;
    const response = await post(path, data, false);
    return {
      code: response.code,
      errorMessage: errors[response.code],
    };
  },
  async login(data) {
    const path = `${apiPath}login`;
    const response = await post(path, data, false);
    if (response.code == 'success') {
      const userToken = { token: response.token };
      await SecureStore.setItemAsync('userToken', JSON.stringify(userToken));
    }
    return response;
  },
  async getForms(token) {
    const path = `${apiPath}allforms`;
    const response = await get(path, token);
    console.log(response);
    return response;
  },
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
};
