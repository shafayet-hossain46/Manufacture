// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtdedEDu98kMWYvRjcgedSOFefObZkdHs",
  authDomain: "manufacture-c9264.firebaseapp.com",
  projectId: "manufacture-c9264",
  storageBucket: "manufacture-c9264.appspot.com",
  messagingSenderId: "1088343199789",
  appId: "1:1088343199789:web:8d37acb6a22c0f7c7a28a4",
  measurementId: "G-YKJZT0VH5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;