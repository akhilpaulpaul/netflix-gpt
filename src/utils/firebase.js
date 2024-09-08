// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR7Z_0VyNBPhmqS7SF9S3SakzXPVbag0U",
  authDomain: "netflix-web-465.firebaseapp.com",
  projectId: "netflix-web-465",
  storageBucket: "netflix-web-465.appspot.com",
  messagingSenderId: "957268626718",
  appId: "1:957268626718:web:f0edd2bde31a8d89334d0f",
  measurementId: "G-56Z35R2N1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();