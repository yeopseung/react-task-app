// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzh2amxg7e5PfiDumxJBity5e54R1hK8Q",
  authDomain: "react-task-app-168fc.firebaseapp.com",
  projectId: "react-task-app-168fc",
  storageBucket: "react-task-app-168fc.appspot.com",
  messagingSenderId: "149977267640",
  appId: "1:149977267640:web:be0a3c7e225f09b400a34d",
  measurementId: "G-Q30VLBEWBS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

