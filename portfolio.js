/*ページ内リンク*/
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    $("html, body").animate(
        {scrollTop: target.offset().top}, speed, "swing");
    return false;
  });
});
