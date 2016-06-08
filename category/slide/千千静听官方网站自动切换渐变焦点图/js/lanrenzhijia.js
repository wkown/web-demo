/* 代码整理：懒人之家 www.lanrenzhijia.com */
var BASE_FLAG = false; //下载限制开关 true 打开， false 关闭

//tips
var localValue = 0, tnValue = "";
/**
 * localType 提示框位置： 0相对定位， 2页面居中
 * tn 渠道号
 */
function init_tip(localType, tn){
	if(localType && localType > 0) localValue = localType;
	if(tn && tn != "") tnValue = tn;
}

//榜单
function init_list(listId, list, page) {
	if(list == undefined) list = 0;
	if(page == undefined) page = 0;
	var url = "/chtml/bangdan/songList-"+list+"-"+page+".html";
	$.getJSON(url, function(data) {
		var html = '<tr class="tableRule">' + 
        			'<th></th>' +
       				'<td class="tableRule_short"></td>' +
        			'<td></td>' +
        			"<td class='fct'></td>" +
      				'</tr>';	
		$.each(data, function(i, data) {
			html += draw_list(data);				  
		});
		add_html(listId,html);
		//翻页
		$("#"+listId+" .pageDiv a").click(function(){
			var index = $("#"+listId+" .pageDiv a").index(this);
			init_list(listId, list, index);
		});
		//插件
		bind_music_ctrl(listId);
	});
}

function draw_list(data){
	var html = '<tr>' +
        	   '<th><input type="checkbox" class="sCheckBox" /></th>' +
        	   '<td colspan="2"><a href="javascript:;" id="'+data.song_id+'"  class="sName play" title="'+data.song_title+'">'+data.song_title+'</a><b>-</b><span class="uName">'+draw_uname(data)+'</span></td>' +
        	   "<td class='fct'><a href='javascript:;' class='play'></a><a href='javascript:;' class='add'></a><a href='javascript:;' class='download'></a></td>" +
      		   '</tr>';
	 return html;
}
/* 代码整理：懒人之家 www.lanrenzhijia.com */


function draw_topic_list(i,data1,data2){
	var html = '';
	if(i == 8){
		html += '<tr class="noBorder">';
	}else{
		html += '<tr>';
	}
	html += '<th><input type="checkbox" class="sCheckBox" /></th>' +
			'<td colspan="2"><a href="javascript:;" id="'+data1.song_id+'" class="sName play" title="'+data1.song_title+'">'+data1.song_title+'</a><b>-</b><span class="uName">'+draw_uname(data1)+'</span></td>' +
	        "<td class='fct'><a href='javascript:;' class='play'></a><a href='javascript:;' class='add'></a><a href='javascript:;' class='download'></a></td>" +
		    '<th class="apart"></th>' +
			'<th><input type="checkbox" class="sCheckBox" /></th>' +
			'<td colspan="2"><a href="javascript:;" id="'+data2.song_id+'" class="sName play data2" title="'+data2.song_title+'">'+data2.song_title+'</a><b>-</b><span class="uName">'+draw_uname(data2)+'</span></td>' +
			"<td class='fct'><a href='javascript:;' class='play data2'></a><a href='javascript:;' class='add data2'></a><a href='javascript:;' class='download data2'></a></td>" +
			'</tr>';
	return html;
}

function ctrlTopic(obj,type,code){
	$.ajax({   
   		url:"/app/topic/topicSong.php",   
    	type:"get",   
    	data: {"code":code},   
    	dataType:"json", 
		success:function(data){		
				music_crtl(obj, type, data);
			},
			error:function(){   
				alert("ajax error!");
			}  
  	 });
	
}



function bind_music_ctrl(listId){
	$("#"+listId+" .play, #"+listId+" .add,#"+listId+" .download").click(function(){
		var $this = $(this);
		var thisType = $this.attr("class");
		var addToType = thisType.indexOf("play") > -1 ? 1 : thisType.indexOf("add") > -1 ? 2 : thisType.indexOf("download") > -1 ? 3 : 0;

		var data = getData($this);
		music_crtl(this, addToType, data);
	});
}
/* 代码整理：懒人之家 www.lanrenzhijia.com */
//插件
function music_crtl(obj,addToType,data){
	var callBack = {success: _initCallBack, params : $(obj)};
	if( typeof baidu_music_ctrl.noInstalled === 'undefined' || baidu_music_ctrl.noInstalled === true ){ 			     
		if(!baidu_music_ctrl.init(callBack)) return false;
	}
	baidu_music_ctrl.createTask(data,addToType,callBack);
}

function _initCallBack(ret,addCount,obj){
	$(obj).ttTips({"msgType":parseInt(ret), "localType": localValue, "tn":tnValue});
	return;
}

function getData(obj){
	var data = [];
	var $tr = obj.parents("tr").eq(0);
	var thisType = $tr.attr("class");
	if(thisType && thisType.indexOf("all") > -1){
		var $table = obj.parents("table").eq(0);
		$table.find("tr").each(function(){
			$checkBox = $(this).find(".sCheckBox");
			for(var i=0; i<$checkBox.length; i++){
				if($checkBox.eq(i).attr("checked") == "checked" ||$checkBox.eq(i).attr("checked") == true){
					var n = $checkBox.index($checkBox.eq(i));
					var data_0 = getDataByTr($(this),n+1);
					data = data.concat(data_0);	
				}
			}			
		});
	}else{
		var n = 1;
		if($(obj).attr("class").indexOf("data2") > -1){
			n = 2;
		}
		var data_0 = getDataByTr($tr,n);
		data = data.concat(data_0[0]);
	}
	return data;	
}

function getDataByTr(tr,n){
	var data = {};
	var reData = [];
	var titleHTML = tr.find(".sName");
	var artistHTML = tr.find(".uName");
	if(n && n>0){ 
		titleHTML = titleHTML.eq(n-1);
		artistHTML = artistHTML.eq(n-1);
	}
	for(var i=0; i<titleHTML.length; i++){
		var songid = titleHTML.eq(i).attr("id");
		var title = titleHTML.eq(i).html();
		var artist = artistHTML.eq(i).html();
		if(title != null && artist != null){
			title = title.replace(/<([^>]*)>/g, "" );
			artist = artist.replace(/<([^>]*)>/g, "" );
			data = {"songid":songid,"title":title, "artist":artist};
			reData.push(data);
		}
	}
	return reData;
}

function tableCheckBox(id){
	$("#"+id+" input").attr("checked",true);
	$("#"+id+" .selectAll").click(function(){ if($(this).attr("checked")){ $("#"+id+" .indexTable .sCheckBox").attr("checked",true); }else{ $("#"+id+" .indexTable .sCheckBox").attr("checked",false);} });
	$("#"+id+" .indexTable .sCheckBox").click(function(){ var allFlag = true; $("#"+id+" .indexTable .sCheckBox").each(function(){ if(!$(this).attr("checked")) allFlag = false; });$("#"+id+" .selectAll").attr("checked",allFlag); });
	$("#"+id+" .pageDiv a").hover(function(){ if(!$(this).hasClass("visited"))$(this).addClass("hover"); },function(){ $(this).removeClass("hover"); })
	.click(function(){$("#"+id+" .pageDiv a").removeClass("hover visited"); $(this).addClass("visited"); 	});
}

function paramKey(str){
	str = str.replace(/'/g, "%27");
	return str;
}
/*----- other -----*/
var intervalId = true;
$(function(){
   $.ClickMonkey({ v_value : "ttplayer-web-index-4" });
   intervalId = setInterval(function(){ switchAnimate(0) },6000);
  
});

function switchAnimate(i){
	if(i == 0){
		clearInterval(intervalId);
		intervalId = setInterval(function(){ switchAnimate(1) },8000);
	}
	var mark = $("#ttSwitch").attr("mark");
	if(mark == 1){
		$("#ttSwitch_content .content_1").animate({opacity: '0'},1600);
		$("#ttSwitch_content .content_2").animate({opacity: '1'},2000);
	}else{
		$("#ttSwitch_content .content_2").animate({opacity: '0'},1600);
		$("#ttSwitch_content .content_1").animate({opacity: '1'},2000);
	}
	$("#ttSwitch #ttSwitch_text").animate({left: '-40px', opacity: '0'}, 1000, function(){
		if(mark == 1){
			$(this).removeClass("text_1").addClass("text_2");
		}else{
			$(this).removeClass("text_2").addClass("text_1");
		}
		$(this).css("left","110px").animate({left:'69px',opacity:'1'},1000);
	});
	mark == 1 ? $("#ttSwitch").attr("mark","2") : $("#ttSwitch").attr("mark","1");
}

if(BASE_FLAG){
	var css = "<style>"
				+ ".indexTable td.fct a.download , .indexBanner a.sendPhone, .topic_all a.downloadBtn { display:none; }"
				+ ".indexTable td.fct a.play { margin-left:22px; }"
				+ ".indexTable tr.all .allFct a.download{ display:none; }"
				+ ".indexTable tr.all .allFct a.add { margin-right:7px; }"
				+ ".topic_table tr.all .allFct a.add{ margin-right:106px; }"
				+ "</style>";
	document.write(css);
}


/* 代码整理：懒人之家 www.lanrenzhijia.com */