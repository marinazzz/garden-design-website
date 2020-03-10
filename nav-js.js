let mainNav = document.querySelector(".opened-list");

let navBarToggle = document.querySelector(".menu-icon");

navBarToggle.addEventListener("click", function () {
    
    mainNav.classList.toggle("menu-list");
});
