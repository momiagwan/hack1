// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3mEDGtRFNEt9DE8-8M-jWYNQpNyVobX4",
  authDomain: "hack1-4ec28.firebaseapp.com",
  projectId: "hack1-4ec28",
  storageBucket: "hack1-4ec28.appspot.com",
  messagingSenderId: "822867918904",
  appId: "1:822867918904:web:557fbe918b3b2254a7e6cd",
  measurementId: "G-35Y4TLPQ4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);