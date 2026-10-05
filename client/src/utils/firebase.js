
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-9c1a7.firebaseapp.com",
  projectId: "interviewiq-9c1a7",
  storageBucket: "interviewiq-9c1a7.firebasestorage.app",
  messagingSenderId: "3722355120",
  appId: "1:3722355120:web:7c8cec716a86c9b8583675"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}