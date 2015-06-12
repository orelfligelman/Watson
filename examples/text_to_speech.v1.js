'use strict';

var watson = require('watson-developer-cloud');
var fs = require('fs');

var text_to_speech = watson.text_to_speech({
  username: '5d72222c-b03d-4512-a6a6-dff62f037836',
  password: '0m3uHz4V0q4P',
  version: 'v1'
});

var params = {
  text: 'Hello from IBM Watson',
  voice: 'VoiceEnUsMichael', // Optional voice
  accept: 'audio/wav'
};

// Pipe the synthesized text to a file
text_to_speech.synthesize(params).pipe(fs.createWriteStream('output.wav'));
