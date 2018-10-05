/*global $, jQuery, alert*/
$(document).ready(function() {
  "use strict";
  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //

  $(document).on("scroll", onScroll);

  $('a[href^=".html"]').on("click", function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $("img").each(function() {
      $(this).removeClass("active");
      if ($(window).width() < 500) {
        $(".nav-menu").slideUp();
      }
    });

    $(this).addClass("active");

    var target = this.hash,
      menu = target;

    target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top - 80
        },
        500,
        "swing",
        function() {
          window.location.hash = target.selector;
          $(document).on("scroll", onScroll);
        }
      );
  });

  function onScroll(event) {
    if ($("body").length) {
      var scrollPos = $(document).scrollTop();
      $(".navbar-nav").each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // // ========================================================================= //

  // $(window).scroll(function () {
  //     var scroll = $(window).scrollTop();
  //     if (scroll > 200) {
  //         $("#main-nav, #main-nav-subpage").slideDown(700);
  //         $("#main-nav-subpage").removeClass("subpage-nav");
  //     } else {
  //         $("#main-nav").slideUp(700);
  //         $("#main-nav-subpage").hide();
  //         $("#main-nav-subpage").addClass("subpage-nav");
  //     }
  // });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  // $(window).on("click", function(e) {
  //   $(".navbar").slideToggle();
  // });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //
  // $(function () {
  //     $('.carousel').carousel();
  // });
  $(document).ready(function() {
    // Activate Carousel
    $("#myCarousel").carousel({
      interval: 8000
    });

    // Enable Carousel Indicators
    $(".item1").click(function() {
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function() {
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function() {
      $("#myCarousel").carousel(2);
    });
    $(".item4").click(function() {
      $("#myCarousel").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function() {
      $("#myCarousel").carousel("prev");
    });
    $(".right").click(function() {
      $("#myCarousel").carousel("next");
    });
  });

  // $("navbar-brand").owlCarousel({
  //     autoplay: true,
  //     loop: true,
  //     margin: 20,
  //     dots: true,
  //     nav: false,
  //     responsiveClass: true,
  //     responsive: {
  //         0: {
  //             items: 1
  //         },
  //         768: {
  //             items: 2
  //         },
  //         900: {
  //             items: 4
  //         }
  //     }
  // });

  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //

  // var portfolioIsotope = $(".portfolio-container").isotope({
  //     itemSelector: ".portfolio-thumbnail",
  //     layoutMode: "fitRows"
  // });

  // $("#portfolio-flters li").on("click", function () {
  //     $("#portfolio-flters li").removeClass("filter-active");
  //     $(this).addClass("filter-active");

  //     portfolioIsotope.isotope({
  //         filter: $(this).data("filter")
  //     });
  // });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  // var magnifPopup = function () {
  //     $("img").magnificPopup({
  //         type: "image",
  //         removalDelay: 300,
  //         mainClass: "mfp-with-zoom",
  //         gallery: {
  //             enabled: true
  //         },
  //         zoom: {
  //             enabled: true, // By default it's false, so don't forget to enable it

  //             duration: 300, // duration of the effect, in milliseconds
  //             easing: "ease-in-out", // CSS transition easing function

  //             // The "opener" function should return the element from which popup will be zoomed in
  //             // and to which popup will be scaled down
  //             // By defailt it looks for an image tag:
  //             opener: function (openerElement) {
  //                 // openerElement is the element on which popup was initialized, in this case its <a> tag
  //                 // you don't need to add "opener" option if this code matches your needs, it's defailt one.
  //                 return openerElement.is("img") ?
  //                     openerElement :
  //                     openerElement.find("img");
  //             }
  //         }
  //     });
  // };

  // // Call the functions
  // magnifPopup();
});
