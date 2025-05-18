// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiwuveb5FRuMQmOG_A1Yoikr2uJ66Yn2A",
  authDomain: "peppy-nation-438101-b2.firebaseapp.com",
  databaseURL: "https://peppy-nation-438101-b2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "peppy-nation-438101-b2",
  storageBucket: "peppy-nation-438101-b2.firebasestorage.app",
  messagingSenderId: "1086158601671",
  appId: "1:1086158601671:web:6d2358e5a628376456ede2",
  measurementId: "G-6RP0MHRXRX"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
