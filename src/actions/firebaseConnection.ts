// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfn0hOmh-nwWb6_ZKsuBbPgMvI-RGBc_A",
  authDomain: "codeleaptest.firebaseapp.com",
  projectId: "codeleaptest",
  storageBucket: "codeleaptest.appspot.com",
  messagingSenderId: "664156286093",
  appId: "1:664156286093:web:b71470aacbe7ff86f586c4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
