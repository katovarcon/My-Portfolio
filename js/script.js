// ========== MENU SANDWICH ==========
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// Cerrar menú al hacer clic en un link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("show");
  });
});


// ========== DARK MODE ==========
const darkBtn = document.getElementById("darkBtn");
const body = document.body;

// Revisar si había preferencia guardada
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  darkBtn.textContent = "☀️";
}

// Toggle dark/light
darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    darkBtn.textContent = "🌙";
  }
});


// ========== ANIMACIONES SCROLL ==========
const elements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");

const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
