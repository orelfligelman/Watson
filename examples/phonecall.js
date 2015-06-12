'use strict';

var watson = require('watson-developer-cloud');
var fs = require('fs');

var speech_to_text = watson.speech_to_text({
  username: '4af7e477-f841-47c4-9fa1-9365f35c1f3a',
  password: "P6kBEqaDjDDN",
  version: 'v1'
});

var machine_translation = watson.machine_translation({
  username: '552be8a2-e6b7-425a-8520-ca3f790fda5c',
  password: '919Mna3EaeBc',
  version: 'v1'
});

var question_and_answer_healthcare = watson.question_and_answer({
  username: '4db1b5b0-0c98-4fbd-aa44-6570d39b5ed6',
  password: 'Dy4c6p8vdks9',
  version: 'v1',
  dataset: 'healthcare' /* The dataset can be specified when creating                      * the service or when calling it */
});

var text_to_speech = watson.text_to_speech({
  username: '5d72222c-b03d-4512-a6a6-dff62f037836',
  password: '0m3uHz4V0q4P',
  version: 'v1'
});


var speech_input = {
  // From file
  audio: fs.createReadStream('./resources/speech.wav'),
  content_type: 'audio/l16; rate=44100'
};

speech_to_text.recognize(speech_input, function(err, speech_res) {
  if (err){
  		console.log(err);
  		return;
  }
    console.log(JSON.stringify(speech_res, null, 2));
    var speech_text = speech_res.results[0].alternatives[0].transcript;
    console.log(speech_text);
//json stringify google
//machine translation
machine_translation.translate({
  text: speech_text, from : 'enus', to: 'eses' },
  function (err, translated_speech_text) {
    if (err){
    	console.log('error:', err);
    	return;
    }
    console.log(JSON.stringify(translated_speech_text, null, 2));

  //question and answer
  question_and_answer_healthcare.ask({
  text:translated_speech_text.translation }, function (err, res) {
    if (err){
    	console.log('error:', err);
    	return;
    }
      console.log(JSON.stringify(res, null, 2));
      // var ans = console.log(res);
      // var ans_one = res[0].question.answers;
      // console.log(ans_one);
      // var ans_two = res[0].question.answers.pipeline;
      // console.log(ans_two);
      // var ans_three = res[0].question.answers[0];
      // console.log(ans_three);
      //  var ans_four = res[0].question.answers[0].pipeline;
      // console.log(ans_four);
      //  var ans_five = res[0].question.answers[0].confidence;
      // console.log(ans_five);
       var ans_six = res[0].question.answers[0]["text"];
      console.log(ans_six);

var params_question = {
  text: ans_six,
  voice: 'VoiceEnUsMichael', // Optional voice
  accept: 'audio/wav'
};

text_to_speech.synthesize(params_question).pipe(fs.createWriteStream('hooray.wav'));
			});
		});
});

