let mainNav = document.getElementById("menu");

let navBarToggle = document.querySelector(".menu__toggle");

navBarToggle.addEventListener("click", function () {

    mainNav.classList.toggle("menu-opened");
});

const carousels = document.querySelectorAll(".glide");

new Glide('.glide', {
    type: 'carousel',
    autoplay: true,
    hoverpause: false,
    perView: 1,
    animationDuration: 10000
}).mount()

Object.values(carousels).map(carousel => {
      const slider = new Glide(carousel, {
        type: "carousel"
      });
      slider.mount();
});