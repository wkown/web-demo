/* ������������֮�� www.lanrenzhijia.com */
$(document).ready(function(){
		$("#lanrenzhijia").find(".pre").hide();//��ʼ��Ϊ��һ��
		var page=1;//��ʼ����ǰ�İ���Ϊ1
		var $show=$("#lanrenzhijia").find(".lanrenzhijia_box");//�ҵ�ͼƬչʾ����
		var page_count=$show.find("ul").length;
		var $width_box=$show.parents("#wai_box").width();//�ҵ�ͼƬչʾ������Χ��div
		//��ʾtitle����
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
			//�����ж�չʾ�����Ƿ��ڶ���
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
/* ������������֮�� www.lanrenzhijia.com */