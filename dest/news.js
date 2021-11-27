window.addEventListener("load", function () {
  $(document).ready(function () {
    let btnPagination = $(".scnews__pagination .btn");
    let pjList = $(".scnews__list");
    btnPagination.on("click", function (e) {
      // e.preventDefault();
      index = $(this).index();
      btnPagination.removeClass("active");
      $(this).addClass("active");
      pjList.removeClass("active");
      pjList.eq(index).addClass("active");
    });
    let header = $(".header");
    $(document).on("click", 'a[href^="#"]', function (event) {
      event.preventDefault();
      $("html, body").animate(
        { scrollTop: $($.attr(this, "href")).offset().top - header.height(),},
        500
      );
    });
  });
});
