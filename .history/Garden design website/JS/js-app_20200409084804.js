
//BUTTON
let mainNav = document.getElementById("menu");

let navBarToggle = document.querySelector(".menu__toggle");

navBarToggle.addEventListener("click", function () {

  mainNav.classList.toggle("menu-opened");
});

//GLIDE PLUGIN

let mainGlide = document.querySelectorAll("#main-photo > div");
Object.values(mainGlide).map(carousel => {
  let mainGlider = new Glide(carousel, {
    autoplay: true,
    hoverpause: false,
    perView: 1,
    animationDuration: 1000,
    swipeThreshold: 300|true

  });
  mainGlider.mount().bind();
})

let reviewGlide = document.querySelectorAll("#section__reviews > div");
Object.values(reviewGlide).map(carousel => {
  let reviewSlider = new Glide(carousel, {
    type: 'carousel'
    
  });
  reviewSlider.mount();

});


