import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDdIL3r0STZlQstifkNPGqbn3HSrfLB1Kc",
    authDomain: "willy-app-932dc.firebaseapp.com",
    projectId: "willy-app-932dc",
    storageBucket: "willy-app-932dc.appspot.com",
    messagingSenderId: "56263609284",
    appId: "1:56263609284:web:ed1c8ba5771c2cb534f291"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()