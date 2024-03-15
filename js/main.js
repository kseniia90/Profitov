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

function isOnScreen(element) {
  if (
    $(window).scrollTop() < $(element).offset().top ||
    $(window).scrollTop() >= $(element).offset().top + $(element).height()
  ) {
    return false;
  }
  return true;
}

let scrollAllowed = true;
window.addEventListener(
  "wheel",
  (event) => {
    if (event.deltaY < 0) {
      event.preventDefault();
      if (scrollAllowed) {
        $("#fullview .screen").each(function (i, e) {
          if (isOnScreen(e)) {
            if ($(e).prev().length) {
              // $(e).prev()[0].scrollIntoView({ behavior: "smooth" });
              scrollAllowed = false;
              $("html, body").css("scroll-behavior", "auto");
              $("html").animate(
                { scrollTop: $(e).prev().offset().top },
                800,
                "swing",
                function () {
                  scrollAllowed = true;
                  $("html, body").css("scroll-behavior", "");
                }
              );
            }
            return false;
          }
        });
      }
    } else if (event.deltaY > 0) {
      event.preventDefault();
      if (scrollAllowed) {
        $("#fullview .screen").each(function (i, e) {
          if (isOnScreen(e)) {
            if ($(e).next().length) {
              // $(e).next()[0].scrollIntoView({ behavior: "smooth" });
              scrollAllowed = false;
              $("html, body").css("scroll-behavior", "auto");
              $("html").animate(
                { scrollTop: $(e).next().offset().top },
                800,
                "swing",
                function () {
                  scrollAllowed = true;
                  $("html, body").css("scroll-behavior", "");
                }
              );
            }
            return false;
          }
        });
      }
    }
  },
  {
    passive: false,
  }
);
