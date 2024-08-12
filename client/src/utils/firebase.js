// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_kEY,
  authDomain: "todo-e5294.firebaseapp.com",
  projectId: "todo-e5294",
  storageBucket: "todo-e5294.appspot.com",
  messagingSenderId: "189643873155",
  appId: "1:189643873155:web:29d4755d26e152801df4b6",
  measurementId: "G-W1F3817G2G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
