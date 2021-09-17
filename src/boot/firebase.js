import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBCTEA2B3Ci7gXA5KLg-ObpR45-8Y_8sJM",
  authDomain: "awesome-todo-5404c.firebaseapp.com",
  databaseURL: "https://awesome-todo-5404c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "awesome-todo-5404c",
  storageBucket: "awesome-todo-5404c.appspot.com",
  messagingSenderId: "26313430259",
  appId: "1:26313430259:web:e4ee0e5b72fc567d811386"
}

  // // Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)

let firebaseAuth = firebaseApp.auth()

export{ firebaseAuth }