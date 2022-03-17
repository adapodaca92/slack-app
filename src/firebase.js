import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC63mEJRZqm-jqapNSnuPCz2qMZOtOBV4A",
  authDomain: "slack-build-13620.firebaseapp.com",
  projectId: "slack-build-13620",
  storageBucket: "slack-build-13620.appspot.com",
  messagingSenderId: "878588127904",
  appId: "1:878588127904:web:07d6dae5afb6cea0e477c5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
