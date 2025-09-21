document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  msg.textContent = "Thanks for reaching out! We'll get back to you soon.";
  msg.style.color = "green";
});
