$(document).ready(function () {
  $(".search").keyup(function (e) {
    e.preventDefault();
    if (e.key == "Enter") {
      $(".container").html("");
      const input = $(this).val();
      if (input) {
        searchData(input);
      } else {
        showModal("Value is empty, please try again");
      }
      $(this).val("");
    }
  });
  $(".close-btn").click(closeModal);
});

function searchData(input) {
  $.ajax({
    type: "GET",
    url: `http://www.omdbapi.com/?s=${input}&apikey=ebb5d959&plot=short`,
    data: "data",
    dataType: "json",
    success: function (result) {
      const data = result.Search;
      if (!data) {
        showModal("Can't find movie with that keyword. Please try again");
        return;
      }
      setData(data);
      let index = 0;
      showData(index);
      $(".show-btn").show();
      $(".btn").click(function (e) {
        index = index + 3;
        e.preventDefault();
        if (index < data.length) {
          showData(index);
        } else {
          showModal("The end of list");
        }
      });
    },
    error: function () {
      alert("no data");
    },
  });
}

function setData(data) {
  $.each(data, function (id, item) {
    const { Poster, Title, Type, Year, imdbID } = item;

    $(".container").append(`
        <div class="card">
        <div class="image">
          <img src="${Poster}" alt="${imdbID}" />
        </div>
        <div class="info">
          <h3 class="title">${Title}</h3>
          <p class="year">Year : ${Year}</p>
          <p class="movie-id">Id : ${imdbID}</p>
        </div>
        </div>
        
        `);
  });
}
function showData(index) {
  $(".card")
    .slice(index, index + 3)
    .slideDown(100);
}
function showModal(text) {
  $(".modal h2").text(text);
  $(".dark-background").show(100);
  $(".modal").show(200);
}

function closeModal() {
  $(".dark-background").hide(200);
  $(".modal").hide(100);
  $(".show-btn").hide();
}
