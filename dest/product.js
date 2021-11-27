window.addEventListener("load", function () {
  $(document).ready(function () {
    let $carousel1 = $("#sl-1");
    $carousel1.flickity({
      // options
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
    });
    $("#next-1").on("click", function () {
      $carousel1.flickity("next");
    });
    let $carousel2 = $("#sl-2");
    $carousel2.flickity({
      // options
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
    });
    $("#next-2").on("click", function () {
      $carousel2.flickity("next");
    });
    let $carousel3 = $("#sl-3");
    $carousel3.flickity({
      // options
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
    });
    $("#next-3").on("click", function () {
      $carousel3.flickity("next");
    });
    let $carousel4 = $("#sl-4");
    $carousel4.flickity({
      // options
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
    });
    $("#next-4").on("click", function () {
      $carousel4.flickity("next");
    });
    let $carousel5 = $("#sl-5");
    $carousel5.flickity({
      // options
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
    });
    $("#next-5").on("click", function () {
      $carousel5.flickity("next");
    });
  });
});
