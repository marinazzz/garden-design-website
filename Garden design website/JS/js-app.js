let mainNav = document.getElementsByClassName(".menu");

let navBarToggle = document.querySelector(".bottom-header__toggle");

navBarToggle.addEventListener("click", function () {

    mainNav.classList.toggle("menu-opened");
});