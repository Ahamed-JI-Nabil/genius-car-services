// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDaiPeF0F7Dd4rCd-6U7Xt_xPPACIEuI-Y",
  authDomain: "genius-car-services-c8313.firebaseapp.com",
  projectId: "genius-car-services-c8313",
  storageBucket: "genius-car-services-c8313.appspot.com",
  messagingSenderId: "21239205881",
  appId: "1:21239205881:web:8d7644b9042613fe55f728"
  /*   apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId, */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;