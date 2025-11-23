// Replace with your Firebase config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAS1_O4ZWgydrJaPLmd_m34jtnVY4YFTK4",
  authDomain: "platforma-pregatire-asistenti.firebaseapp.com",
  projectId: "platforma-pregatire-asistenti",
  storageBucket: "platforma-pregatire-asistenti.firebasestorage.app",
  messagingSenderId: "560091480190",
  appId: "1:560091480190:web:80411f685e83c476f0d82f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
