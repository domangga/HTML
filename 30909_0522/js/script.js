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
$('.tabmenu>li>a').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
    return false;
})
$('.notice li:first').click(function(){
    $('#modal').addClass('active')
})
$('.btn').click(function(){
    $('#modal').removeClass('active')
})