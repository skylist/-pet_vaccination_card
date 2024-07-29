// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzZrafjhMNtqG1Pokn-UhNuk8dh2jkXPk",
  authDomain: "pet-vaccination-card-4d90c.firebaseapp.com",
  projectId: "pet-vaccination-card-4d90c",
  storageBucket: "pet-vaccination-card-4d90c.appspot.com",
  messagingSenderId: "561980331605",
  appId: "1:561980331605:web:8921a2ea3b7e5be73ae6dc",
  measurementId: "G-GFVV6YL2H5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
