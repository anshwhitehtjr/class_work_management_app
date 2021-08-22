import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig =
{
    apiKey: "AIzaSyAmk6WACYZa0kSU5ZgqLu8i9WHm2D-niD8",
    authDomain: "classworkrevisionapp.firebaseapp.com",
    databaseURL: "https://classworkrevisionapp.firebaseio.com",
    projectId: "classworkrevisionapp",
    storageBucket: "classworkrevisionapp.appspot.com",
    messagingSenderId: "822754253145",
    appId: "1:822754253145:web:873326efd983c0e27b9448"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
