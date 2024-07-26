const navToggle = document.querySelector("#navToggle");
const navHeader = document.querySelector(".nav-header");
const hambugerIcon = document.querySelectorAll(".hambuger-icon");
const hambuger = document.querySelector("#hambuger");
const items = document.querySelectorAll(".slider .list .item");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const thumbnails = document.querySelectorAll(".thumbnail .item");

navToggle.addEventListener("click", function () {
  navHeader.classList.toggle("open");
  hambugerIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});

let countItem = items.length;
let itemActive = 0;

next.addEventListener("click", function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
});

prev.addEventListener("click", function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
});

let refreshInterval = setInterval(() => {
  next.click();
}, 5000);

function showSlider() {
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailAtiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailAtiveOld.classList.remove("active");

  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  clearInterval(refreshInterval);
}

thumbnails.forEach((thumbnails, index) => {
  thumbnails.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});
