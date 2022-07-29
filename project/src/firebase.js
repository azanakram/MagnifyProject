// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs0tIFLp-I0A_njUsvESwSA0ztcQ5Gcn8",
  authDomain: "magnifyproject-4a499.firebaseapp.com",
  databaseURL: "https://magnifyproject-4a499-default-rtdb.firebaseio.com",
  projectId: "magnifyproject-4a499",
  storageBucket: "magnifyproject-4a499.appspot.com",
  messagingSenderId: "64703291497",
  appId: "1:64703291497:web:86720ac3a3b6d58aea82f8",
  measurementId: "G-BVYF87H3K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);