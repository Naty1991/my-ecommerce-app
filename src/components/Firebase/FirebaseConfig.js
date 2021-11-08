// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhaWRM9UXnFmnaxndfPOmoioaby5Vju_U",
  authDomain: "fir-e-commerce-4c881.firebaseapp.com",
  projectId: "fir-e-commerce-4c881",
  storageBucket: "fir-e-commerce-4c881.appspot.com",
  messagingSenderId: "190175225802",
  appId: "1:190175225802:web:f9163a0c06d5915082d133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app)