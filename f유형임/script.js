$('.navi>li').mouseover(function(){
    $('.sub').stop().slideDown()
    $('.bgm').stop().slideDown()
})
$('.navi>li').mouseout(function(){
    $('.sub').stop().slideUp()
    $('.bgm').stop().slideUp()
})
setInterval(function(){
    $('.imgslide').delay(2000)
    $('.imgslide').animate({'marginLeft':-2000})
    $('.imgslide').delay(2000)
    $('.imgslide').animate({'marginLeft':-4000})
    $('.imgslide').delay(2000)
    $('.imgslide').animate({'marginLeft':0})

})