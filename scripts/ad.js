$(function(){
  var $imgrolls = $("#jnImageroll div a");
  $imgrolls.css('opacity', '0.7');
  var len = $imgrolls.length;
  var index = 0;
  var adTimer = null;
  $imgrolls.mouseover(function(event) {
    index = $imgrolls.index(this);
    showImg(index);
  }).eq(0).mouseover();

  //.DS_Store
  $("#jnImageroll").hover(function() {
    if (adTimer) {
      clearInterval(adTimer);
    }
  }, function() {
    adTimer = setInterval(function(){
      showImg(index);
      index++;
      if (index == len) {
        index = 0;
      }
    }, 2500);
  }).trigger('mouseleave');

  //.DS_Store
  function showImg(index){
    var $rollobj = $("#jnImageroll");
    var $rolllist = $rollobj.find('div a')
    var newhref = $rollobj.eq(index).attr('href');
    $("#JS_imgWrap").attr('href', newhref)
                    .find('img').eq(index).stop(true, true).fadeIn()
                    .siblings('').fadeOut();
    $rolllist.removeClass('chos').css('opacity', '0.7')
              .eq(index).addClass('chos').css('opacity', '1');
  }
})
