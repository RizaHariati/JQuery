let arrayImage = [
  "img-1.jpg",
  "img-2.jpg",
  "img-3.jpg",
  "img-4.jpg",
  "img-5.jpg",
  "img-6.jpg",
  "img-7.jpg",
  "img-8.jpg",
  "img-9.jpg",
  "img-10.jpg",
];

$(document).ready(function () {
  loadImages(arrayImage);
  setImage(
    $(".thumbnails")
      .children()
      .eq(arrayImage.length - 2)
  );
  $(".thumbnail").click(function (e) {
    e.preventDefault();

    setImage($(this));
  });
  $(".prev").click(function (e) {
    $(".big-image").hide();
    const value = $(".thumbnail-container").css("left");
    console.log(value);
    const valueInt = parseInt(value);
    if (valueInt > -740) {
      moveToPrev();
    }
    $(".big-image").fadeIn(500);
  });
  $(".next").click(function (e) {
    $(".big-image").hide();
    const value = $(".thumbnail-container").css("left");
    const valueInt = parseInt(value);
    if (valueInt < 0) {
      moveToNext();
    }
    $(".big-image").fadeIn(500);
  });
});

function loadImages(arrayImage) {
  $.each(arrayImage, function (id, item) {
    $(".thumbnails").append(`
      <div class="thumbnail ">
              <img
                src="./img/${item}"
                alt="img-1"
                id="${item}"
                class="img-thumbnail"
              />
            </div>
    `);
  });
}

function setImage(data) {
  $(".big-image").hide();
  $(".thumbnail").removeClass("active");
  data.addClass("active");
  const image = data.find("img").attr("src");
  $(".main-image").find("img").attr("src", image);
  $(".big-image").fadeIn(500);
}

function moveToPrev() {
  $(".thumbnail-container").animate({ left: `-=130px` }, 300);
  const nextItem = $(".active").closest(".thumbnail");
  $(".active").removeClass("active");
  nextItem.next().addClass("active");
  const image = nextItem.next().find("img").attr("src");
  $(".main-image").find("img").attr("src", image);
}

function moveToNext() {
  $(".thumbnail-container").animate({ left: `+=130px` }, 300);
  const prevItem = $(".active").closest(".thumbnail");
  $(".active").removeClass("active");
  prevItem.prev().addClass("active");
  const image = prevItem.prev().find("img").attr("src");
  $(".main-image").find("img").attr("src", image);
}
