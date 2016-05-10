

// SLIDER
var $nav = $(".navbar-default");

  $(window).scroll(function(){
   if ( $(this).scrollTop() > 650){
      $nav.addClass("navbar-fixed-top").css("opacity","1");
        } 
       else if($(this).scrollTop() <= 650 ){      $nav.removeClass("navbar-fixed-top").css("opacity","1");
   }
   });



//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){ 
  var carusel = $(this).parents('.carousel');
  right_carusel(carusel);
  return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
  var carusel = $(this).parents('.carousel');
  left_carusel(carusel);
  return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
    $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
  auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
  setInterval(function(){
    if (!$(carusel).is('.hover'))
      right_carusel(carusel);
  }, 3000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})


  
 
   
// end 


// SERVICES

var $service = $(".service");
 var $sIcon = $(".s_icon");

  $sIcon.mouseenter(function(){
    $(this).animate({opacity: 1, width: "+100%", height: "+250px", margin: "-10px auto"}, 600);
    $(this).find(".types").fadeIn(800);
   });
  
    $sIcon.mouseleave(function(){
   $(this).animate({opacity: 0.8, width: "+85%", height: "+175px", margin: "30px auto"}, 600);
   $(this).find(".types").fadeOut(300);   
   });
   
// end 

// FADE IN SERVICES

$(window).scroll( function(){

   var $service = $(".service"); 
  
    $service.each( function(i){
     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
       
        if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},800);

        }

    }); 

});
// end



