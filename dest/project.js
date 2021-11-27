window.addEventListener("load", function () {
  let btnCurrent = document.querySelector(".scbanner__dropdown-select");
  let spanCurrent = document.querySelector(".scbanner__dropdown-select span");
  let options = document.querySelector(".scbanner__dropdown-list");
  let optionsItems = document.querySelectorAll(
    ".scbanner__dropdown-list .item"
  );
  btnCurrent.addEventListener("click", function () {
    options.classList.toggle("active");
  });
  optionsItems.forEach(function (item) {
    item.addEventListener("click", function () {
      let optionText = this.textContent;
      let selectText = spanCurrent.textContent;
      spanCurrent.innerHTML = optionText;
      this.textContent = selectText;
    });
  });
  $(document).ready(function () {
    let btnPagination = $(".scproject__pagination .btn");
    let pjList = $(".scproject__list");
    btnPagination.on("click", function (e) {
      // e.preventDefault();
      index = $(this).index();
      btnPagination.removeClass("active");
      $(this).addClass("active");
      pjList.removeClass("active");
      pjList.eq(index).addClass("active");
      console.log($(this).index());
    });
    let header = $(".header");

    $(document).on("click", 'a[href^="#"]', function (event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - header.height(),
        },
        500
      );
    });
  });
});
