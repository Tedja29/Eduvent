 // Optional JavaScript for enhancing the payment form functionality
 document.addEventListener('DOMContentLoaded', function() {
     // Handle payment method selection
     const paymentMethods = document.querySelectorAll('.payment-method');
     const cardPaymentForm = document.getElementById('card-payment-form');

     paymentMethods.forEach(method => {
         method.addEventListener('click', function() {
             // Remove active class from all methods
             paymentMethods.forEach(m => m.classList.remove('active'));

             // Add active class to clicked method
             this.classList.add('active');

             // Check the radio button
             const radio = this.querySelector('input[type="radio"]');
             radio.checked = true;

             // Show/hide card payment form based on selection
             if (radio.id === 'credit-card') {
                 cardPaymentForm.style.display = 'block';
             } else {
                 cardPaymentForm.style.display = 'none';
             }
         });
     });

     // Form validation for the payment form
     const paymentForm = document.getElementById('payment-form');

     paymentForm.addEventListener('submit', function(e) {
         e.preventDefault();

         // Simple validation check
         const requiredFields = this.querySelectorAll('[required]');
         let valid = true;

         requiredFields.forEach(field => {
             if (!field.value.trim()) {
                 valid = false;
                 field.style.borderColor = '#ff3860';
             } else {
                 field.style.borderColor = '#ddd';
             }
         });

         if (valid) {
             // Show success message or redirect
             alert('Payment successful! Thank you for your order.');
         } else {
             alert('Please fill in all required fields.');
         }
     });

     // Format card number with spaces
     const cardNumberInput = document.getElementById('card-number');

     cardNumberInput.addEventListener('input', function(e) {
         // Remove non-digits
         let value = this.value.replace(/\D/g, '');

         // Add space after every 4 digits
         if (value.length > 0) {
             value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
         }

         // Update the input value
         this.value = value;
     });

     // Format expiry date (MM/YY)
     const expiryInput = document.getElementById('expiry');

     expiryInput.addEventListener('input', function(e) {
         let value = this.value.replace(/\D/g, '');

         if (value.length > 2) {
             value = value.substring(0, 2) + '/' + value.substring(2, 4);
         }

         this.value = value;
     });
 });
 // Star rating interaction
 stars.forEach((star, index) => {
     star.addEventListener("click", () => {
         ratingInput.value = index + 1;
         stars.forEach((s, i) => {
             s.classList.toggle("selected", i <= index);
         });
     });

     star.addEventListener("mouseover", () => {
         stars.forEach((s, i) => {
             s.style.color = i <= index ? "#ffc107" : "#ccc";
         });
     });

     star.addEventListener("mouseout", () => {
         const selectedRating = parseInt(ratingInput.value);
         stars.forEach((s, i) => {
             s.style.color = i < selectedRating ? "#ffc107" : "#ccc";
         });
     });
 });
 const chatBtn = document.getElementById("chat-button");
 const chatBox = document.getElementById("chat-box");
 const closeChat = document.getElementById("close-chat");

 chatBtn.addEventListener("click", () => {
     chatBox.classList.toggle("hidden");
 });

 closeChat.addEventLisdocument.addEventListener('DOMContentLoaded', function() {
     // SEMUA KODE DI SINI

     // Chat toggle
     const chatBtn = document.getElementById("chat-button");
     const chatBox = document.getElementById("chat-box");
     const closeChat = document.getElementById("close-chat");

     chatBtn.addEventListener("click", () => {
         chatBox.classList.toggle("hidden");
     });

     closeChat.addEventListener("click", () => {
         chatBox.classList.add("hidden");
     });

     // Cek elemen rating jika ada
     const stars = document.querySelectorAll("#starRating .star");
     const ratingInput = document.getElementById("rating");

     let currentRating = 0;

     stars.forEach((star, index) => {
         // Hover effect
         star.addEventListener("mouseover", () => {
             stars.forEach((s, i) => {
                 s.classList.toggle("hovered", i <= index);
             });
         });

         // Remove hover on mouseout
         star.addEventListener("mouseout", () => {
             stars.forEach((s, i) => {
                 s.classList.remove("hovered");
                 s.classList.toggle("selected", i < currentRating);
             });
         });

         // Click to set rating
         star.addEventListener("click", () => {
             currentRating = index + 1;
             ratingInput.value = currentRating;
             stars.forEach((s, i) => {
                 s.classList.toggle("selected", i < currentRating);
             });
         });
     });


     // Payment method toggle
     const paymentMethods = document.querySelectorAll('.payment-method');
     const cardPaymentForm = document.getElementById('card-payment-form');

     paymentMethods.forEach(method => {
         method.addEventListener('click', function() {
             paymentMethods.forEach(m => m.classList.remove('active'));
             this.classList.add('active');

             const radio = this.querySelector('input[type="radio"]');
             radio.checked = true;

             if (radio.id === 'credit-card') {
                 cardPaymentForm.style.display = 'block';
             } else {
                 cardPaymentForm.style.display = 'none';
             }
         });
     });

     // Payment form validation
     const paymentForm = document.getElementById('payment-form');
     if (paymentForm) {
         paymentForm.addEventListener('submit', function(e) {
             e.preventDefault();
             let valid = true;
             const requiredFields = this.querySelectorAll('[required]');

             requiredFields.forEach(field => {
                 if (!field.value.trim()) {
                     valid = false;
                     field.style.borderColor = '#ff3860';
                 } else {
                     field.style.borderColor = '#ddd';
                 }
             });

             if (valid) {
                 alert('Payment successful! Thank you for your order.');
             } else {
                 alert('Please fill in all required fields.');
             }
         });
     }

     // Format card number
     const cardNumberInput = document.getElementById('card-number');
     if (cardNumberInput) {
         cardNumberInput.addEventListener('input', function() {
             let value = this.value.replace(/\D/g, '');
             if (value.length > 0) {
                 value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
             }
             this.value = value;
         });
     }

     // Format expiry
     const expiryInput = document.getElementById('expiry');
     if (expiryInput) {
         expiryInput.addEventListener('input', function() {
             let value = this.value.replace(/\D/g, '');
             if (value.length > 2) {
                 value = value.substring(0, 2) + '/' + value.substring(2, 4);
             }
             this.value = value;
         });
     }
 });
 tener("click", () => {
     chatBox.classList.add("hidden");
 });