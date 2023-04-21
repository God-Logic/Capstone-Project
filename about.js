// Toggle menu when hamburger icon is clicked
document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".dropdown-menu").classList.toggle("active");
});

// Close menu when a dropdown menu link is clicked
document.querySelectorAll(".dropdown-menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector(".dropdown-menu").classList.remove("active");
  });
});
