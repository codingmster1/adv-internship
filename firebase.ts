// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2ZtGkw9k_VK5XWuO4ZkpiVqlQBR0GBPU",
    authDomain: "internship-b0d60.firebaseapp.com",
    projectId: "internship-b0d60",
    storageBucket: "internship-b0d60.appspot.com",
    messagingSenderId: "949635503452",
    appId: "1:949635503452:web:ed7b14eddc7d0bc3eddd99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);