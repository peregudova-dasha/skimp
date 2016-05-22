$(document).ready(function(){
  $(".f1").delay(600).fadeIn(1000);
   $(".f2").delay(800).fadeIn(1000);
   $(".f3").delay(1200).fadeIn(1000);
   $(".f4").delay(1400).fadeIn(1000);
   $(".f5").delay(1600).fadeIn(1000);
   $(".f6").delay(1800).fadeIn(1000);
   $(".f7").delay(2000).fadeIn(1000);
   $(".f8").delay(2200).fadeIn(1000);
});

$(".f").mouseenter(function(){
  $(this).animate({opacity: 0.5 },200)
})
$(".f").mouseleave(function(){
  $(this).animate({opacity: 1 },200)
})