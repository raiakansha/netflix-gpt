// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNHmWATzF1mNgam_skFBM9ctH5G7vIZdk",
  authDomain: "netflixgpt-df5a9.firebaseapp.com",
  projectId: "netflixgpt-df5a9",
  storageBucket: "netflixgpt-df5a9.appspot.com",
  messagingSenderId: "73928415515",
  appId: "1:73928415515:web:986c96b14bd7dc59989bbe",
  measurementId: "G-RVQQQHB4PE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
