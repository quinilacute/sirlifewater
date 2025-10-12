// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Uo15Dm2uBCA--3xfz2zvyYNdpBEMBJ4",
  authDomain: "sirlifewater.firebaseapp.com",
  projectId: "sirlifewater",
  storageBucket: "sirlifewater.firebasestorage.app",
  messagingSenderId: "707291410801",
  appId: "1:707291410801:web:b49c9e3cff7f72ebca06d0",
  measurementId: "G-ST1PCRSES8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;