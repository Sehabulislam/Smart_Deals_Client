// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYz__R5TStRBRDoxlcKpadpvwLaKEC2sY",
  authDomain: "smart-deals-10.firebaseapp.com",
  projectId: "smart-deals-10",
  storageBucket: "smart-deals-10.firebasestorage.app",
  messagingSenderId: "1021367611353",
  appId: "1:1021367611353:web:0bced0f5ce524bacef33c8",
  measurementId: "G-X52T23FCT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);