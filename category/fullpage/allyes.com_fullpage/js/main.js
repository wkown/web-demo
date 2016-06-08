

var _height;
$(document).ready(function() {
  
});







$(function() {
    var sUserAgent = window.navigator.userAgent;
    var isIE11 = (sUserAgent.toLowerCase().indexOf("trident") > -1 && sUserAgent.indexOf("rv") > -1);
    if ($.browser.msie && document.documentMode < 10 && !isIE11) {
        $('body').addClass('ltie10');
    }



    /*		var isIE10 = /MSIE\s+10.0/i.test(navigator.userAgent)&& (function() {"use strict";return this === undefined;}());
     if(isIE10){
     trim_Version = "IE10";
     }
     else if(navigator.appName == "Microsoft Internet Explorer" && b_version.match(/9./i)=="9.")
     { 
     trim_Version = "IE9";
     }
     else if(navigator.appName == "Microsoft Internet Explorer" && b_version.match(/8./i)=="8.")
     { 
     trim_Version = "IE8";
     }*/


    $('#myContainer').fullpage({
        slidesColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu: '#nav',
        //afterLoad: function(anchorLink, index){
        onLeave: function(anchorLink, index) {
            if (index == 3) {
                _height = $(window).height();
                if (_height < 800) {
                    $(".img01").css("bottom", "12%");
                    $(".img02").css("bottom", "12%");
                    $(".img03").css("bottom", "12%");
                    $(".img04").css("bottom", "12%");
                }
            }
            if (index != 5 || index != 4) {
                $("#active04").css("color", "");
            }
        },
        afterLoad: function(anchorLink, index) {
            if (index != 3) {
                $(".img01").attr("style", "");
                $(".img02").attr("style", "");
                $(".img03").attr("style", "");
                $(".img04").attr("style", "");
            }
            if (index == 5 || index == 4) {
                $("#active04").css("color", " #e60012");
            }
        }


    });
});







$(document).ready(function() {
    //导航切换						   	
    $(".allyescont06_nav_box li a").click(function() {
        $(".allyescont06_nav_box li a").removeClass("act");
        $(this).addClass("act");
    })

    $(".allyescont06_nav_box li:first").addClass("tabs-selected");
    $(".allyescont06_nav_box li").click(function() {

        //$("#allyescont03_cont_box .allyescont03_cont").filter(":visible").slideUp("fast").parent().children().slideDown("slow");
        $(".allyescont06_cont .allyescont06_01").hide().parent().children().eq($(this).index()).show();
        $(this).addClass("tabs-selected").siblings().removeClass("tabs-selected");
    });
});






$(document).ready(function() {
    //导航切换						   	
    $(".allyescont04_nav_box li a").click(function() {
        $(".allyescont04_nav_box li a").removeClass("at");
        $(this).addClass("at")
    })
});

function showCaselist(p) {


    var total = 0;
    var current = 0;
    var redata;

    var topdata;

    $.ajax({
        url: "./case.html",
        async: false,
        type: 'post',
        data: 'p=' + parseInt(p),
        dataType: 'json',
        success: function(data) {
            redata = data;
        }
    });
    total = redata.totalpage;//总页数
    current = redata.current;//当前页
    var list = redata.list //列表数据 

    if (current <= 1) {
        //第一页
        $('#casepre').addClass("prev02");
        $('#casepre').unbind('click');
    } else {
        $('#casepre').removeClass("prev02").addClass("prev");
        $('#casenext').unbind('click');
        $('#casepre').bind('click', function() {
            showCaselist(parseInt(p - 1));
        });
    }
    if (current == total || list == null) {
        //最后一页
        $('#casenext').addClass("next02");
        $('#casenext').unbind('click');
    } else {
        $('#casenext').removeClass("next02").addClass("next");
        $('#casenext').unbind('click');
        $('#casenext').bind('click', function() {
            showCaselist(parseInt(p + 1))
        });
    }

    var html = '<ul><li><ol>';
    if (list != null) {
        for (var i = 0; i < list.length; i++) {
            html += ' <li><a href="javascript:;" onclick="showCase(' + list[i].id + ')"><img src="' + list[i].img + '" width="263" height="167" /></a><span>' + list[i].title + '</span></li>';
        }
    }
    html += '</ol></li></ul>';
    $('.allyescont04_cont').hide();
    $('.allyescont04_cont02').show();
    $(".allyescont04_cont_box02").slide({
        mainCell: ".bd ul",
        effect: "fold",
        delayTime: 300,
        autoPlay: false
    });
    $('#caselist').html(html);

}
function showCase(id) {
    var redata;
    $.ajax({
        url: "./case/getinfo",
        //async: false,
        type: 'get',
        data: 'id=' + parseInt(id),
        dataType: 'json',
        success: function(data) {
            redata = data;
            var html = redata.content;
            $('#casetitle').html(redata.title);
            $('#casecontent').html(html);
            showDiv('allyescont04_pop04');
        }
    });



}

function closeCase() {
    $('.allyescont04_cont02').hide();
    $('.allyescont04_cont').show();
}

function showAbout(p) {
    $('#news').hide();
    $('#about').show();
    $('#allyescont03_title').hide();
    /*$(".about_title_right_slide").slide({
     mainCell:".bd ul", 
     effect:"fold", 
     delayTime:300, 
     autoPlay:false 
     });*/
    var total = 0;
    var current = 0;
    var redata;

    var topdata;

    $.ajax({
        url: "./news",
        async: false,
        type: 'post',
        data: 'p=' + parseInt(p),
        dataType: 'json',
        success: function(data) {
            redata = data;
        }
    });

    total = redata.totalpage;//总页数
    current = redata.current;//当前页
    var list = redata.list //列表数据 
    var newslist = redata.top;
    if (current <= 1) {
        //第一页
        $('#newspre').addClass("prev02");
        $('#newspre').unbind('click');
    } else {
        $('#newspre').removeClass("prev02").addClass("prev");
        $('#newsnext').unbind('click');
        $('#newspre').bind('click', function() {
            showAbout(parseInt(p - 1));
        });
    }
    if (current == total || list == null) {
        //最后一页
        $('#newsnext').addClass("next02");
        $('#newsnext').unbind('click');
    } else {
        $('#newsnext').removeClass("next02").addClass("next");
        $('#newsnext').unbind('click');
        $('#newsnext').bind('click', function() {
            showAbout(parseInt(p + 1))
        });
    }

    var html = '<ul><li><ol>';
    if (list != null) {
        for (var i = 0; i < list.length; i++) {
            html += '<li>\n\
                    <a href="javascript:;" onclick="showNews(' + list[i].id + ')">' + list[i].title + '</a><span>' + list[i]._datetime + '</span>\n\
                    </li>';
        }
    }
    html += '</ol></li></ul>';
    $('.about_title_right_slide .bd').html(html);
    var tophtml = '';
    if (newslist != null)
    {
        tophtml = '<div class="about_title_left"><a href="javascript:;" onclick="showNews(' + newslist.id + ')"><img src="' + newslist.img + '" width="263" height="167" /></a></div>\n\
               <div class="about_title_right">\n\
                        <h1><a href="javascript:;" onclick="showNews(' + newslist.id + ')">' + newslist.title + '</a></h1>\n\
                        <p><a href="javascript:;" onclick="showNews(' + newslist.id + ')">' + newslist._sub_title + '</a></p>\n\
                        <div class="date">' + newslist._datetime + '</div>\n\
                    </div>';
    }
    $('.up_box').html(tophtml);

}
function showNews(id)
{
    var redata;
    $.ajax({
        url: "./news/getinfo",
        //async: false,
        type: 'get',
        data: 'id=' + parseInt(id),
        dataType: 'json',
        success: function(data) {
            redata = data;
            var html = redata.content;
            $('#newstitle').html(redata.title);
            $('#newscontent').html(html);
            showDiv('allyescont03_pop04');
        }
    });

}
function closeAbout() {
    $('#about').hide();
    $('#news').show();
    $('#allyescont03_title').show();
}


function showDiv(id) {
    $("#" + id).show();
    $('.overlay').show();
    $('.scroll-pane01').jScrollPane();
    $('.allyescont03_pane02').jScrollPane();
    $('.allyescont03_pane03').jScrollPane();
    $('.allyescont03_pane05').jScrollPane();
    $.fn.fullpage.setAllowScrolling();
    $.fn.fullpage.setKeyboardScrolling();
	 
}

function showslide(){
    $("#allyescont03_pop01").show();
	$('.overlay').show(); 
	$(".allyescont03_nav_box_slide").slide({
			mainCell: ".bd ul",
			autoPage: true,
			effect: "left",
			pnLoop: false,
			vis: 3
	});
	$.fn.fullpage.setAllowScrolling();
    $.fn.fullpage.setKeyboardScrolling();
}
function closeDiv(id) {
    $("#" + id).hide();
    $('.overlay').hide();
    $("#video").html('');
    $('.allyescont03_pane02').jScrollPane().destroy;
    $('.allyescont03_pane03').jScrollPane().destroy;
    $('.allyescont03_pane05').jScrollPane().destroy;
	$('.scroll-pane02').jScrollPane().destroy;
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
}

$(document).ready(function() {
    //导航切换						   	
    $(".allyescont03_nav_box li a").click(function() {
        $(".allyescont03_nav_box li a").removeClass("new");
        $(this).addClass("new");
    })

    $(".allyescont03_nav_box li:first").addClass("tabs-selected");
    $(".allyescont03_nav_box li").click(function() {

        //$("#allyescont03_cont_box .allyescont03_cont").filter(":visible").slideUp("fast").parent().children().slideDown("slow");
        $("#allyescont03_cont_box .allyescont03_cont").hide().parent().children().eq($(this).index()).show();
        $(this).addClass("tabs-selected").siblings().removeClass("tabs-selected");
        $('.allyescont03_pane01').jScrollPane();
        $('.allyescont03_pane04').jScrollPane();
    });
});

$(function() {
    $(".bd_img p").hover(
            function() {
                $(this).addClass("hover");
            },
            function() {
                $(this).removeClass("hover");
            }
    );
});

$(function() {
    $(".share_bg .share_qq").hover(
            function() {
                $(this).addClass("hover");
            },
            function() {
                $(this).removeClass("hover");
            }
    );
});


$(function()
{
    $('.scroll-pane01').jScrollPane();
    $('.scroll-pane02').jScrollPane();
    getlist(1);
});

/*获取列表方法 area 地域 p 当前页*/
function getlist(p) {
    var total = 0;
    var current = 0;
    var redata;

    $.ajax({
        url: "./position/Getlist",
        async: false,
        type: 'post',
        data: 'p=' + parseInt(p),
        dataType: 'json',
        success: function(data) {
            redata = data;
        }
    });
    total = redata.totalpage;//总页数
    current = redata.current;//当前页
    var list = redata.list //列表数据 

    if (current <= 1) {
        //第一页
        $('#pre').addClass("prev02");
        $('#pre').unbind('click');
    } else {
        $('#pre').removeClass("prev02").addClass("prev");
        $('#next').unbind('click');
        $('#pre').bind('click', function() {
            getlist(parseInt(p - 1));
        });
    }
    if (current == total || list == null) {
        //最后一页
        $('#next').addClass("next02");
        $('#next').unbind('click');
    } else {
        $('#next').removeClass("next02").addClass("next");
        $('#next').unbind('click');
        $('#next').bind('click', function() {
            getlist(parseInt(p + 1))
        });
    }



    var html = '<ol><li><span class="title">招聘部门</span><span class="title">岗位名称</span><span class="title">招聘人数</span><span class="title">工作地点</span><span class="title">截至时间</span><span class="cz">操作</span></li>';
    if (list != null) {
        /* _endtime 截至时间
         * _position 岗位名称
         * _number 招聘人数
         * _department 招聘部门
         */
        for (var i = 0; i < list.length; i++) {
            html += '<li>\n\
                    <span class="title02">' + list[i]._department + '</span>\n\
                    <span class="title02">' + list[i]._position + '</span>\n\
                    <span class="title02">' + list[i]._number + '人</span>\n\
                    <span class="title02">' + list[i]._address + '</span>\n\
                    <span class="title02">' + list[i]._endtime + '</span>\n\
                    <span class="cz02"><a href="javascript:;" onclick="getinfo(' + list[i].id + ')">查看&or;</a></span>\n\
                    </li>';
        }
    }
    html += '</ol>';
    $('#list').html(html);
}
/*获取招聘详细信息 id*/
function getinfo(id) {
    var redata = '';
    $.ajax({
        url: "./position/getinfo",
        //async: false,
        type: 'get',
        data: 'id=' + parseInt(id),
        dataType: 'json',
        success: function(data) {
            redata = data;
            $('.pop02_box_title').html('岗位名称：' + redata._position);
            $('#pane02_content').html(redata.content);
			showDiv('allyescont06_pop02');
        }
    });


}