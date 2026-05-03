// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "soi-fashion.firebaseapp.com",
  projectId: "soi-fashion",
  storageBucket: "soi-fashion.appspot.com",
  messagingSenderId: "376429828968",
  appId: "1:376429828968:web:0a63bf48fe5810963ad4dd",
  measurementId: "G-XXXX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
