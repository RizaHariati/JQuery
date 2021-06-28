$(document).ready(function () {
  $("#show").click(function name() {
    if ($(this).is(":checked")) {
      $("#password").attr("type", "text");
    } else {
      $("#password").attr("type", "password");
    }
  });
});
