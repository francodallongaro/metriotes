import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBk3mIkM0Lsay1LE9jc7QkvcZu0frjDb6Y",
  authDomain: "metriotes-8c583.firebaseapp.com",
  projectId: "metriotes-8c583",
  storageBucket: "metriotes-8c583.appspot.com",
  messagingSenderId: "527765729701",
  appId: "1:527765729701:web:83be822b826e60825e784c",
  measurementId: "G-1WWYR6MEHG",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
