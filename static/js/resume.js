(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

class ImageSlider {
    constructor(sliderId) {
        this.slider = document.getElementById(sliderId);
        this.images = this.slider.querySelectorAll('img');
        this.index = 0;
        this.intervalId = null;
        this.start();
        this.addEventListeners();
    }

    showNextImage() {
        this.images[this.index].classList.remove('active');
        this.index = (this.index + 1) % this.images.length;
        this.images[this.index].classList.add('active');
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => this.showNextImage(), 2000);
        }
    }

    pause() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    addEventListeners() {
        this.slider.addEventListener('mouseenter', () => this.pause());
        this.slider.addEventListener('mouseleave', () => this.start());
    }
}

const slider1 = new ImageSlider('slider1');
slider1.start();
const slider2 = new ImageSlider('slider2');
slider2.start();
const slider3 = new ImageSlider('slider3');
slider3.start();
const slider4 = new ImageSlider('slider4');
slider4.start();
const slider5 = new ImageSlider('slider5');
slider5.start();
const slider6 = new ImageSlider('slider6');
slider6.start();