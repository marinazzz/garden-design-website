
//BUTTON
let mainNav = document.getElementById("menu");

let navBarToggle = document.querySelector(".menu__toggle");

navBarToggle.addEventListener("click", function () {

    mainNav.classList.toggle("menu-opened");
});

//GLIDE PLUGIN

new Glide('.glide', {
    type: 'carousel',
    autoplay: true,
    hoverpause: false,
    perView: 1,
    animationDuration: 10000
}).mount()


const carousels = document.querySelectorAll(".glide");
Object.values(carousels).map(carousel => {
      const slider = new Glide(carousel, {
        type: "carousel"
      });
      slider.mount();
});

let input = document.querySelector('#options-per-view-input')

let glide = new Glide('#options-per-view', {
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    perView: event.target.value
  })
})

glide.mount()