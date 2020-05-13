$(document).ready(function(){
	$('html').niceScroll();
	$('.header').height($(window).height());
	$('.header .arrow i').click(function(){
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		}, 1500);
	});
	$('.show-more').click(function(){
		$('.my-work .hidden').fadeIn();
	});
	$('.show-less').click(function(){
		$('.my-work .hidden').fadeOut();
	});
	$('.my-work-button').click(function(){
		$('html, body').animate({
			scrollTop: $('.my-work').offset().top
		}, 2000);
	});
	$('.my-hire-button').click(function(){
		$('html, body').animate({
			scrollTop: $('.contact').offset().top
		}, 4000);
	});
	var leftArrow = $('.testim .fa-chevron-left'),
		rightArrow = $('.testim .fa-chevron-right');
	function checkClints(){
		$('.clint:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
		$('.clint:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
	}
	checkClints();
	$('.testim i').click(function(){
		if ($(this).hasClass('fa-chevron-right')) {
			$('.testim .active').fadeOut(100, function(){
				$(this).removeClass('active').next('.clint').addClass('active').fadeIn();
				checkClints();
			});
		} else {
			$('.testim .active').fadeOut(100, function(){
				$(this).removeClass('active').prev('.clint').addClass('active').fadeIn();
				checkClints();
			});
		}
	});
});