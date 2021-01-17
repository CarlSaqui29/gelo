//all animations
$(".section-2 .one").attr("uk-scrollspy", "cls: uk-animation-slide-left; target: img; delay: 500; repeat: false");
$(".section-3 .row").attr("uk-scrollspy", "cls: uk-animation-fade; target: .img-fluid; delay: 100; repeat: false");



//sidebar menu
var ov_side = document.getElementById("overlay-side");

function close_nav() {
  $('.hamburger').toggleClass("click");
  $('.sidebar').toggleClass("show");
  document.getElementById("overlay-side").style.display = "none";
}
$('.hamburger').click(function(){
  $(this).toggleClass("click");
  $('.sidebar').toggleClass("show");
  if (ov_side.style.display == "block") {
    ov_side.style.display = "none";
  }else{
    ov_side.style.display = "block";
  }
});

$('.sidebar ul li, .nav li').click(function(){
  $(this).addClass("active").siblings().removeClass("active");
});


