
document.addEventListener('DOMContentLoaded', function () {
  //BUTTON
  let mainNav = document.getElementById("menu");

  let navBarToggle = document.querySelector(".menu__toggle");

  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("menu-opened");
  });

  //GLIDE PLUGIN
  const mainGlide = new Glide("#main-photo > div", {
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
    gap: 0,
    perView: 5,
    autoplay: 5000,
    slideWidth: 1000,
    animationDuration: 1000,
    breakpoints: {
      768: {
        perView: 4
      },
      500: {
        perView: 3
      },
    }
  });
  awardsSlider.mount();
});
