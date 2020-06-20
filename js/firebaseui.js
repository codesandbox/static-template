//from https://github.com/firebase/firebaseui-web/blob/master/README.md
var firebaseConfig = {
  apiKey: "AIzaSyAiZ-QVP5BDlYtMDyAhV_5uP7RBP4BDNOI",
  authDomain: "ming-bda64.firebaseapp.com",
  databaseURL: "https://ming-bda64.firebaseio.com",
  projectId: "ming-bda64",
  storageBucket: "ming-bda64.appspot.com",
  messagingSenderId: "914389837231",
  appId: "1:914389837231:web:9f833410dc144a45e8fb5a",
  measurementId: "G-WL76FLC0HE"
};
var fire = firebase.initializeApp(firebaseConfig);

/**
 * @function
 * @param {string} URL - Redirect After login
 */
function loginFirebaseui(URL) {
  var uiConfig = {
    signInSuccessUrl: URL,
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    tosUrl: "<your-tos-url>",
    customParameters: {
      prompt: "select_account"
    }
    /*,
    privacyPolicyUrl: function() {
      window.location.assign('<your-privacy-policy-url>');
    }*/
  };

  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start("#firebaseui-auth-container", uiConfig);
}
