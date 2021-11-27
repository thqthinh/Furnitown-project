window.addEventListener("load", function () {
  $(document).ready(function () {
    let pdItem = $(".scproducts__item-list .item");
    console.log(pdItem);
    if ($(window).width() <= 991) {
      pdItem.removeClass("scale");
    } else {
      pdItem.addClass("scale");
    }
    $(window).bind("resize", function () {
      if ($(window).width() <= 991) {
        pdItem.removeClass("scale");
      } else {
        pdItem.addClass("scale");
      }
    });
  });
});
