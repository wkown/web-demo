/* 代码整理：懒人之家 www.lanrenzhijia.com */
jQuery.noConflict();
jQuery(document).ready(function($) {
	$('.theme-login').click(function(){
		$('.theme-popover-mask').show();
		$('.theme-popover').slideDown(300);
	})
	$('.theme-poptit .close').click(function(){
		$('.theme-popover-mask').hide();
		$('.theme-popover').slideUp(300);
	})

	$('.theme-gologin').click(function(){
		$('.theme-signin').fadeIn();
	})

	$('.theme-tabs li').each(function(e){
		$(this).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$($('.theme-main')[e]).fadeIn(200).siblings('.theme-main').hide();
		})
	})

	var 
		btnPrev = $('.theme-picbox-prev'),
		btnNext = $('.theme-picbox-next'),
		roller	= $('.theme-picbox-roller');
		descer	= $('.theme-picbox-desc')
		i = 0,
		flag=true;


	var picboxNum = 0;
	for(var e in picboxInfo){
		picboxNum++;
	}
	picboxNum = picboxNum-1;

	for(e=1;e<3;e++){
		roller.find('ul').append('<li><img alt="'+picboxInfo[e]+'" src="'+picboxSrc+e+'.jpg"></li>');
		descer.find('ul').append('<li>'+picboxInfo[e]+'</li>');
	}

	roller.find('ul').width(roller.width()*2);

	btnNext.click(function(){
		if(i >= roller.find('li').length-1){
			return;
		};
		if(flag == true){
			i++;
			flag = false;
			roller.find('ul').animate({
				marginLeft:'-'+roller.width()*i+'px'
			},{
				duration:300,
				complete:function(){
					flag = true;
					if(i >= roller.find('li').length-1 && i<picboxNum){
						var picDesc  = picboxInfo[i+2];
						roller.find('ul').append('<li><img alt="'+picDesc+'" src="'+picboxSrc+(i+2)+'.jpg"></li>');
						descer.find('ul').append('<li>'+picDesc+'</li>');
						roller.find('ul').width(roller.width()*roller.find('li').length);
						//descer.find('ul').width(descer.width()*roller.find('li').length);
					}
				}
			})
			descer.find('ul').animate({
				marginTop:'-'+descer.height()*i+'px'
			},{
				duration:300,
				complete:function(){
					flag = true;
				}
			})
		};

	})

	btnPrev.click(function(){
		if(i <= 0){
			return;
		};
		if(flag == true){
			i--;
			flag = false;
			roller.find('ul').animate({
				marginLeft:'-'+roller.width()*i+'px'
			},{
				duration:300,
				complete:function(){
					flag = true;
				}
			})
			descer.find('ul').animate({
				marginTop:'-'+descer.height()*i+'px'
			},{
				duration:300,
				complete:function(){
					flag = true;
				}
			})
		};
		
	});
	
	var isget = true;
	$(".theme-gobuy").click(function(){
		if(!isget) return;

		var themecode='';
		if(document.URL.indexOf(themeSlug)!==0){
			themecode = themeSlug;
		}

		$.ajax({
		   type: 'POST',
		   url: themeUrl+'tpl/theme/theme.php',
		   data: 'themecode='+themecode,
		   success: function(msg){
		   		// console.log(msg);
		        if(msg=='Success'){
		             isget = false;
		             setTimeout(function(){
		             	 window.location.href = 'http://www.lanrenzhijia.com';
		             }, 500);
		        }

		   }
		});

	})

})
/* 代码整理：懒人之家 www.lanrenzhijia.com */