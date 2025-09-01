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
    });