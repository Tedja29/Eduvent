import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDiwuveb5FRuMQmOG_A1Yoikr2uJ66Yn2A",
  authDomain: "peppy-nation-438101-b2.firebaseapp.com",
  databaseURL: "https://peppy-nation-438101-b2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "peppy-nation-438101-b2",
  storageBucket: "peppy-nation-438101-b2.appspot.com",
  messagingSenderId: "1086158601671",
  appId: "1:1086158601671:web:6d2358e5a628376456ede2"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector(".needs-validation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi tidak cocok!");
      return;
    }

    const role = document.querySelector('input[name="role"]:checked')?.value;
    if (!role) {
      alert("Silakan pilih peran Anda: Penjual atau Pembeli.");
      return;
    }


    // Buat akun auth
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;

        // Simpan data tambahan ke database
        return set(ref(database, 'users/' + uid), {
          firstName,
          lastName,
          email,
          username,
          phone,
          address,
          role
        });
      })
      .then(() => {
        alert("Registrasi berhasil!");
        form.reset();
        form.classList.remove('was-validated');
      })
      .catch((error) => {
        alert("Gagal registrasi: " + error.message);
      });
  });
});
