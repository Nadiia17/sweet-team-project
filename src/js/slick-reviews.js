$('.reviews-container').slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 250,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        dots: true,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        variableWidth: false,
      },
    },
  ],
});
