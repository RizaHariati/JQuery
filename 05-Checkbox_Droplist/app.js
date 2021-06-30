$(document).ready(function () {
  $(".checkbox").click(function (e) {
    if ($(this)[0].id == "yes") {
      $(".checkbox").find("#no").prop("checked", false);
      $(".input-check").show();
      $(".apply").hide();
    } else if ($(this)[0].id == "no") {
      $(".checkbox").find("#yes").prop("checked", false);
      $(".input-check").hide();
      $(".apply").show();
    }
  });
  $(".selected-list").click(function (e) {
    e.preventDefault();
    $(this).css("box-shadow", "none");
    $(".list").slideToggle(400);
  });
  $("li").click(function (e) {
    e.preventDefault();
    $(".text").text($(this).text());
    $(".selected-list").css("box-shadow", " var(--inner-shadow)");
    $(".list").slideUp();
  });
});
