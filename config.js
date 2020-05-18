import * as firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAwe1jB_ja4aM0g5c3W1TiEx3Yu-M81ZqU",
  authDomain: "bedtime-stories-1.firebaseapp.com",
  databaseURL: "https://bedtime-stories-1.firebaseio.com",
  projectId: "bedtime-stories-1",
  storageBucket: "bedtime-stories-1.appspot.com",
  messagingSenderId: "632828488511",
  appId: "1:632828488511:web:991bea36faf8008eb4c18a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();