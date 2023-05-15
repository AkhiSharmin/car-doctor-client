// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB2oINnaQR7TwWcF-w3MP7S-j6E5CqAbM",
    authDomain: "cars-doctor-f1152.firebaseapp.com",
    projectId: "cars-doctor-f1152",
    storageBucket: "cars-doctor-f1152.appspot.com",
    messagingSenderId: "398498381713",
    appId: "1:398498381713:web:68caea923a88465c492430"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;