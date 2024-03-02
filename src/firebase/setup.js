
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFR1JZBAygLd2MnBrUxUTsLBwb5mFBtao",
    authDomain: "mediconnect-authentications-07.firebaseapp.com",
    projectId: "mediconnect-authentications-07",
    storageBucket: "mediconnect-authentications-07.appspot.com",
    messagingSenderId: "1088534469999",
    appId: "1:1088534469999:web:74063e5c0823454aa91c9a",
    measurementId: "G-RT4YXV7M07"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);