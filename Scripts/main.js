// Header

$(document).ready(function() {
  var $nav = $('nav');

  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > $nav.height()) {
        $nav.addClass("scrolled");
      } else {
        $nav.removeClass("scrolled");
      }
    });
  });
});

// Menu toggle
let navIcon = document.querySelector('.nav-icon');
let nav = document.querySelector('.overlay-menu');

navIcon.addEventListener('click', () => {
  if (nav.style.transform != 'translateX(0%)') {
    nav.style.transform = 'translateX(0%)';
    nav.style.transition = 'transform 0.2s ease-out';
  } else {
    nav.style.transform = 'translateX(-100%)';
    nav.style.transition = 'transform 0.2s ease-out';
  }
});

// Menu toggle icon
let toggleIcon = document.querySelector('.nav-icon');

toggleIcon.addEventListener('click', () => {
  if (toggleIcon.className != 'nav-icon toggle') {
    toggleIcon.className += ' toggle';
  } else {
    toggleIcon.className = 'nav-icon';
  }
});

// lol

document.addEventListener('DOMContentLoaded', function() {
  var lazyBackgrounds = [].slice.call(document.querySelectorAll('[img-defer]'));

  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  ) {
    let lazyBackgroundObserver = new IntersectionObserver(function(
      entries,
      observer
    ) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});

// animate($('.circle'), 0.69);

// Footer

// $(".facebook").hover(function() {
//  $(".footer").toggleClass("bg-facebook");
//  $(".facebook").toggleClass("white");
//  $(".love").toggleClass("white");
// });
// $(".twitter").hover(function() {
//  $(".footer").toggleClass("bg-twitter");
//  $(".twitter").toggleClass("white");
//  $(".love").toggleClass("white");
// });
// $(".github").hover(function() {
//  $(".footer").toggleClass("bg-github");
//  $(".github").toggleClass("white");
//  $(".love").toggleClass("white");
// });
// $(".josh").hover(function() {
//  $(".footer").toggleClass("bg-josh");
//  $(".josh").toggleClass("white");
//  $(".love").toggleClass("white");
// });
