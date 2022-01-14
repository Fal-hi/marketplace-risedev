document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".own1").ownCarousel({
    itemPerRow: 4,
    // autoplay: 5000,
    nav: true,
    responsive: {
      1000: [4, 24],
      800: [3, 32.5],
      600: [2, 49],
      400: [1, 100],
    },
  });
  responsive();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".own2").ownCarousel({
    itemPerRow: 2,
    itemWidth: 49.3,
    // autoplay: 10000,
    nav: true,
    responsive: {
      1000: [2, 49.3],
      800: [2, 49],
      600: [1, 100],
      400: [1, 100],
    },
  });
  responsive();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".own3").ownCarousel({
    itemPerRow: 4,
    // autoplay: 5000,
    nav: true,
    responsive: {
      1000: [4, 24],
      800: [3, 32.5],
      600: [2, 49],
      400: [1, 100],
    },
  });
  responsive();
});