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

// sign-up completed

if(document.querySelector('.sign-up-completed_popup') !== null) {

  document.querySelectorAll('.sign-up_popup-btn').forEach(function(button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
    document.querySelector('.sign-up_popup').classList.remove('active');
      document.body.style.overflow = 'hidden';
      document.querySelector('.sign-up-completed_popup').classList.add('active');
    });
  })
  document.querySelector('.sign-up-completed_popup-content').addEventListener('click', function (e) {
    e.stopPropagation();
  });
  
  document.querySelector('.sign-up-completed_popup .close_popup').addEventListener('click', function (e) {
    document.body.style.overflow = 'visible';
    document.querySelector('.sign-up-completed_popup').classList.remove('active');
  });
}

// COOKIE popup 

if(document.querySelector('.cookie_popup') !== null) {

  document.querySelectorAll('.cookie-btn').forEach(function(button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.style.overflow = 'hidden';
      document.querySelector('.cookie_popup').classList.add('active');
    });
  })
  document.querySelector('.cookie_popup-content').addEventListener('click', function (e) {
    e.stopPropagation();
  });
  
  document.querySelector('.cookie_popup .close_popup').addEventListener('click', function (e) {
    document.body.style.overflow = 'visible';
    document.querySelector('.cookie_popup').classList.remove('active');
  });

  document.querySelector('.cookie-btn-approve').addEventListener('click', function (e) {
    
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    
    setCookie('cookie_profitof', '1', 30);

    document.querySelector('.first-screen__cookie').classList.add('hide');
    
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if(getCookie('cookie_profitof') !== '1') {
    document.querySelector('.first-screen__cookie').classList.remove('hide');
  }

});

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
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

// new WOW().init();

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
document.getElementById("fullview").addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    if (scrollAllowed && Math.abs(event.deltaY) > 5) {
      if (event.deltaY < 0) {
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
      } else if (event.deltaY > 0) {
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
