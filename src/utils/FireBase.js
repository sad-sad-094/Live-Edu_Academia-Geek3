/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ568SffzAJJcCoZiprl1mt0aW1KrPw1w",
  authDomain: "liveedu-academiageek-sad.firebaseapp.com",
  projectId: "liveedu-academiageek-sad",
  storageBucket: "liveedu-academiageek-sad.appspot.com",
  messagingSenderId: "380569933145",
  appId: "1:380569933145:web:109dc7d7bf7f18f6a96848",
  measurementId: "G-LNS17QHFGT"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

export default app;
export { db };
