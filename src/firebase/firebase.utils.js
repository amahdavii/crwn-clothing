import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBOGHOsDbdJEf99uTZVc7z4G0VjKemEses",
    authDomain: "crwn-db-613f1.firebaseapp.com",
    projectId: "crwn-db-613f1",
    storageBucket: "crwn-db-613f1.appspot.com",
    messagingSenderId: "354477005707",
    appId: "1:354477005707:web:94566ac525c51754a92d8e",
    measurementId: "G-HJCNE8QQXN" 
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;