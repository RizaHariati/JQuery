$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "order.json",
    data: "data",
    dataType: "json",
    success: function (data) {
      $.each(data, function (id, item) {
        $(".orders").append(
          `<li>name : ${item.name}, drink : ${item.drink}</li>`
        );
      });
    },
  });
});
