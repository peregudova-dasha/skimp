// PORTFOLIO
var $item = $(".img");

$item.mouseenter(function(){
  $(this).find(".about_item").show('slide',700);
})

$item.mouseleave(function(){
  $(this).find(".about_item").hide("drop", 700);
})


// end
