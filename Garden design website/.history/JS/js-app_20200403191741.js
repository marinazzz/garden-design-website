
//BUTTON
let mainNav = document.getElementById("menu");

let navBarToggle = document.getElementsByClassName("menu__toggle");

navBarToggle.addEventListener("click", function () {

    mainNav.classList.toggle("menu-opened");
});

//GLIDE PLUGIN

/*new Glide('.glide', {
    type: 'carousel',
    autoplay: true,
    hoverpause: false,
    perView: 1,
    animationDuration: 10000
}).mount()*/

let mainGlide = document.querySelectorAll("#main-photo > div");
Object.values(mainGlide).map(carousel => {
      let mainGlider = new Glide(carousel, {
         autoplay: true,
         hoverpause: false,
         perView: 1,
         animationDuration: 10000
      });
      mainGlider.mount();
})

let reviewGlide = document.querySelectorAll("#reviews > div");
Object.values(reviewGlide).map(carousel => {
      let reviewSlider = new Glide(carousel, {
        type: 'carousel'
      });
      reviewSlider.mount();
});

//breakpoints

/*new Glide('.glide').mount({ Breakpoints })
Breakpoints.match({
  600: { perView: 1 },
  1200: { perView: 3 }
});*/

