import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyApLZscEL8fAIYOM1qcVLBgsbqy-zMlxi0",
  authDomain: "stalwart-entity-412601.firebaseapp.com",
  projectId: "stalwart-entity-412601",
  storageBucket: "stalwart-entity-412601.appspot.com",
  messagingSenderId: "1006304914569",
  appId: "1:1006304914569:web:a0c169eb0efc0b28be2a58",
  measurementId: "G-VXJ9E44S0Y",
  databaseURL: "https://stalwart-entity-412601-default-rtdb.firebaseio.com/"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

