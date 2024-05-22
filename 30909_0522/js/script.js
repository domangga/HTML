$('.navi>li').mouseover(function(){
    $(this).find('.sub').stop().slideDown()
})
$('.navi>li').mouseout(function(){
    $(this).find('.sub').stop().slideUp()
})

setInterval(function(){
    $('.imgslide').delay(2000)
    $('.imgslide').animate({marginLeft:-1200})
    $('.imgslide').delay(2000)
    $('.imgslide').animate({marginLeft:-2400})
    $('.imgslide').delay(2000)
    $('.imgslide').animate({marginLeft:-3600})
    $('.imgslide').delay(2000)
    $('.imgslide').animate({marginLeft: 0})
    
})