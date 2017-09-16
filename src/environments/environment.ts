// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  analytics: {
    trackingId: 'UA-255878-12'
  },
  firebase: {
    apiKey: 'AIzaSyDIXAqHr-gewCBtcl4ZssqplBzvj3ywv40',
    authDomain: 'math-worksheet-generator.firebaseapp.com',
    databaseURL: 'https://math-worksheet-generator.firebaseio.com',
    projectId: 'math-worksheet-generator',
    storageBucket: 'math-worksheet-generator.appspot.com',
    messagingSenderId: '641444124957'
  }
};
