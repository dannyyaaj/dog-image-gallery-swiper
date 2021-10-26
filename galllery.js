const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  speed: 400,
  spaceBetween: 100,
  loop: true,
  autoplay: true,
  delay: 5000,
  effect: 'cards',
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  lazy: {
    loadPrevNext: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
