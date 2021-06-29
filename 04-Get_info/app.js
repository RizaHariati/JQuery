$(document).ready(function () {
  $("#fileupload").change(function (e) {
    $(".filename").css("color", "var(--primary-dark");
    const image = e.currentTarget.files[0].name;
    $(".filename").text(image);
    $(".image").slideDown(400);
    $(".image").html(`
          <img src="./img/${image}" alt="${image}" />
       `);
  });

  $("label").mouseover(function (e) {
    e.preventDefault();
    $(".image").slideUp(400);
  });

  $(".btn").click(function (e) {
    e.preventDefault();
    const sibling = $(this).next();

    if ($(this).text() == "read joke") {
      $(".text").slideUp();
      $(".btn").text("read joke");
      $(".btn").css({
        background: "var(--primary-medium)",
        color: "var(--primary-dark)",
      });
      $(this).text("read less");
      $(this).css({ background: "var(--primary-dark)", color: "white" });
      sibling.slideDown();
    } else {
      $(this).text("read joke");
      $(this).css({
        background: "var(--primary-medium)",
        color: "var(--primary-dark)",
      });
      sibling.slideUp();
    }
  });
});
