

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
  // Select all questions
const questions = document.querySelectorAll(".question");

// Add click event listener to each question
questions.forEach((question) => {
  question.addEventListener("click", () => {
    // Toggle active class
    question.classList.toggle("active");

    // Find the associated answer
    const answer = question.nextElementSibling;

    // Show/hide the answer
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
// Select DOM Elements
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slide = document.querySelector(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// Update Slide Position
function updateSlide() {
  slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

// Update Active Dot
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// Event Listeners for Navigation Arrows
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : dots.length - 1;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex < dots.length - 1) ? currentIndex + 1 : 0;
  updateSlide();
});

// Event Listeners for Dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});


