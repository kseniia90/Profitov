"use strict";

// sign-up popup 

if(document.querySelector('.sign-up_popup') !== null) {

  document.querySelectorAll('.sign-up-btn').forEach(function(button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.style.overflow = 'hidden';
      document.querySelector('.sign-up_popup').classList.add('active');
    });
  })
  document.querySelector('.sign-up_popup-content').addEventListener('click', function (e) {
    e.stopPropagation();
  });
  
  document.querySelector('.sign-up_popup .close_popup').addEventListener('click', function (e) {
    document.body.style.overflow = 'visible';
    document.querySelector('.sign-up_popup').classList.remove('active');
  });
}

// FAQ popup 

if(document.querySelector('.faq_popup') !== null) {

  document.querySelectorAll('.questions-btn').forEach(function(button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.style.overflow = 'hidden';
      document.querySelector('.faq_popup').classList.add('active');
    });
  })
  document.querySelector('.faq_popup-content').addEventListener('click', function (e) {
    e.stopPropagation();
  });
  
  document.querySelector('.faq_popup .close_popup').addEventListener('click', function (e) {
    document.body.style.overflow = 'visible';
    document.querySelector('.faq_popup').classList.remove('active');
  });
}

// Accordion

$(function () {

$(".accordion__title").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  if (!$this.hasClass("accordion-active")) {
    $(".accordion__content").slideUp(400);
    $(".accordion__title").removeClass("accordion-active");
    $(".accordion__arrow").removeClass("accordion__rotate");
  }
  $this.toggleClass("accordion-active");
  $this.next().slideToggle();
  $(".accordion__arrow", this).toggleClass("accordion__rotate");
});
});

new WOW().init();
// $('.wow').hide();

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".second-screen", {
//   scrollTrigger: {
//     scroller: ".container2",
//     trigger: ".section-02",
//     start: 'center 55%',
//     markers: true,
//     toggleActions: 'play complete restart reverse',
//     onEnter: function(ScrollTrigger) {
//       console.log(ScrollTrigger.progress)
//       $('.wow').each(function(i, e) {
//         if ($(e).data('wow-delay')) {
//           setTimeout(function() {
//             $(e).show().addClass('animate__animated animate__bounceInUp');
//           }, $(e).data('wow-delay') * 1000);
//         } else {
//           $(e).show().addClass('animate__animated animate__bounceInUp');
//         }
//       });
//     }
//   }, 
//   duration: 2,
//   ease: 'back'
// });

