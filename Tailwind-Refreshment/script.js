const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconMenu = document.getElementById("icon-menu");
const iconClose = document.getElementById("icon-close");
const themeToggles = document.querySelectorAll(".theme-toggle");

function setTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);

  themeToggles.forEach((toggle) => {
    const iconMoon = toggle.querySelector(".icon-moon");
    const iconSun = toggle.querySelector(".icon-sun");

    if (iconMoon && iconSun) {
      iconMoon.classList.toggle("hidden", isDark);
      iconSun.classList.toggle("hidden", !isDark);
    }
  });

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

if (menuBtn && mobileMenu && iconMenu && iconClose) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    iconMenu.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });
}

themeToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(!isDark);
  });
});

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialDark = savedTheme ? savedTheme === "dark" : prefersDark;
setTheme(initialDark);
