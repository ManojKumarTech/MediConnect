
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/auth"
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyBdO0auC3qa8ovxRWUZTU_3H0TmSq91mNg",
    authDomain: "otp-generation-nexgen.firebaseapp.com",
    projectId: "otp-generation-nexgen",
    storageBucket: "otp-generation-nexgen.appspot.com",
    messagingSenderId: "138650064254",
    appId: "1:138650064254:web:0503ff12f468772f02cf2f",
    measurementId: "G-7PFYS37M81"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

