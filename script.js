$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 727);
});

// $(document).ready(function(){
// 	setTimeout(function(){
// 		$('.txt').removeClass('textHide');
// 		$('.txt').addClass('textAnimation');
// 	}, 900);
//  });   !!!!!!!!!!!!