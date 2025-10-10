// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0PIEJhdk-TkD1UZ7YJOAaBm6qhON9VcI",
  authDomain: "chatbot-769c5.firebaseapp.com",
  projectId: "chatbot-769c5",
  storageBucket: "chatbot-769c5.firebasestorage.app",
  messagingSenderId: "48623288873",
  appId: "1:48623288873:web:ab85865dd1df2985f9d238",
  measurementId: "G-8LSGK5VWXK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
