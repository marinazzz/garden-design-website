
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
    hoverpause: true,
    animationTimingFunc: 'linear(0.165, 0.840, 0.440, 1.000)',
    perView: 1,
    animationDuration: 10000,
    Autoplay: {
      time: 2
    }
    
  });
  mainGlider.mount();
})

let reviewGlide = document.querySelectorAll("#section__reviews > div");
Object.values(reviewGlide).map(carousel => {
  let reviewSlider = new Glide(carousel, {
    type: 'carousel'
    
  });
  reviewSlider.mount();

});


