const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const images = document.querySelectorAll(".gallery-img");
let currentImage = 0;

prevButton.addEventListener("click", function () {
  if (currentImage === 0) {
    prevButton.disabled = true;
  }

  images[currentImage].classList.remove("active");
  currentImage--;
  
  if (currentImage <= 0) {
    currentImage = 0;
  }
  nextButton.disabled = false;
  images[currentImage].classList.add("active");
});

nextButton.addEventListener("click", function () {
  images[currentImage].classList.remove("active");
  currentImage++;
  images[currentImage].classList.add("active");
  prevButton.disabled = false;

  if (currentImage === images.length - 1) {
    nextButton.disabled = true;
  }
});
