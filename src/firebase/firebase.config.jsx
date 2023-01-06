// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDudTvHNU0snkDvBWgf4dxwxBOMqr0h6LY",
    authDomain: "news-auth-practice.firebaseapp.com",
    projectId: "news-auth-practice",
    storageBucket: "news-auth-practice.appspot.com",
    messagingSenderId: "994968921946",
    appId: "1:994968921946:web:87d52056cea928c82b7563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;