// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ Bootstrap Responsive Navbar Loaded Successfully");

  // Optional: Smooth dropdown hover (only on desktop)
  const dropdowns = document.querySelectorAll(".navbar .dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth > 992) {
        const menu = this.querySelector(".dropdown-menu");
        menu.classList.add("show");
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (window.inne
