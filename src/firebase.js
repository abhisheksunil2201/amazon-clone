import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgw1jALONkL2EOIoAtMQ_261sWziqsiCw",
    authDomain: "clone-9ca5a.firebaseapp.com",
    databaseURL: "https://clone-9ca5a.firebaseio.com",
    projectId: "clone-9ca5a",
    storageBucket: "clone-9ca5a.appspot.com",
    messagingSenderId: "692631985371",
    appId: "1:692631985371:web:36fbe45e13d9f6f12b00fe",
    measurementId: "G-Y9DQ5X7C87"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };