'use strict';

var watson = require('watson-developer-cloud');
var fs = require('fs');

var speech_to_text = watson.speech_to_text({
  username: '4af7e477-f841-47c4-9fa1-9365f35c1f3a',
  password: "P6kBEqaDjDDN",
  version: 'v1'
});

var params = {
  // From file
  audio: fs.createReadStream('./resources/speech.wav'),
  content_type: 'audio/l16; rate=44100'
};

speech_to_text.recognize(params, function(err, res) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});
