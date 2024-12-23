emailjs.init("JRZ4D4K-EU7nlq1lo");
// Function to send email
const sendEmail = () => {
  // Collect form data
  const formData = {
    user_name: document.getElementById("fullname").value,
    user_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  // Validate form fields
  if (!formData.user_name || !formData.user_email || !formData.message) {
    alert("Please fill in all required fields (Name, Email, and Message).");
    return;
  }
  // Send email using EmailJS
  emailjs
    .send("service_waggq6v", "template_3t2y449", formData)
    .then(
      (response) => {
        console.log("Email sent successfully:", response.status, response.text);
        alert("Message sent successfully!");
        // Optionally, reset the form
        document.querySelector("form").reset();
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send message. Please try again later.");
      }
    );
};
// Attach event listener to the form
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  sendEmail(); // Call the sendEmail function
});

const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
  showTestimonial(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
  showTestimonial(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showTestimonial(index);
  });
});

// Initialize the first testimonial
showTestimonial(currentIndex);

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


