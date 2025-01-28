function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const darkModeToggle = document.getElementById("dark-mode-toggle");

const isDarkMode = localStorage.getItem("dark-mode") === "true";
if (isDarkMode) {
  document.body.classList.add("dark-mode");
}


darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDarkModeEnabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkModeEnabled);
});


const menuLinks = document.querySelectorAll(".menu-links a");
menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    document.querySelector(".menu-links").classList.remove("open");
    document.querySelector(".hamburger-icon").classList.remove("open");
  })
);

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault(); 
  alert("Your message has been sent successfully!");
  document.getElementById("contact-form").reset();
});