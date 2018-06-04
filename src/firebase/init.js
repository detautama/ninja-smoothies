import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAaLSqU90HXyQQWHdHDn1bWdnf0w2lZcBM",
  authDomain: "udemy-ninja-smoothies-9c267.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-9c267.firebaseio.com",
  projectId: "udemy-ninja-smoothies-9c267",
  storageBucket: "udemy-ninja-smoothies-9c267.appspot.com",
  messagingSenderId: "621979635944"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

// export firestore database
export default firebaseApp.firestore()