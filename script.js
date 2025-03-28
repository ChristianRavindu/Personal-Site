// === SCRIPT.JS ===

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Typing Effect
const text = ["Christian Ravindu", "Cybersecurity Student", "Malware Analyst", "Future Digital Defender"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
})();

// Scroll Reveal
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  document.body.classList.add("loaded");
  setTimeout(() => {
    loader.style.display = "none";
  }, 800); // Delay fade for smoothness
});

// Initial reveal call on load




reveal();