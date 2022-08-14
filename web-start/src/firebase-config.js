// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCH6F5j4S3d4Vi2vyu1fLo0ogR1yxaDMc",
  authDomain: "friendlychat-aa95f.firebaseapp.com",
  projectId: "friendlychat-aa95f",
  storageBucket: "friendlychat-aa95f.appspot.com",
  messagingSenderId: "617891499587",
  appId: "1:617891499587:web:c5eeb733be07b852828ef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCCH6F5j4S3d4Vi2vyu1fLo0ogR1yxaDMc",
  authDomain: "friendlychat-aa95f.firebaseapp.com",
  projectId: "friendlychat-aa95f",
  storageBucket: "friendlychat-aa95f.appspot.com",
  messagingSenderId: "617891499587",
  appId: "1:617891499587:web:c5eeb733be07b852828ef6"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}