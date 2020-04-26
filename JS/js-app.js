
document.addEventListener('DOMContentLoaded', function () {
  //BUTTON
  let mainNav = document.querySelector(".menu");

  let navBarToggle = document.querySelector(".nav__button");

  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("menu-opened");
  });

  //GLIDE PLUGIN
  if (document.querySelector('#header-slider')) {
    const mainGlide = new Glide("#header-slider", {
      type: 'carousel',
      autoplay: true,
      perView: 1,
      autoplay: 3000,
      animationDuration: 2000
    });
    mainGlide.mount();
  }

  if (document.querySelector('#reviews-slider')) {
    const reviewSlider = new Glide("#reviews-slider", {
      type: 'carousel',
      animationDuration: 1000,
      gap: 0
    });
    reviewSlider.mount();
  }

  if (document.querySelector('#awards-slider')) {
    const awardsSlider = new Glide("#awards-slider", {
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
  }

  if (document.querySelector('#about-awards-slider')) {
    //slider on about page
    let aboutSlider = new Glide("#about-awards-slider", {
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
    aboutSlider.mount();
  }

  // Initialize and add the map
  /*function initMap() {
    // The location of Oslo
    var oslo = { lat: 59.91273, lng: 10.74609 };
    // The map, centered at Oslo
    var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 4, center: oslo });
    // The marker, positioned at Oslo
    var marker = new google.maps.Marker({ position: oslo, map: map });
  }*/
  
});
