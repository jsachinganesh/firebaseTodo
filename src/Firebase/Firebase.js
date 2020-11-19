import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyC6TVEpMu0P7gqosPMhiUFq7E_9zifn6ak",
    authDomain: "auth-20a7a.firebaseapp.com",
    databaseURL: "https://auth-20a7a.firebaseio.com",
    projectId: "auth-20a7a",
    storageBucket: "auth-20a7a.appspot.com",
    messagingSenderId: "839324315562",
    appId: "1:839324315562:web:d67ac0cbe53e4bbac5c5d3"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;