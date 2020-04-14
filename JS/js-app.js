
document.addEventListener('DOMContentLoaded', function () {
  //BUTTON
  let mainNav = document.getElementById("menu");

  let navBarToggle = document.querySelector(".menu__toggle");

  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("menu-opened");
  });

  //GLIDE PLUGIN
  const mainGlide = new Glide("#main-photo > div", {
    type: 'carousel',
    autoplay: true,
    perView: 1,
    autoplay: 4000,
    animationDuration: 2000
  });
  mainGlide.mount();

  let reviewSlider = new Glide("#section__review > div", {
    type: 'carousel',
    animationDuration: 1000,
    gap: 0
  });
  reviewSlider.mount();

  let awardsSlider = new Glide("#section__awards > div", {
    type: 'carousel',
    autoplay: true,
    perView: 5,
    autoplay: 1000,
    animationDuration: 2000,
    breakpoints: {
      768: {
        perView: 4
      },
      500: {
        perView: 3
      },
    },
    gap: 0
  });
  awardsSlider.mount();
});
