//email sending
function sendMail(){
   var params = {
    name: document.getElementById("firstName").value ,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
   }
   const serviceID ="service_waggq6v";
  const templateID = "template_3t2y449";

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


