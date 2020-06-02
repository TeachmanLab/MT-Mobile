export const apiPath = 'http://mindtrails-flask-env.eba-4iqbibpk.us-east-1.elasticbeanstalk.com/api/';

export async function saveAnswers(token, formName, questionIndex, answer) {
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

    // console.log(postBody);
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
    // console.log(responseJson);
    return responseJson.code === 'success';
  } catch (error) {
    console.log('Error submitting answers');
    return false;
  }
}

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
        errorMessage: 'There was an error logging you in'
      }
    }
    const userToken = { token: responseJson.token };
    await SecureStore.setItemAsync('userToken', JSON.stringify(userToken));
    return {
      code: 'success'
    }
  } catch (error) {
    return {
      code: 'error',
      errorMessage: 'There was an error logging you in"
  }
}

async register(data) {
  try {
    const { password, confirmPassword, legalAge, notRobot, name, email, phone } = data;
    const path = `${apiPath}signup`;

    const response = await fetch(path, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const responseJson = await response.json();

    if (responseJson.code !== 'success') {
      // TODO: add messages specifying reason for failure, backend should provide
      return {
        code: 'error',
        errorMessage: 'There was an error creating your account, please try again.',
      };
    }

    return {
      code: 'success'
    };
  } catch (error) {
    return {
      code: 'error',
      errorMessage: 'There was an error creating your account, please try again.',
    };
  }
}
