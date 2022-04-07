// Menu Toggler
let menuToggler = document.querySelector(".menu-toggle");
let body = document.querySelector("body");
menuToggler.onclick = function () {
  body.classList.toggle("open");
};

// Change navbar color on scroll
let myNav = document.getElementById("myNav");
window.onscroll = function () {
  if (window.scrollY > 680) {
    myNav.style.backgroundColor = "#252525";
    myNav.style.boxShadow = "0 0 10px #252525";
  } else {
    myNav.style.backgroundColor = "transparent";
    myNav.style.boxShadow = "none";
  }
};

// Scroll Animation
window.sa = ScrollReveal();
sa.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "400px",
  delay: 300,
});
sa.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "400px",
  delay: 600,
});
sa.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "400px",
  delay: 600,
});
sa.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "400px",
  delay: 600,
});
