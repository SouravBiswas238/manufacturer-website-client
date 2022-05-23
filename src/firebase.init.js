// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBvw_nTSUe6sen_c1p4wbcU9mQiyyUQDI",
  authDomain: "flash-electronic.firebaseapp.com",
  projectId: "flash-electronic",
  storageBucket: "flash-electronic.appspot.com",
  messagingSenderId: "782664568183",
  appId: "1:782664568183:web:418bf56a8efc91daa9e572",
  measurementId: "G-LV2P0Z60V1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;