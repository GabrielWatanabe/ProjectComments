const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const watsonCredentials = require('../../watson-nlu.json').apikey;

class TextToSpeechTransform {
     create(req) {
        const textToSpeech = new TextToSpeechV1({
            version: '2019-07-12',
            authenticator: new IamAuthenticator({ apikey: 'KY55_SKr9o4jl4hpzQOaUnUCVOKqIoi3NyFEaaHyoFYc' }),
            url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/4c66f577-5a07-496c-aefc-fe80bbcd296f',
            disableSslVerification: true,
        })
        
        const params = {
          text: req.st_comment,
          voice: 'pt-BR_IsabelaVoice', // Optional voice
          accept: 'audio/wav'
        };
        
        
        textToSpeech
        .synthesize(params)
        .then(response => {
          const audio = response.result;
          return textToSpeech.repairWavHeaderStream(audio);
        })
        .then(repairedFile => {
          const obj = fs.writeFileSync('audio.wav', repairedFile);
          console.log('audio.wav written with a corrected wav header');
        })
        .catch(err => {
          console.log(err);
        });
     }
    
}

module.exports = new TextToSpeechTransform();


