// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtiXqT_n30vu6PWGJKWiadnazFpl74hNA",
  authDomain: "authentic-courses.firebaseapp.com",
  projectId: "authentic-courses",
  storageBucket: "authentic-courses.appspot.com",
  messagingSenderId: "275437182371",
  appId: "1:275437182371:web:087ee86357f02570db0e16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;