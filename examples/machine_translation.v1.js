'use strict';

var watson = require('watson-developer-cloud');

var machine_translation = watson.machine_translation({
  username: '552be8a2-e6b7-425a-8520-ca3f790fda5c',
  password: '919Mna3EaeBc',
  version: 'v1'
});

machine_translation.translate({
  text: 'A sentence must have a verb', from : 'enus', to: 'eses' },
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});
