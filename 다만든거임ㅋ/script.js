$('.navi>li').mouseover(function(){
    $(this).find('.sub').stop().slideDown()
})
$('.navi>li').mouseout(function(){
    $(this).find('.sub').stop().slideUp()
})
setInterval(function(){
    $('.imgslide').delay(2000)
    $('.imgslide').animate({'marginLeft':-700})
    $('.imgslide').delay(2000)
    $('.imgslide').animate({'marginLeft':-1400})
    $('.imgslide').delay(2000)
    $('.imgslide').animate({'marginLeft':0})
    $('.imgslide').delay(0)
    

    

    

})