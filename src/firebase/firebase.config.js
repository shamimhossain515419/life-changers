// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
     apiKey: "AIzaSyBZyuk20NTzzNzolTF8N6-otLzUkIxGiCY",
     authDomain: "life-chnagers.firebaseapp.com",
     projectId: "life-chnagers",
     storageBucket: "life-chnagers.appspot.com",
     messagingSenderId: "671016251896",
     appId: "1:671016251896:web:5687684534ff2bee1d260d",
     measurementId: "G-5W0NDEHEQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;