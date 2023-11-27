import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDeN-5T4L6R1xNpO__JAMM7cRTfnhjCcaU",
    authDomain: "loginapimovies.firebaseapp.com",
    projectId: "loginapimovies",
    storageBucket: "loginapimovies.appspot.com",
    messagingSenderId: "670875279414",
    appId: "1:670875279414:web:c43e824dcccb917170b897"
  };

initializeApp(firebaseConfig);
export const auth = getAuth();

