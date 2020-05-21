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
