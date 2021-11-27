window.addEventListener("load", function () {
  $(document).ready(function () {
    let btnMenu = $(".header__bottom-hide");
    let nav = $(".nav");
    let mainWrapper = $(".mainwrapper");
    let navOverlay = $(".nav_overlay");
    let btnCloseNav = $(".nav__bottom-list .item.--btn_close");
    let body = $("body");
    let toggleMenu = $(".header__bottom-heading .item.--btn_bar");
    // NAV
    function activeNav() {
      nav.addClass("active");
      mainWrapper.addClass("is-active");
      navOverlay.addClass("is-active");
      body.addClass("menu-is-show");
    }
    function closeNav() {
      nav.removeClass("active");
      mainWrapper.removeClass("is-active");
      navOverlay.removeClass("is-active");
      body.removeClass("menu-is-show");
    }
    $(window).resize(function () {
      if ($(this).width() > 767) {
        closeNav();
        toggleMenu.removeClass("active");
      }
    });

    // TOGGLE MENU
    toggleMenu.on("click", function () {
      if ($(this).hasClass("active")) {
        closeNav();
        $(this).removeClass("active");
      } else {
        activeNav();
        $(this).addClass("active");
      }
    });
    btnMenu.on("click", function () {
      activeNav();
      $(window).scrollTop(0);
    });
    navOverlay.on("click", function () {
      closeNav();
    });
    btnCloseNav.on("click", function () {
      closeNav();
    });

    // SLIDER HOME
    let $carousel = $(".scslider__wrapper");
    $carousel.flickity({
      // options
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
    });
    $(".scslider__bottom-ctr .control.--prev").on("click", function () {
      $carousel.flickity("previous");
    });
    $(".scslider__bottom-ctr .control.--next").on("click", function () {
      $carousel.flickity("next");
    });

    // BACK TO TOP
    let backToTop = $(".footer__backtotop");
    backToTop.on("click", function () {
      $("html, body").animate({ scrollTop: 0 });
    });

    // SHOW MENU SCROLL
    let menuScroll = $(".menu-scroll");
    let heightHeading = $("#heading").outerHeight();
    $(window).scroll(function () {
      if ($(window).scrollTop() > heightHeading) {
        menuScroll.addClass("active");
      } else {
        menuScroll.removeClass("active");
      }
    });

    // PARALLAX HERO
    $(".parallax").paroller();

    // ACTIVE HEADER
    let header = $(".header");
    $(window).scroll(function () {
      if ($(window).scrollTop() > header.height()) {
        header.addClass("active");
      } else {
        header.removeClass("active");
      }
    });
  });
});
