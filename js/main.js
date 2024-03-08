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

// let fullView;

// if ($(window).width() > 768) {
//   $('body').css('overflow', 'hidden');
//   fullView = $("#fullview").fullView({dots: false});
// }
