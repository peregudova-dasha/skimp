// TABS

$(document).ready(function() {

$('ul.tabs li').css('cursor', 'pointer');

$('ul.tabs li').click(function(){
  var thisClass = this.className.slice(0,2);
  $('div.t1').hide();
  $('div.t2').hide();
  $('div.t3').hide();
  $('div.t4').hide();
  $('div.t5').hide();
  $('div.t6').hide();
  $('div.t7').hide();
  $('div.' + thisClass).show();
  $('ul.tabs li').removeClass('tab-current');
  $(this).addClass('tab-current');
  });


});
//END
