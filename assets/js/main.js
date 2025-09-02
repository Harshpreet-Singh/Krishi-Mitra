<<<<<<< HEAD
// Simple JS to toggle menu and search
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    const searchToggle = document.getElementById("search-toggle");
    const mobileSearch = document.getElementById("mobile-search");

    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navToggle.querySelector("span").textContent =
        navLinks.classList.contains("active") ? "close" : "menu";
    });

    searchToggle.addEventListener("click", () => {
      mobileSearch.classList.toggle("active");
      searchToggle.querySelector("span").textContent =
        mobileSearch.classList.contains("active") ? "close" : "search";
=======
// Simple JS to toggle menu and search
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    const searchToggle = document.getElementById("search-toggle");
    const mobileSearch = document.getElementById("mobile-search");

    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navToggle.querySelector("span").textContent =
        navLinks.classList.contains("active") ? "close" : "menu";
    });

    searchToggle.addEventListener("click", () => {
      mobileSearch.classList.toggle("active");
      searchToggle.querySelector("span").textContent =
        mobileSearch.classList.contains("active") ? "close" : "search";
>>>>>>> 169cdf0033318ba37326fa754a0a1d4c34896f1a
    });