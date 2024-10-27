// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getDatabase, ref, set, push, onValue, update } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0-mAHTR2D2Od8oFNg1VvbhLopt_MgdBE",
  authDomain: "funproj-84903.firebaseapp.com",
  databaseURL: "https://funproj-84903-default-rtdb.firebaseio.com",
  projectId: "funproj-84903",
  storageBucket: "funproj-84903.appspot.com",
  messagingSenderId: "75997898617",
  appId: "1:75997898617:web:633a3d61d1e91088f8b1a8",
  measurementId: "G-3YJCFB65XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
