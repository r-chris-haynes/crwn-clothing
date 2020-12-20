import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBjZJNjYHoS2i9t4c5DjnEQLaEINFHHLcA",
  authDomain: "crwn-db-5b7af.firebaseapp.com",
  projectId: "crwn-db-5b7af",
  storageBucket: "crwn-db-5b7af.appspot.com",
  messagingSenderId: "209535858362",
  appId: "1:209535858362:web:8feea3bf66af9aed503483",
  measurementId: "G-FE6XR9QWD5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;