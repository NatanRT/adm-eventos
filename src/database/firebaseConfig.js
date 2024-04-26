import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJyiESwN38gVH0a6O9E6a8lvU9P-LeAWw",
  authDomain: "natan-adm-eventos.firebaseapp.com",
  projectId: "natan-adm-eventos",
  storageBucket: "natan-adm-eventos.appspot.com",
  messagingSenderId: "669005539746",
  appId: "1:669005539746:web:a7399229e6328fe2e12afb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);