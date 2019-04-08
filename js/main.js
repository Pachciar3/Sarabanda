//CAROUSEL
$(document).ready(function () {
  $('.jobs-carousel').slick({
    dots: false,
    arrows: false,
    mobileFirst: true,
    focusOnSelect: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '10px',
    mobileFirst: true,
    responsive: [{
        breakpoint: 400,
        settings: {
          centerPadding: '25px',
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: '180px',
        }
      },
      {
        breakpoint: 1300,
        settings: {
          centerPadding: '20px',
          slidesToShow: 3,
        }
      }
    ]
  });
});
//NAVBAR
const $navBar = $('#navbar');
const $navbarToggler = $('#navbar .navbar-toggler');
const $navbarNav = $('#navbar #navbarNav');
$(window).on("scroll", () => {
  if (!$navbarNav.hasClass('show')) {
    if ($navBar.offset().top > 0) {
      $navBar.addClass("bg-dark");
    } else {
      $navBar.removeClass("bg-dark");
    }
  }
});
$navbarToggler.on("click", () => {
  if ($navBar.offset().top == 0) {
    $navBar.toggleClass("bg-dark");
  }
});
$(window).on("resize", () => {
  if (window.innerWidth > 991) {
    $navbarNav.collapse('hide');
    if ($navBar.offset().top == 0) {
      $navBar.removeClass("bg-dark");
    }
  }
})
//FORM VALIDATION
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();