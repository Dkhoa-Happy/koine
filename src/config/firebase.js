// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhOU0EPqoODupC8sm2k2wpBdhmQalkSOc",
  authDomain: "movie-management-c2908.firebaseapp.com",
  projectId: "movie-management-c2908",
  storageBucket: "movie-management-c2908.appspot.com",
  messagingSenderId: "655446269365",
  appId: "1:655446269365:web:d3ae5000926212b4a64dfc",
  measurementId: "G-W3EM4BCYQD"
};

// Initialize Firebase
const googleProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth();

export { storage, googleProvider, auth };