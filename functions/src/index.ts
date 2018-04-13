import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.uploadedFileToStorage = functions.storage.object().onFinalize(event => {
  if(event.name.indexOf('album-files') > -1) {
    console.log('something was uploaded: ', event);
  }
});
