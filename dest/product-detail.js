window.addEventListener("load", function (e) {
  $(document).ready(function () {
    let pdItem = $(".screlated__item-list .item");
    if ($(this).width() <= 991) {
      pdItem.removeClass("scale");
    } else {
      pdItem.addClass("scale");
    }
    $(window).bind("resize", function () {
      if ($(this).width() <= 991) {
        pdItem.removeClass("scale");
      } else {
        pdItem.addClass("scale");
      }
    });
    let $carousel = $(".scdetail__left-image.--carousel");
    $carousel.flickity({
      // options
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      draggable: true,
      pageDots: false,
      wrapAround: true,
      fullscreen: true,
    });
    $(".scdetail__left-ctr .btn_control.--prev").on("click", function () {
      $carousel.flickity("previous");
    });
    $(".scdetail__left-ctr .btn_control.--next").on("click", function () {
      $carousel.flickity("next");
    });
    $(".btn_zoom").on("click", function () {
      $carousel.flickity("viewFullscreen");
    });
  });
});
