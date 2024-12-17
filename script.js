// (function () {
//   emailjs.init("rBqg1HMhJ0BvtBzD4");

//   document
//     .getElementById("contactForm")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();

//       // Get form data
//       const formData = {
//         firstName: document.getElementById("firstName").value,
//         lastName: document.getElementById("lastName").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,
//       };
//       console.log(formData)

//       // Send email via EmailJS
//       emailjs
//         .send("service_tes6xpc", "template_zjk5cpm", formData)
//         .then(function ( ) {
//           alert("Message sent successfully!");
//           document.getElementById("contactForm").reset(); // Clear the form
//         })
//         .catch(function (error) {
//           alert("Error sending message. Please try again.");
//           console.error("EmailJS Error:", error);
//         });
//     });
// })();

(function () {
  emailjs.init("rBqg1HMhJ0BvtBzD4"); // Replace with your EmailJS Public Key
})();

// Form submission handler
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Send form data using EmailJS
    emailjs
      .sendForm("service_tes6xpc", "template_zjk5cpm", "#contactForm")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  });
