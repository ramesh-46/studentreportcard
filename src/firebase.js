// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWx1JiqT4wS-1NPeC2ezhL5ybXSz2HeCc",
    authDomain: "nasa-data-fetcher.firebaseapp.com",
    projectId: "nasa-data-fetcher",
    storageBucket: "nasa-data-fetcher.appspot.com",
    messagingSenderId: "480077194719",
    appId: "1:480077194719:web:253d75d3a92148c7e9506a",
    measurementId: "G-WVQPR8TWG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');

export { auth, googleProvider, facebookProvider, microsoftProvider };
