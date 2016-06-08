/* 代码整理：懒人之家 www.lanrenzhijia.com */
$(function(){
$("#msjtop_loginbtn").bind("click",function(){
	loginreg(1);
});

$("#msjtop_registerbtn").bind("click",function(){
	loginreg(0);
});

$("#ztlist_style1_index li").hover(function(){
	$(this).siblings().removeClass("current");
	$(this).addClass("current");
},function(){});

$("#index_forum_right_list li").hover(function(){
	$(this).find("span").stop().slideDown();
},function(){
	$(this).find("span").stop().slideUp();
});



$(".index_sc_dd").hover(function(){
	$(this).siblings().removeClass("index_sc_dd_current");
	$(this).addClass("index_sc_dd_current");
},function(){});



$("#sccon_right").mouseenter(function(){
	$(this).find(".scc_masker").fadeOut();
	$(this).prev().find(".scc_masker").fadeIn();
	$(this).stop().animate({width:"718px"},600,function(){});

});


$("#sccon_left").mouseenter(function(){
	$(this).next().stop().animate({width:"232px"},600,function(){});
	$(this).next().find(".scc_masker").fadeIn();
	$(this).find(".scc_masker").fadeOut();
});




$(".index_healthitem li").hover(function(){

	$(this).siblings().removeClass("current");
	$(this).addClass("current");

},function(){


});





$("#index_zzw_main").mouseenter(function(){
	$("#zzw_prev_btn").trigger("mouseenter");
	$("#zzw_next_btn").trigger("mouseenter");
	$("#timedot_c").show();
});
$("#index_zzw_main").mouseleave(function(){
	$("#zzw_prev_btn").trigger("mouseleave");
	$("#zzw_next_btn").trigger("mouseleave");
	$("#timedot_c").hide();
});


$("#maskleft").mouseenter(function(){
	$("#zzw_prev_btn").trigger("mouseenter");
	$("#zzw_next_btn").trigger("mouseenter");
	$("#timedot_c").show();
});
$("#maskleft").mouseleave(function(){
	$("#zzw_prev_btn").trigger("mouseleave");
	$("#zzw_next_btn").trigger("mouseleave");
	$("#timedot_c").hide();
});

$("#maskright").mouseenter(function(){
	$("#zzw_prev_btn").trigger("mouseenter");
	$("#zzw_next_btn").trigger("mouseenter");
	$("#timedot_c").show();
});
$("#maskright").mouseleave(function(){
	$("#zzw_prev_btn").trigger("mouseleave");
	$("#zzw_next_btn").trigger("mouseleave");
	$("#timedot_c").hide();
});
$("#index_timelinebox").mouseleave(function(){
	$("#zzw_prev_btn").trigger("mouseleave");
	$("#zzw_next_btn").trigger("mouseleave");
	$("#timedot_c").hide();
});


bindtimex();
$("#index_zzw .prev_btn").click(function(){

	$(".zzw_item_3 h3").hide();

	$("#index_zzw_main").animate({left:'-990px'},"600",function(){

		
		$("#index_zzw_main .zzw_item").last().prependTo($("#index_zzw_main"));
		


		


		$.each($("#index_zzw_main .zzw_item"),function(){
			var _this = $(this);
			var po = parseInt($(this).attr("po"));
			if(po == 5){po = 0}

			$(this).removeClass().addClass("zzw_item").addClass("zzw_item_"+String(po+1)).attr("po",String(po+1));

			$("#zzw_prev_btn").trigger("mouseover");
			

		});
		var i = $("#index_timelinebox span.timex_current");
		if(i.prev().length >0 ){
			i.removeClass("timex_current").prev().addClass("timex_current");
		}else{
			i.removeClass("timex_current");
			$("#index_timelinebox span.timex").last().addClass("timex_current");
		}

		bindtimex();
		$("#index_zzw_main").mouseenter();
		$(".zzw_item h3").hide();
		$(".zzw_item_3 h3").fadeIn();
		$("#index_zzw_main").css("left","-1980px");
		

	});

});

$("#index_zzw .next_btn").click(function(){

	$(".zzw_item_3 h3").hide();

	$("#index_zzw_main").animate({left:'-2970px'},"600",function(){

		
		$("#index_zzw_main .zzw_item").first().appendTo($("#index_zzw_main"));
		


		


		$.each($("#index_zzw_main .zzw_item"),function(){
			var _this = $(this);
			var po = parseInt($(this).attr("po"));
			if(po == 1){po = 6}

			$(this).removeClass().addClass("zzw_item").addClass("zzw_item_"+String(po-1)).attr("po",String(po-1));
			$("#zzw_next_btn").trigger("mouseover");

		});
		var i = $("#index_timelinebox span.timex_current");
		if(i.next().length >0 ){
			i.removeClass("timex_current").next().addClass("timex_current");
		}else{
			i.removeClass("timex_current");
			$("#index_timelinebox span.timex").first().addClass("timex_current");
		}

		bindtimex();
		$("#index_zzw_main").mouseenter();
		$(".zzw_item h3").hide();
		$(".zzw_item_3 h3").fadeIn();
		$("#index_zzw_main").css("left","-1980px");
		

	});

});






$("#zzw_prev_btn").hover(function(){

	var now = parseInt($(".zzw_item_3").attr("c"));

	if(now == 1){now = 6}

	$(this).css("background-position","0px "+(6-(now-1)*74)+"px");


},function(){

	$(this).css("background-position","0px 6px");
});


$("#zzw_next_btn").hover(function(){

	var now = parseInt($(".zzw_item_3").attr("c"));

	if(now == 5){now = 0}

	$(this).css("background-position","-174px "+(6-(now+1)*74)+"px");


},function(){

	$(this).css("background-position","-174px 6px");
});



});	




function bindtimex(){
	$("#index_timelinebox span.timex").unbind();
	$("#index_timelinebox span.timex_current").prev().bind("mouseenter",function(){
		
		$("#zzw_prev_btn").click();
	});
	$("#index_timelinebox span.timex_current").next().bind("mouseenter",function(){
		
		$("#zzw_next_btn").click();
	});
	// $("#index_timelinebox span.timex_current").prev().bind("click",function(){
		
	// 	$("#zzw_prev_btn").click();
	// });
	// $("#index_timelinebox span.timex_current").next().bind("click",function(){
		
	// 	$("#zzw_next_btn").click();
	// });
}



/* 代码整理：懒人之家 www.lanrenzhijia.com */