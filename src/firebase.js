// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuQofoUNwQrFayoQAkxMpGM-7AliSwkAE",
  authDomain: "ritesh-patil-portfolio.firebaseapp.com",
  projectId: "ritesh-patil-portfolio",
  storageBucket: "ritesh-patil-portfolio.appspot.com",
  messagingSenderId: "248057680287",
  appId: "1:248057680287:web:61e30fbb545d6e530d2daa",
  measurementId: "G-X8NWGKN7TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);