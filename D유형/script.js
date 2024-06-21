$('.navi>li').mouseover(function(){
    $(this).find('.sub').stop().slideDown()
})
$('.navi>li').mouseout(function(){
    $(this).find('.sub').stop().slideUp()
})
setInterval(function(){
    $('.imgslide').delay(2000)
    $('.imgslide').animate({marginLeft: -200 + "vh"})
    $('.imgslide').delay(2000)
    $('.imgslide').animate({marginLeft: -400 + "vh"})
    $('.imgslide').delay(2000)
    $('.imgslide').animate({marginLeft: 0 + "vh"})
})