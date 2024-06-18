import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDhP7LxlAreYRiKjihGnJmySFfGUzma6k",
  authDomain: "lucila-tejidos.firebaseapp.com",
  projectId: "lucila-tejidos",
  storageBucket: "lucila-tejidos.appspot.com",
  messagingSenderId: "194895602431",
  appId: "1:194895602431:web:03f887e803b14f594da2ca"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);