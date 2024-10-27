import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

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

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
