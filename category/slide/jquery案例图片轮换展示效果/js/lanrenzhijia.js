/* 代码整理：懒人之家 www.lanrenzhijia.com */
$(document).ready(function() {
	$("#lanrenzhijia .images li").mouseenter(function() {
		if (!$("#lanrenzhijia").is(".waiting")) {
			$el_left = $("#lanrenzhijia .work .images li.left");
			$el_center = $("#lanrenzhijia .work .images li.center");
			$el_right = $("#lanrenzhijia .work .images li.right");
			if ($(this).hasClass("left")) {
				$($el_left).stop().animate({
					height: '284',
					width: '265'
				}, 300).css("z-index","10");
				$($el_center).stop().animate({
					height: '256',
					width: '240',
					left: '120'
				}, 300).css("z-index","5");
				$($el_right).stop().animate({
					height: '228',
					width: '215'
				}, 300).css("z-index","2");
			} 

			if ($(this).hasClass("center")) {
				$($el_center).stop().animate({
					height: '284',
					width: '265',
					left: '90'
				}, 300).css("z-index","10");
				$($el_left).stop().animate({
					height: '256',
					width: '240'
				}, 300).css("z-index","5");
				$($el_right).stop().animate({
					height: '256',
					width: '240'
				}, 300).css("z-index","5");
			}
			if ($(this).hasClass("right")) {
				$($el_right).stop().animate({
					height: '284',
					width: '265'
				}, 300).css("z-index","10");
				$($el_center).stop().animate({
					height: '256',
					width: '240',
					left: '90'
				}, 300).css("z-index","5");
				$($el_left).stop().animate({
					height: '228',
					width: '215'
				}, 300).css("z-index","2");
			}
		}
	});
	$.fn.cycle.transitions.factoria_portfolio = function($cont, $slides, opts){
		opts.fxFn = function(curr, next, opts){
			$("#lanrenzhijia").addClass("waiting");
			$(curr).find('.images li').each(function(idx, el){
				$(next).find('.images li').show();
				setTimeout(function(){
					$(el).slideUp(450, function() {
						if (idx == 1) {
							$(next).find('.images li').css({"height":"","width":"","left":"","z-index":"","bottom":"-285px"});
							$(curr).fadeOut(opts.speed);
							$(next).fadeIn(opts.speed);
							$(next).find('.images li').each(function(idx, el){
								setTimeout(function(){
									$(el).animate({
										opacity:1,
										bottom:'0px'
									}, 450, function() {
										if (idx == 1) {
											$("#lanrenzhijia").removeClass("waiting");
										}
									});
								}, (200*(2-idx)));
							});
						}
					});
				}, (100*(2-idx)));
			});
			opts.busy=0;
		}
	};


	
	$('#lanrenzhijia_container').cycle({ 
		"fx":"factoria_portfolio",
		timeout: 5000, 
		startingSlide:0,
		speed: 800,
		cleartypeNoBg: true,
		pager: '#lanrenzhijia ul.list',
		pause: true,
		pagerAnchorBuilder: function(idx, slide) { 
			return '#lanrenzhijia ul.list li:eq(' + idx + ')';
		},
		updateActivePagerLink: function(pager, currSlideIndex) {
			$(pager).find('li').removeClass('active').filter('li:eq('+currSlideIndex+')').addClass('active');
		},
		pauseOnPagerHover: true
	});

	$('#callout_process ul').cycle({ 
		"fx":"fade",		
		timeout: 3000, 
		startingSlide:0,
		cleartypeNoBg:true,
		speed: 500,
		slideExpr: 'span',
		pager: '#callout_process ul',
		pagerEvent: 'mouseover',
		pause: true,
		pagerAnchorBuilder: function(idx, slide) {
			return $(slide).parent("li");
		},
		updateActivePagerLink: function(pager, currSlideIndex) {
			$(pager).find('li').removeClass('active').filter('li:eq('+currSlideIndex+')').addClass('active');
		},
		pauseOnPagerHover: true
	});
	
	$('#callout_hotel ul.list').cycle({ 
		"fx":"fade",
		cleartypeNoBg:true,
		timeout: 3000,
		startingSlide:0,
		speed: 500,
		slideExpr: 'span',
		pager: '#callout_hotel ul.list',
		pagerEvent: 'mouseover',
		pause: true,
		pagerAnchorBuilder: function(idx, slide) {
			return $(slide).parent("li");
		},
		updateActivePagerLink: function(pager, currSlideIndex) {
			$(pager).find('li').removeClass('active').filter('li:eq('+currSlideIndex+')').addClass('active');
		},
		pauseOnPagerHover: true
	});	
});

/* 代码整理：懒人之家 www.lanrenzhijia.com */