import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgIq-_4yl_AMa9pj8QW_tQmOhiywB8Uzc",
  authDomain: "challenge-2f7de.firebaseapp.com",
  projectId: "challenge-2f7de",
  storageBucket: "challenge-2f7de.appspot.com",
  messagingSenderId: "591691718395",
  appId: "1:591691718395:web:89d795d25f1e63ca115a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);