$(document).ready(function () {
  const width = 200;
  const speed = 1000;
  const pause = 2000;
  let move = "forward";
  let index = 0;
  const slider = $("#slider .slides");
  const interval = setInterval(() => {
    if (move == "forward") {
      index++;
      slider.animate({ left: `-=${width}px` }, 1000);
      if (index >= 4) {
        move = "backward";
      }
    }
    if (move == "backward") {
      index--;
      slider.animate({ left: `+=${width}px` }, 1000);
      if (index <= 0) {
        move = "forward";
      }
    }
  }, pause);
});
