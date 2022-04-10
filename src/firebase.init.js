// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRijweWjbB50rwXlPsftwRokuS9gY8vbc",
  authDomain: "genius-car-services-da6da.firebaseapp.com",
  projectId: "genius-car-services-da6da",
  storageBucket: "genius-car-services-da6da.appspot.com",
  messagingSenderId: "144288701135",
  appId: "1:144288701135:web:269ef7b502c4a8b53d75ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;