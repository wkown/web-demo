/* 代码整理：懒人之家 www.lanrenzhijia.com */
 $(function(){
        /* 按钮触碰效果 */
        function showSlideToggle(){
            if($("#downiphone").is(":animated")){
                return;
            }
            showTog(".downloadup",100);
            showTog(".downloaddown",200);
            changeIpPos();                                           
        }
        function changeIpPos(){
            $("#downiphone").toggleClass("active");   
            if($("#downiphone").hasClass("active")){
                $("#downiphone").css("backgroundPosition","-29px -152px");
            }else{
                $("#downiphone").css("backgroundPosition","-29px -30px");
            }
        }
        function showSlide(){
            if($("#downiphone").is(":animated")){
                return;
            }
            showDown(".downloadup",100);
            showDown(".downloaddown",200);
            $("#downiphone").addClass("active");
            $("#downiphone").css("backgroundPosition","-29px -152px");
        }
        function showTog(ele,speed){
            $(ele).slideToggle(speed);
        }
        function showDown(ele,speed){
            $(ele).slideDown(speed);
        }
        function showIpad(){
            if($("#downipad").is(":animated")){
                return;
            }
            showDown(".ipadup",100);
            showDown(".ipaddown",200);
            $("#downipad").addClass("active");
            $("#downipad").css("backgroundPosition","-205px -296px");
        }
        function showIpadToggle(){
            if($("#downiphone").is(":animated")){
                return;
            }
            showTog(".ipadup",100);
            showTog(".ipaddown",200);
            chgrIpadPos(true);
        }
/* 代码整理：懒人之家 www.lanrenzhijia.com */
        function chgrIpadPos(flag){
            $("#downipad").toggleClass("active");   
            if(!$("#downipad").hasClass("active")){
                $("#downipad").css("backgroundPosition","-29px -296px");
            }else{
                $("#downipad").css("backgroundPosition","-205px -296px");
            }
        }
        function hideIphone(){
            $(".downloadup").slideUp(200);
            $(".downloaddown").slideUp(200);
            $("#downiphone").removeClass("active");
            $("#downiphone").css("backgroundPosition","-29px -30px");
                
        }
        function hideIpad(){
            $(".ipadup").slideUp(200);
            $(".ipaddown").slideUp(200);
            $("#downipad").removeClass("active");
            $("#downipad").css("backgroundPosition","-29px -296px");
        }
        $("#downiphone").hover(function(){
            showSlide();
        });
        $("#downipad").hover(function(){
            showIpad();
        });
        $(".iphonepart").mouseleave(function(){
            hideIphone();
        });
        $(".ioswpart").mouseleave(function(){
            hideIpad();
        });
        /* 图片轮播效果,暂时注释掉轮播效果，只在点击时切换 */
        var timer = null;
        var interval = 8000;
        var stayTime = 7500;
        var len = 2;
        var index = 0;
        var timeoutRoll = null;

        $(".android_ico").click(function(){
            playAndroid();
            pb_component(click_gif,"androidTab",from);
        });
        
        $(".windows_ico").click(function(){
            playWindows();
            pb_component(click_gif,"winTab",from);
        });
        
        $(".ios_ico").click(function(){
            playIos();
            pb_component(click_gif,"iosTab",from);
        });
        
        var tag="";
        if(tag == "ios"){
            playIos();
        }else if(tag=="android"){
            playAndroid();
        }else{
            playWindows();
        }

        function clearTimer(){
            clearInterval(timer);
            clearTimeout(timeoutRoll);
        }

        function setNewInterval(){
            timer = setInterval(function(){
                index++;
                if(index == len){
                    index = 0;
                }
                play(index);
            },interval);
        }
        

        /* windows Banner背景图效果 */
        setCurBg();

        $(".changeTime").click(function(){
            clearTimer();
               
            var cur = getCurBg();
            cur++;
            if(cur > 12){
               cur = 1;
            }
            setBg(cur);

        });

        function getCurBg(){
            var bgstr = $(".bannerwin").css("backgroundImage");
            var preg = /\/(\d+)\.jpg/i;
            var res = bgstr.match(preg);
            if(res != false){
                return res[1];
            }
            /* 默认显示第一个时间点 */
            return 1;    
        }

        function getTimePos(i){
            if(i<=0 || i>13){
                i = 1;
            }
            var pos = ['-10px -10px','-67px -10px','-124px -10px','-181px -10px','-10px -108px','-67px -108px','-124px -108px','-181px -108px','-10px -206px','-67px -206px','-124px -206px','-181px -206px'];
            return pos[i-1];
        }
        /* 代码整理：懒人之家 www.lanrenzhijia.com */
        /* 24小时转为时辰 */
        function getCurHour(){
            var hour = new Date().getHours();
            if(hour<0||hour>23){
                hour = 0;
            }
            var shour;
            if(hour==0 || hour ==23){
                shour = 1;
            }else{
                shour = Math.floor((hour+1)/2)+1;
            }
            return shour;
        }
        
        function setCurBg(){
            var cur = getCurHour();
            setBg(cur);
        }
        
        function setBg(cur){
            if(cur<1 || cur>12){
                cur = 1;
            }
            var bgscreen = getTimePos(cur);
            $(".bannerwin").css("backgroundImage","url(images/"+cur+".jpg)");
            $(".times").css("background-position",bgscreen);
            $(".screenpc").css("backgroundImage","url(images/bg"+'6'+".png)");
        }

        function play(index){
            if(index == 0){
                playIos();
                return;
            }
            playWindows();
        }

        function init(){
            $(".iospart").stop().css({"left":"2000px"});
            $(".forwin").stop().css("left","2000px");
            $(".forandroid").stop().css("left","2000px");
            $(".downloadup, .ipadup").stop().css({"height":"55px","display":"none"});
            $(".downloaddown, .ipaddown").stop().css({"height":"94px","display":"none"});

            $(".bannerios").css("left","100%");
            $(".bannerwin").css("left","100%");
            $(".bannerandr").css("left","100%");

            $(".ios_ico").removeClass("ios_active");
            $(".windows_ico").removeClass("windows_active");
            $(".android_ico").removeClass("android_active");
            
            $("#downipad").css("backgroundPosition","-29px -296px");
            $("#downiphone").css("backgroundPosition","-29px -30px");
            $(".ioshide").stop().fadeOut(10);
        }

        function initIos(){
            init();
            $(".arrow").css("left","498px");
            $(".bannerios").css("left","0");
            $(".ios_ico").addClass("ios_active");
        }

        function playIos(){
            initIos();
            $("#downiphone").animate({"left":"0"},400,function(){
                $("#downipad").animate({"left":"0"},400,function(){
                    $(".forios").show().css({"left":"482px"}).css({"opacity":1}).hide().fadeIn(1200); 
                });    
            });

        }
        /* 代码整理：懒人之家 www.lanrenzhijia.com */
        function initWindows(){
            init();
            $(".windows_ico").addClass("windows_active");
            $(".arrow").css("left","439px");
            $(".bannerwin").css("left","0");
        }

        function playWindows(){
            initWindows();
            /* windows进入动画 */
            $(".screenpc").animate({"left":"52px"},400,function(){
                $(".downloadpc").animate({"left":"569px"},500);    
                $(".textdisp").animate({"left":"569px"},500);    
            });
        }
        
        function initAndroid(){
            init();
            $(".bannerandr").css("left","0");
            $(".android_ico").addClass("android_active");
            $(".arrow").css("left","557px");
        }

        function playAndroid(){
            initAndroid();
            $(".downandroid").animate({"left":"100px"},400);
            $(".wandou").animate({"left":"99px"},400);
            $(".androidcode").animate({"left":"0"},400);
            $(".scancode").animate({"left":"104px"},400);
            $(".andrtext").animate({"left":"0"},400,function(){
                $(".androidDis").animate({"left":"493px"},400);
            });

        }
        /* windos banner图片缓存 */
        for(var i = 1;i<=12;i++){
        /*
         * 1.如果new 在循环外,更改src会取消上次请求
         * 2.同一个image对象更改两次src，第二次会取消第一次的请求。
         * 3.由于每次生成image对象。请求地址后删除，释放资源 
         * 4.请求的资源较大，放在页面加载完毕后，且置于脚本最后
         * 5.申请的image临时对象请求之前不能unset。否则会取消src的图片请求
         */
        var image = new Image;
        var imagebg = new Image;
            image.src = "/images/"+i+".jpg";    
            imagebg.src = "/images/bg"+i+".png";
        }
    });
 /* 代码整理：懒人之家 www.lanrenzhijia.com */