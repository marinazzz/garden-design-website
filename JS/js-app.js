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

  const form = document.getElementById('contact-form');
  const feedback = document.querySelector('.feedback');

  //regexp for validation
  const namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const emailValid = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(domain|domain2)\.com$/;
  const phoneValid = /^(0047|\+47|47)?[2-9]\d{7}$/;
  const cityValid = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
  const textLenght = /^\s*(?:\S\s*){10,100}$/;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    //name validation
    const name = form.name.value;

    if (namePattern.test(name)) {
      // feedback good info
      return true;
    } else {
      //fedback help
      feedback.textContent = 'Name must contain letters only!';
    }
    
    //email validation
    const email = form.email.value;

    if (emailValid.test(email)) {
      return true;
    } else {
      feedback.textContent = 'You have entered an invalid email address!';
    }

    //phone validation
    const phone = form.phone.value;

    if (phoneValid.test(phone)) {
      return true;
    } else {
      feedback.textContent = 'You have entered an invalid phone number!';
    }

    //city validation
    const city = form.city.value;

    if (cityValid.test(city)) {
      return true;
    } else {
      feedback.textContent = 'You have entered an invalid city name!';
    }

    //text area max 100 characters
    const text = form.text.value;

    if (textLenght.test(text)) {
      return true;
    } else {
      feedback.textContent = 'Your text must be 100 characters or less!';
    }
       
  });


  
});
