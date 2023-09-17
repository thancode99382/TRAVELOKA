// nav
function Nav() {
  var itemList = document.querySelectorAll(".item-list");
  itemList.forEach((item) => {
    item.addEventListener("click", () => {
      itemList.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
}
Nav();
// nav
// vehicle
function Vehicle() {
  var vehicle = document.querySelectorAll(".item-vehicle");
  var vehicleLogo = document.querySelectorAll(".vehicle-logo");

  vehicle.forEach((itemVe) => {
    itemVe.addEventListener("click", () => {
      vehicle.forEach((itemVe) => {
        itemVe.classList.remove("active-vehicle");
        itemVe.classList.remove("h");
      });
      itemVe.classList.add("active-vehicle");
      itemVe.classList.add("h");
    });
  });
}
Vehicle();

//review-slider
function reviewSlider() {
  var prevButton = document.getElementById("prev");
  var nextButton = document.getElementById("next");
  var reviewList = document.querySelector(".review-list");
  var reviewItem = document.querySelectorAll(".review-item");
  var currentItem = 0;

  nextButton.addEventListener("click", () => {
    if (currentItem < reviewItem.length - 1) {
      currentItem++;
      updateSlider();
    } else if (currentItem == reviewItem.length - 1) {
      currentItem = 0;
      updateSlider();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentItem > 0) {
      currentItem--;
      updateSlider();
    } else if (currentItem == 0) {
      currentItem = reviewItem.length - 1;
      updateSlider();
    }
  });

  function updateSlider() {
    var checkpx = reviewItem[currentItem].offsetWidth;
    var translateX = -currentItem * checkpx;
    reviewList.style.transform = `translateX(${translateX + "px"})`;
  }
}
reviewSlider();
