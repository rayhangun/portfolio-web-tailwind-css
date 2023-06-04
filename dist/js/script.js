// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const backToTop = document.querySelector("#back-to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    backToTop.classList.remove("hidden");
    backToTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    backToTop.classList.add("hidden");
    backToTop.classList.remove("flex");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Menghilangkan Nav-Bar diluar Hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode Toggle
const darkMode = document.querySelector("#dark-mode");
const html = document.querySelector("html");

darkMode.addEventListener("click", function () {
  if (darkMode.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindahkan Posisi Toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkMode.checked = true;
} else {
  darkMode.checked = false;
}
