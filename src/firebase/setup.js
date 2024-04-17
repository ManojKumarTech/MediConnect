
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBDosUxkQkizHJSPi_i8fo5Ye0NQILVAPU",
    authDomain: "fir-auth-d2273.firebaseapp.com",
    projectId: "fir-auth-d2273",
    storageBucket: "fir-auth-d2273.appspot.com",
    messagingSenderId: "590383500686",
    appId: "1:590383500686:web:ec275f32fb9da643ee28df",
    measurementId: "G-LN9TQDVQQS"
  };


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const db = getFirestore(app)