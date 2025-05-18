// form-handler.js
import { database } from './firebase-config.js';
import {
  ref,
  push,
  set
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

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

    const usersRef = ref(database, 'users/');
    const newUserRef = push(usersRef);

    set(newUserRef, {
      firstName,
      lastName,
      email,
      username,
      password,  // ⚠️ Waspada: ini plaintext!
      phone,
      address
    }).then(() => {
      alert("Data berhasil disimpan!");
      form.reset();
      form.classList.remove('was-validated');
    }).catch((error) => {
      alert("Gagal menyimpan data: " + error.message);
    });
  });
});
