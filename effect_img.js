// PORTFOLIO
var $item = $(".img");

$item.mouseenter(function(){
  $(this).find(".about_item").show('slide',1000);
})

$item.mouseleave(function(){
  $(this).find(".about_item").hide("slide", 1000);
})


// end
