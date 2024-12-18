//email sending
function sendMail(){
   var params = {
    name: document.getElementById("firstName").value ,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
   }
   const serviceID ="service_ztjp0zw";
  const templateID = "template_3nupub6";

emailjs.send(serviceID,templateID,params)
.then(
  res => {
    document.getElementById("firstName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("your message sent successfully");
  })
  .catch((err)=> console.log(err));
}



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
// Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when scrolling down 300px
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Scroll to the top of the page when the button is clicked
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


