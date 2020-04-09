
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
    perView: 1,
    autoplay: 4000,
    animationDuration: 1000

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

let awardsGlide = document.querySelectorAll("#section__awards> div");
Object.values(awardsGlide).map(carousel => {
  let reviewSlider = new Glide(carousel, {
    type: 'carousel'
    autoplay: true,
    perView: 3,
    autoplay: 4000,
    animationDuration: 1000

  });
  awardsGlide.mount();

});
