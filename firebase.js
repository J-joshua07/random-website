
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeJZ48kO2p6IRodO7RaM8jYrox8sosxK0",
  authDomain: "loginapp-645df.firebaseapp.com",
  projectId: "loginapp-645df",
  storageBucket: "loginapp-645df.firebasestorage.app",
  messagingSenderId: "612934062111",
  appId: "1:612934062111:web:149cf77954d69157a7c52a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};