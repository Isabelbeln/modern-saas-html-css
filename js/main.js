// RESPONSIVE MENU
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-2-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-2-line");
});

// SCROLLREVEAL
const scrollRevealSettings = {
  distance: "100%",
  origin: "bottom",
  duration: 2000,
};

ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealSettings,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealSettings,
  delay: 700,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealSettings,
  delay: 1200,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealSettings,
  delay: 1800,
});

ScrollReveal().reveal(".icon", {
  ...scrollRevealSettings,
  delay: 2000,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealSettings,
  interval: 500,
});

ScrollReveal().reveal(".explore__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".company__card", {
  interval: 500,
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealSettings,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
})