	$('.navi>li').mouseover(function(){
		$('.submenu').stop().slideDown(500);
	}).mouseout(function(){
		$('.submenu').stop().slideUp(500);
	});
	
//이미지 슬라이드 코드 영역




// 공지사항 갤러리 탭클릭 코드 영역	






	
	$(".notice li:first").click(function(){
	  $("#layer").addClass("active");
	});
	$(".btn").click(function(){
	  $("#layer").removeClass("active");
	});    
	
