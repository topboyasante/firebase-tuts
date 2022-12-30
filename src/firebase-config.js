import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAjIzQAvp9ybF9GV9l9BCg6XRdMyCFCqP8",
  authDomain: "fir-tuts-d358a.firebaseapp.com",
  projectId: "fir-tuts-d358a",
  storageBucket: "fir-tuts-d358a.appspot.com",
  messagingSenderId: "175871788007",
  appId: "1:175871788007:web:00250066de5434ce22f342",
  measurementId: "G-L9GGELNV1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
