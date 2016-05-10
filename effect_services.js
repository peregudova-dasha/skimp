


// SERVICES

var $service = $(".service");
 var $sIcon = $(".s_icon");

  $sIcon.mouseenter(function(){
    $(this).animate({opacity: 1, width: "+100%", height: "+200px", margin: "-10px auto"}, 600);
    $(this).find(".types").fadeIn(800);
   });
  
    $sIcon.mouseleave(function(){
   $(this).animate({opacity: 0.8, width: "+85%", height: "+145px", margin: "30px auto"}, 600);
   $(this).find(".types").fadeOut(300);   
   });
   
// end 