// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
export default app;