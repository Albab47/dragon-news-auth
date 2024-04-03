// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7kSC9vsU1rD1XnuTmywjrvJ8S5z9APlA",
  authDomain: "dragon-news-auth-707a2.firebaseapp.com",
  projectId: "dragon-news-auth-707a2",
  storageBucket: "dragon-news-auth-707a2.appspot.com",
  messagingSenderId: "245188215888",
  appId: "1:245188215888:web:757b113bdc61be4593bd55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;