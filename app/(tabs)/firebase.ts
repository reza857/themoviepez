// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // Tambahkan ini
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDypkaI8mOuBF9vQXJCFWsNf6Tt58BvC08",
  authDomain: "themoviepez.firebaseapp.com",
  databaseURL: "https://themoviepez-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "themoviepez",
  storageBucket: "themoviepez.firebasestorage.app",
  messagingSenderId: "945337073616",
  appId: "1:945337073616:web:d2d3f4b6788279393d03d5",
  measurementId: "G-E1YCWMKBWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Inisialisasi Auth

export { auth }; // Ekspor objek auth