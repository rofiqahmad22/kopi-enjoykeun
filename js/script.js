// togle class active
const navbarNav = document.querySelector(".navbar-nav");

// menu onclick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click outside menu
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});
