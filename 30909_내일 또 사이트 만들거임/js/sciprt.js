$('.navi>li').mouseover(function(){
    $(this).find('.sub').stop().slideDown()
})
$('.navi>li').mouseout(function(){
    $(this).find('.sub').stop().slideUp()
})

$('.slidelist a:gt(0)').hide();
setInterval(function(){
    $('.slidelist a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.slidelist')
}, 3000)
// setInterval(function(){
//     $('.slidelist').delay(2000);
//     $('.slidelist').animate({marginLeft:-1200});
//     $('.slidelist').delay(2000);
//     $('.slidelist').animate({marginLeft:-2400});
//     $('.slidelist').delay(2000);
//     $('.slidelist').animate({marginLeft:0});
//     $('.slidelist').delay(2000);
    
// })