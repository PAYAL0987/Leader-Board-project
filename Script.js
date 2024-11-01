// script.js
document.addEventListener("DOMContentLoaded", () => {
    const feedbackOptions = document.querySelectorAll(".feedback-option");
    const submitBtn = document.getElementById("submit-btn");
    let selectedFeedback = null;
  
    feedbackOptions.forEach(option => {
      option.addEventListener("click", () => {
        feedbackOptions.forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
        selectedFeedback = option.getAttribute("data-feedback");
      });
    });
  
    submitBtn.addEventListener("click", () => {
      if (selectedFeedback) {
        alert(`Feedback Submitted: ${selectedFeedback}`);
      } else {
        alert("Please select a feedback option.");
      }
    });
  });
  