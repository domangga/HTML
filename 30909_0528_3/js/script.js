$('.navi>li').mouseover(function(){
    $(this).find('.sub').stop().slideDown()
})
$('.navi>li').mouseout(function(){
    $(this).find('.sub').stop().slideUp()
})
setInterval(function(){
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft: -750});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft: -1500});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft: 0});
    $('.slidelist').delay(2000);
})