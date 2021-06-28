$(document).ready(function () {
  $(".modal").hide();
  $(".btn").click(function (e) {
    e.preventDefault();
    $(".screen").fadeIn();
    $(".modal").slideDown(1000);
  });
  $(".close-btn").click(function (e) {
    e.preventDefault();
    $(".modal").slideUp(1000);
    $(".screen").fadeOut(1200);
  });
});
