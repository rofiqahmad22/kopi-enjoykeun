// togle class active maburger menu
const navbarNav = document.querySelector(".navbar-nav");

// menu onclick
document.querySelector("#hamburger-menu").onclick = (event) => {
  navbarNav.classList.toggle("active");
  event.preventDefault();
};

// togle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (event) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  event.preventDefault();
};

// click outside navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});

// click outside search form
const searchButton = document.querySelector("#search-button");

document.addEventListener("click", function (event) {
  if (
    !searchButton.contains(event.target) &&
    !searchForm.contains(event.target)
  ) {
    searchForm.classList.remove("active");
  }
});

// form submit button
const formButton = document.querySelector("#btn-submit");

document.querySelector("#btn-submit").onclick = (event) => {
  event.preventDefault();
};

// togle class active shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (event) => {
  shoppingCart.classList.toggle("active");
  event.preventDefault();
};

// click outside shopping cart
const shoppingCartButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (event) {
  if (
    !shoppingCartButton.contains(event.target) &&
    !shoppingCart.contains(event.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});
