let mainNav = document.getElementById("menu");

let navBarToggle = document.querySelector(".menu__toggle");

navBarToggle.addEventListener("click", function () {

    mainNav.classList.toggle("menu-opened");
});

const carousels = document.querySelectorAll(".glide");

Object.values(carousels).map(carousel => {
      const slider = new Glide(carousel, {
        type: "carousel"
      });
      slider.mount();
});