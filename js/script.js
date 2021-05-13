console.log("Kk");

//Решение на pure js
var el = document.querySelector(".about-us-text");

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $(".navbar").addClass("navbar-scrolled");
  } else {
    $(".navbar").removeClass("navbar-scrolled");
  }
});

$("img").attr ({
   loading: "lazy"
})

/**Настройка slick-slider*/
/$(document).ready(function(){
   $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: ".prev",
      nextArrow: ".next",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
   });
 });
