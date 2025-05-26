// Clean and optimized JavaScript for payment page with Firebase integration

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", function () {
  // =================== Firebase Config ===================
  const firebaseConfig = {
    apiKey: "AIzaSyDiwuveb5FRuMQmOG_A1Yoikr2uJ66Yn2A",
    authDomain: "peppy-nation-438101-b2.firebaseapp.com",
    databaseURL:
      "https://peppy-nation-438101-b2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "peppy-nation-438101-b2",
    storageBucket: "peppy-nation-438101-b2.appspot.com",
    messagingSenderId: "1086158601671",
    appId: "1:1086158601671:web:6d2358e5a628376456ede2"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth(app);

  // =================== Chat Toggle ===================
  const chatBtn = document.getElementById("chat-button");
  const chatBox = document.getElementById("chat-box");
  const closeChat = document.getElementById("close-chat");

  if (chatBtn && chatBox && closeChat) {
    chatBtn.addEventListener("click", () => {
      chatBox.classList.toggle("hidden");
    });

    closeChat.addEventListener("click", () => {
      chatBox.classList.add("hidden");
    });
  }

  // =================== Star Rating ===================
  const stars = document.querySelectorAll("#starRating .star");
  const ratingInput = document.getElementById("rating");
  let currentRating = 0;

  if (stars.length && ratingInput) {
    stars.forEach((star, index) => {
      star.addEventListener("mouseover", () => {
        stars.forEach((s, i) => {
          s.classList.toggle("hovered", i <= index);
        });
      });

      star.addEventListener("mouseout", () => {
        stars.forEach((s, i) => {
          s.classList.remove("hovered");
          s.classList.toggle("selected", i < currentRating);
        });
      });

      star.addEventListener("click", () => {
        currentRating = index + 1;
        ratingInput.value = currentRating;
        stars.forEach((s, i) => {
          s.classList.toggle("selected", i < currentRating);
        });
      });
    });
  }

  // =================== Payment Method Toggle ===================
  const paymentMethods = document.querySelectorAll(".payment-method");
  const cardPaymentForm = document.getElementById("card-payment-form");

  if (paymentMethods.length && cardPaymentForm) {
    paymentMethods.forEach((method) => {
      method.addEventListener("click", function () {
        paymentMethods.forEach((m) => m.classList.remove("active"));
        this.classList.add("active");

        const radio = this.querySelector("input[type='radio']");
        if (radio) radio.checked = true;

        cardPaymentForm.style.display =
          radio && radio.id === "credit-card" ? "block" : "none";
      });
    });
  }

  // =================== Payment Form Submission ===================
  const paymentForm = document.getElementById("payment-form");

  if (paymentForm) {
    paymentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;
      const requiredFields = this.querySelectorAll("[required]");

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = "#ff3860";
        } else {
          field.style.borderColor = "#ddd";
        }
      });

      if (!valid) {
        alert("Please fill in all required fields.");
        return;
      }

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;

          const data = {
            userId: uid,
            fullName: document.getElementById("fullname").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            zip: document.getElementById("zip").value,
            paymentMethod: document.getElementById("payment-method").value,
            cardName: document.getElementById("card-name").value || null,
            cardNumber: document.getElementById("card-number").value || null,
            expiry: document.getElementById("expiry").value || null,
            cvv: document.getElementById("cvv").value || null,
            status: "Belum Dibayar",
            tanggalCheckout: new Date().toISOString()
          };

          const checkoutRef = ref(db, "checkout");
          const newCheckout = push(checkoutRef);

          set(newCheckout, data)
            .then(() => {
              alert("Checkout berhasil disimpan ke Firebase!");
              paymentForm.reset();
            })
            .catch((err) => {
              console.error("Gagal menyimpan checkout:", err);
              alert("Terjadi kesalahan saat menyimpan checkout.");
            });
        } else {
          alert("Silakan login terlebih dahulu.");
        }
      });
    });
  }

  // =================== Format Card Number ===================
  const cardNumberInput = document.getElementById("card-number");
  if (cardNumberInput) {
    cardNumberInput.addEventListener("input", function () {
      let value = this.value.replace(/\D/g, "");
      if (value.length > 0) {
        value = value.match(/.{1,4}/g).join(" ");
      }
      this.value = value;
    });
  }

  // =================== Format Expiry ===================
  const expiryInput = document.getElementById("expiry");
  if (expiryInput) {
    expiryInput.addEventListener("input", function () {
      let value = this.value.replace(/\D/g, "");
      if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
      }
      this.value = value;
    });
  }
});
