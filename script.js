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

