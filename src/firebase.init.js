// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGpXODOdGKfyLit76iBqjpCkUs_WtRbnM",
    authDomain: "ema-jhon-simple1-7631a.firebaseapp.com",
    projectId: "ema-jhon-simple1-7631a",
    storageBucket: "ema-jhon-simple1-7631a.appspot.com",
    messagingSenderId: "938213031192",
    appId: "1:938213031192:web:e0dc685bb25fcd5b2ff26d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;