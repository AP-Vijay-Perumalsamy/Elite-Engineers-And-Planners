// Toggle Mobile Navigation Menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  // Toggle active classes
  navLinks.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");

  // Reset animations when closing menu
  if (!navLinks.classList.contains("active")) {
    const items = navLinks.querySelectorAll("li");
    items.forEach((item) => {
      item.style.animation = "none";
      item.offsetHeight; // Trigger reflow
      item.style.animation = null;
    });
  }
}

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const navLinks = document.querySelector(".nav-links");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  if (!e.target.closest(".nav-links") && !e.target.closest(".hamburger-menu")) {
    navLinks.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  }
});

// Show current year dynamically in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add active class to current menu item
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all links
    document
      .querySelectorAll(".nav-links a")
      .forEach((l) => l.classList.remove("active"));

    // Add active class to clicked link
    this.classList.add("active");

    // Close mobile menu after selection
    const navLinks = document.querySelector(".nav-links");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    navLinks.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  });

  // Set active class based on current scroll position
  if (link.getAttribute("href") === window.location.hash) {
    link.classList.add("active");
  }
});

// Update active menu item on scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
