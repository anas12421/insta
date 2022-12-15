$(function () {

  "use strick"



  // backtotop js
  $(".backtotop i").on('click', function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1200)
  })


  $(window).on('scroll', function () {
    let scrolling = $(this).scrollTop()

    // backtotop js
    if (scrolling > 20) {
      $(".backtotop i").fadeIn(500)
    } else {
      $(".backtotop i").fadeOut(500)
    }

    // navbar js
    if (scrolling > 50) {
      $(".menu").addClass("menu_ex")
    } else {
      $(".menu").removeClass("menu_ex")
    }
  })



  // counter up js
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

  // all slider js


  $('.all_slider').slick({
    infinite: true,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 1600,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  
  // all venobox js

  new VenoBox({
    selector: '.my-video-links',
});

























})