var $j = jQuery.noConflict();

$j(document).ready(function() {

$j('ul.tabs li').css('cursor', 'pointer');

$j('ul.tabs li').click(function(){
  var thisClass = this.className.slice(0,2);
  $j('div.t1').hide();
  $j('div.t2').hide();
  $j('div.t3').hide();
  $j('div.t4').hide();
  $j('div.t5').hide();
  $j('div.t6').hide();
  $j('div.t7').hide();
  $j('div.' + thisClass).show();
  $j('ul.tabs li').removeClass('tab-current');
  $j(this).addClass('tab-current');
  });


});

