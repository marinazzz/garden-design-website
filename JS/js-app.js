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

  //FORM VALIDATION
  if (document.querySelector('#contact-form')) {
    const form = document.getElementById('contact-form');
    const feedback = document.querySelector('.feedback');

    //regexp for validation
    const namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailValid = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const phoneValid = /^(0047|\+47|47)?[2-9]\d{7}$/;
    const cityValid = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    // const textLenght = /^\s*(?:\S\s*){10,100}$/;



    form.querySelector('input[type="submit"]').addEventListener('click', function (e) {
      e.preventDefault();

      //name validation
      const name = form.name.value;
      if (!namePattern.test(name)) {
        form.querySelector('[name="name"] + .feedback').classList.add('show');
      } else {
        form.querySelector('[name="name"] + .feedback').classList.remove('show');
      }

      //email validation
      const email = form.email.value;
      if (!emailValid.test(email)) {
        form.querySelector('[name="email"] + .feedback').classList.add('show');
      } else {
        form.querySelector('[name="email"] + .feedback').classList.remove('show');
      }

      //phone validation
      const phone = form.phone.value;
      if (!phone) {
        form.querySelector('[name="phone"] + .feedback').classList.add('show');
      } else {
        form.querySelector('[name="phone"] + .feedback').classList.remove('show');
      }

      //city validation
      const city = form.city.value;
      if (!cityValid.test(city)) {
        form.querySelector('[name="city"] + .feedback').classList.add('show');
      } else {
        form.querySelector('[name="city"] + .feedback').classList.remove('show');
      }

      //text area max 100 characters
      const text = form.text.value;
      if (!(text.length < 100)) {
        form.querySelector('[name="text"] + .feedback').classList.add('show');
      } else {
        form.querySelector('[name="text"] + .feedback').classList.remove('show');
      }
    });
  }
});
