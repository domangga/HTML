$('.navi>li').mouseover(function(){
    $(this).find('.sub').stop().slideDown()
})
$('.navi>li').mouseout(function(){
    $(this).find('.sub').stop().slideUp()
})
setInterval(function(){
    $('.imgslide').delay(2000)
    $('.imgslide').animate({marginLeft: -190 + 'vh'})
    $('.imgslide').delay(2000)
    $('.imgslide').animate({marginLeft: -380 + 'vh'})
    $('.imgslide').delay(2000)
    $('.imgslide').animate({marginLeft: 0 + 'vh'})

})