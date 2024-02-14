// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZU8V2BxtQyaS4Xwh9wFZgF87zA5IisKk",
  authDomain: "realtor-clone-react-54881.firebaseapp.com",
  projectId: "realtor-clone-react-54881",
  storageBucket: "realtor-clone-react-54881.appspot.com",
  messagingSenderId: "251991540539",
  appId: "1:251991540539:web:b93b05db2ba1e688166d1e"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

 export const db = getFirestore()
 