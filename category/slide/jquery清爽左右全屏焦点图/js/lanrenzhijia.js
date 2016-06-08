/* 代码整理：懒人之家 www.lanrenzhijia.com */
function initCycle() {
	$('.lanrenzhijia2-item').css('display', 'block');
	
	var bFirstSlide = true;
	$('.lanrenzhijia2-items').cycle({ 
	    speed: 900,
		requeueTimeout: 500,
		fx: 'uncover',
		//easing: 'easeInQuint',
		easing: 'easeInExpo',
		timeout: 5000,
		prev: 'a.prev',
		next: 'a.next',
		width: '100%',
		requeueOnImageNotLoaded: true,
		fit: true,
		before: function(oCurrent, oNext, oOptions, bForward) {
			if(bFirstSlide == false) {
				if(bForward == true || bForward == 1) {
					$(oNext).css({
						'left': $(window).width()+'px'
					});
				} else {
					$(oNext).css({
						'left': '-'+$(window).width()+'px'
					});
				}
				
			} 
			bFirstSlide = false;
		}
	});	
	
	$(document).bind('keypress', function(e) {
		if(e.keyCode == 37) {
			$('.lanrenzhijia2-items').cycle('prev');
		} else if (e.keyCode == 39) {
			$('.lanrenzhijia2-items').cycle('next');
		}
    });
	
	$('#images-container').cycle({ 
	    speed: 700,
		fx: 'uncover',
		easing: 'easeInQuint',
		timeout: 0,
		prev: 'a.prev',
		next: 'a.next',
		requeueOnImageNotLoaded: true
	});	
	
}

function hideCycleNav() {
	var nCycleItems = $('#images-container .image').size();
	
	if(nCycleItems <= 1) {
		$('#slider-nav').hide();
	}
}

function checkPageHeight(p_sId) {
	
	// slider: min-height: 400px; bij viewheight van 500px;
	var nMinHeight = 400;
	var nMinViewHeight = 500;
	var nViewHeight = $(window).height();
	var nMaxSliderHeight = 600;
	var nNewSliderHeight;
	
	if(nViewHeight > nMinViewHeight) {
		nNewSliderHeight = (nViewHeight - nMinViewHeight) + nMinHeight;
	}
	
	if(nNewSliderHeight >= nMaxSliderHeight) {
		nNewSliderHeight = nMaxSliderHeight;
	}
	
	var oObject;
	if(p_sId != undefined && p_sId != '') {
		if(p_sId == 'home') {
			oObject = '.lanrenzhijia2-items, .lanrenzhijia2-item, .lanrenzhijia2-image';
		} else {
			oObject = 'section#'+p_sId;
		}
	} 
	
	// effect uitvoeren
	$(oObject).stop().animate({
		height: nNewSliderHeight
	}, 500, 'easeOutBounce');
}

/* 代码整理：懒人之家 www.lanrenzhijia.com */