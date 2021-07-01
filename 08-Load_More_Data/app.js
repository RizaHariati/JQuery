$(document).ready(function () {
  $(".search").keyup(function (e) {
    e.preventDefault();

    if (e.key == "Enter") {
      $(".container").html(``);
      const data = $(".search").val();
      if (data) {
        searchData(data);
        $(".search").val("");
      } else {
        showModal("empty value");
      }
    }
  });
  $(".close-btn").click(function (e) {
    e.preventDefault();
    $(".dark-background").hide();
    $(".modal").hide();
  });
});

function searchData(input) {
  $.ajax({
    type: "GET",
    url: `http://www.omdbapi.com/?s=${input}&apikey=ebb5d959&plot=short`,
    data: "data",
    dataType: "json",
    success: function (data) {
      const array = data.Search;
      if (!array) {
        showModal(
          "Can't find film with your keywords please enter another title"
        );
        return;
      }
      let index = 2;
      setData(array, 0);
      $(".card").slideDown(100);
      $(".show-btn").show();
      $(".btn").click(function () {
        if (index < array.length) {
          setData(array, index);
          index = index + 3;
          $(".card").slideDown(200);
        } else {
          showModal("No more data");
        }
      });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(error);
    },
  });
}
function setData(array, id) {
  if (!array) {
    return;
  }
  const temp = array.filter((item, index) => index >= id && index <= id + 2);
  $.each(temp, function (id, item) {
    const { Poster, Title, Type, Year, imdbID } = item;

    // let movie = Title.substring(0, 45);
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
  }).join("");
}

function showModal(data) {
  $(".modal h2").text(data);
  $(".dark-background").show();
  $(".modal").show();
  $(".show-btn").hide();
}
