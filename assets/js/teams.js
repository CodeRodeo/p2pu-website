
(function($) {

  // Initialize slick on organizer slides
  $('.slide-container').each(function() {

    var slider = $(this);

    slider.slick({
      arrows: true,
      appendArrows: slider.parent().find(".arrows"),
      autoplay: false,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            pauseOnHover: false,
            swipe: true,
          }
        },
      ]
    })
  })

  // Initialize SmoothScroll

   var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 60
  });

})(jQuery)