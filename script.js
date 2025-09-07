// Smooth scroll to About Me
const learnMoreBtn = document.getElementById("learnMoreBtn");
learnMoreBtn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Contact button alert
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  alert("You can contact me at: jack@example.com");
});
