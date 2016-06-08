$(function () {
    //根据图片数量加载轮播小球数量
    if ($('.focus_img li').length) {
        var spanstr = '<li><span class="current"></span></li>';
        for (var i = 0; i < $('.focus_img li').length - 1; i++) {
            spanstr += '<li><span></span></li>';
        }
        $('.focus_num').append(spanstr);
    }
    var linum = $('.focus_img li').length,
        liindex = 0,
        time=new Date(),
        div = $('.personinformation_left'),
        ul = $('.focus_img'),
        circle = $('.focus_num span'),
        liw = $('.focus_img li').eq(0).width(),
        btnl = $('.personinformation_left .left'),
        btnr = $('.personinformation_left .right'),
        fcl = 'current',
        timera;
    ul.css({'width':linum*liw+'px','left':'0'});
    div.mouseenter(function(){
        clearInterval(timera);
    }).mouseleave(function(){
        timerfn();
    })
    //小圆圈点击事件
    circle.click(function () {
        clearInterval(timera);
        var t=$(this).parent().index()-liindex;
        liindex=$(this).parent().index();
        // 如果是下标变大
        if(t>0){
            turnImgr(t);
        }else{
            t=-t;
            turnImgl(t);
        }
    }).mouseup(function(){
        timerfn();
    });
    //右箭头点击事件
    btnr.click(function () {
        var now=new Date();
        if(now-time>300){
            liindex++;
            if(liindex==linum){
                liindex=0;
            }
            turnImgr(1);
            time=new Date();
        }
    });
    //左箭头点击事件
    btnl.click(function () {
        var now=new Date();
        if(now-time>300){
            liindex--;
            if(liindex==-1){
                liindex=linum-1;
            }
            turnImgl(1);
            time=new Date();
        }
    });
    function timerfn() {
        timera = setInterval(function () {
            liindex ++;
            if(liindex==linum){
                liindex=0;
            }
            turnImgr(1);
        }, 4000)
    }
    timerfn();
    //向右轮播图片
    function turnImgr(n) {
        ul.stop().animate({left: (-1) * n * liw + 'px'}, 300,function(){
            for(var i=0;i<n;i++){
                $('.focus_img li').eq(0).insertAfter($('.focus_img li').eq(linum-1));
            }
            circle.removeClass(fcl);
            circle.eq(liindex).addClass(fcl);
            ul.css({'left':'0'});
        });
    }
    //向左轮播图片
    function turnImgl(n) {
        for(var i=0;i<n;i++){
            $('.focus_img li').eq(linum-1).insertBefore($('.focus_img li').eq(0));
        }
        ul.css({'left':(-1) * n * liw + 'px'});
        ul.stop().animate({left: 0}, 300,function(){
            circle.removeClass(fcl);
            circle.eq(liindex).addClass(fcl);
        });
    }
});