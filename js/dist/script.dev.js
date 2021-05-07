"use strict";

console.log("Kk"); //Решение на jQuery
//$(".about-us-text").click(function () {
//  $(this).toggleClass("about-us-text-active");
//});
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
$("img").attr({
  loading: "lazy"
});