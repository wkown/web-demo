/* 代码整理：懒人之家 www.lanrenzhijia.com */
$(document).ready(function(){
		$("#lanrenzhijia").find(".pre").hide();//初始化为第一版
		var page=1;//初始化当前的版面为1
		var $show=$("#lanrenzhijia").find(".lanrenzhijia_box");//找到图片展示区域
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//找到图片展示区域外围的div
		//显示title文字
		$show.find("li").hover(function(){
			$(this).find(".title").show();								
		},function(){
			$(this).find(".title").hide();
		})
		function nav(){
			if(page==1){
				$("#lanrenzhijia").find(".pre").hide().siblings(".next").show();
			}else if(page==page_count){
				$("#lanrenzhijia").find(".next").hide().siblings(".pre").show();
			}else{
				$("#lanrenzhijia").find(".pre").show().siblings(".next").show();
			}
		}
		$("#lanrenzhijia").find(".next").click(function(){
			//首先判断展示区域是否处于动画
			if(!$show.is(":animated")){
				$show.animate({left:'-='+$width_box},"normal");
				page++;
				nav();
				$number=page-1;
				$("#lanrenzhijia").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
				return false;
			}
		})
		$("#lanrenzhijia").find(".pre").click(function(){
		if(!$show.is(":animated")){
			$show.animate({left:'+='+$width_box},"normal");
			page--;
			nav();
			$number=page-1;
			$("#lanrenzhijia").find(".nav a:eq("+$number+")").addClass("now").siblings("a").removeClass("now");
			}
			return false;
		})
		$("#lanrenzhijia").find(".nav a").click(function(){
				$index=$(this).index();
				page=$index+1;
				nav();
				$show.animate({left:-($width_box*$index)},"normal");	
				$(this).addClass("now").siblings("a").removeClass("now");
				return false;
		})
						   
});
/* 代码整理：懒人之家 www.lanrenzhijia.com */