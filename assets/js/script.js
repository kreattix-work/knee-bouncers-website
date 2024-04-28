$(".menu-toggler").on("click", function () {
  $("body").toggleClass("menu-open");
});

$(".brand-items").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1,
  speed: 3000,
  dots: false,
  prevArrow: null,
  nextArrow: null,
  cssEase: "linear",
  waitForAnimate: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});
