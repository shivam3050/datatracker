// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
