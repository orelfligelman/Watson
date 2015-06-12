'use strict';

var watson = require('watson-developer-cloud');

var question_and_answer_healthcare = watson.question_and_answer({
  username: '4db1b5b0-0c98-4fbd-aa44-6570d39b5ed6',
  password: 'Dy4c6p8vdks9',
  version: 'v1',
  dataset: 'healthcare' /* The dataset can be specified when creating
                         * the service or when calling it */
});

question_and_answer_healthcare.ask({
  text: 'What is HIV?'}, function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});
