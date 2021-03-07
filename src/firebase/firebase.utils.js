import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDo9Ay0YNOI3HxcrmiS1DoIVUz1WXUb2fU",
    authDomain: "crwn-db-8491c.firebaseapp.com",
    projectId: "crwn-db-8491c",
    storageBucket: "crwn-db-8491c.appspot.com",
    messagingSenderId: "19724858897",
    appId: "1:19724858897:web:e2b59644b7ddd2d4fbe3b0",
    measurementId: "G-200D7ZE6BY"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;