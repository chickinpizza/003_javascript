const swiper = new Swiper(".slide-visual", {
  navigation: {
    nextEl: ".slide-visual__next",
    prevEl: ".slide-visual__prev",
  },
  loop: true,
});

const swiper2 = new Swiper(".slide-main", {
  pagination: {
    el: ".slide-main__paging",
  },
});`