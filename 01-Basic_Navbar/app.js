$(document).ready(function () {
  $(".navbar li").hover(function () {
    $(this).find(".submenu").slideToggle(1000); // over
  });
  $(".sub-item").hover(function () {
    // over
    $(this).find("a").toggleClass("coloring");
  });
});
