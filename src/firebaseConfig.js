// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAygx3iSqsPQKH7687oD_k0XRbQ-8KfmFU",
  authDomain: "coffeshop-69dc2.firebaseapp.com",
  projectId: "coffeshop-69dc2",
  storageBucket: "coffeshop-69dc2.firebasestorage.app",
  messagingSenderId: "651959824193",
  appId: "1:651959824193:web:557f0955377653d1957bc0",
  measurementId: "G-53RZL3EJ3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db };