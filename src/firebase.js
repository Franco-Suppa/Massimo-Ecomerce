// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgbzZUWpSMMrA5dBiGadlDjWRpUtusxPM",
  authDomain: "massimo-93eab.firebaseapp.com",
  projectId: "massimo-93eab",
  storageBucket: "massimo-93eab.appspot.com",
  messagingSenderId: "43978972342",
  appId: "1:43978972342:web:95c32aec1a6a4aca805a17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)