
document.addEventListener('DOMContentLoaded', function () {
  //BUTTON
  let mainNav = document.querySelector(".menu");

  let navBarToggle = document.querySelector(".nav__button");

  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("menu-opened");
  });

  //GLIDE PLUGIN
  const mainGlide = new Glide("section.slider > div", {
    type: 'carousel',
    autoplay: true,
    perView: 1,
    autoplay: 3000,
    animationDuration: 2000
  });
  mainGlide.mount();

  let reviewSlider = new Glide("section.section-reviews > div", {
    type: 'carousel',
    animationDuration: 1000,
    gap: 0
  });
  reviewSlider.mount();

  let awardsSlider = new Glide("section.section-awards > div", {
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
