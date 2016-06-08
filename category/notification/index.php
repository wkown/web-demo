<?php
    $arr = array(
        array('name'=>'Tiny-jQuery-Plugin-For-Informative-Messages-In-The-Browser-Growler','dir'=>'Tiny-jQuery-Plugin-For-Informative-Messages-In-The-Browser-Growler','des'=>''),
        array('name'=>'jQuery-Plugin-To-Create-Metro-Style-Toast-Messages-toastr8','dir'=>'jQuery-Plugin-To-Create-Metro-Style-Toast-Messages-toastr8','des'=>''),
        array('name'=>'Growl-Style-Message-Toaster-Plugin-For-jQuery-notify','dir'=>'Growl-Style-Message-Toaster-Plugin-For-jQuery-notify','des'=>''),
        array('name'=>'Slick-Responsive-Toast-Message-Plugin-with-jQuery-Tostie','dir'=>'Slick-Responsive-Toast-Message-Plugin-with-jQuery-Tostie','des'=>''),
        array('name'=>'noty','dir'=>'noty','des'=>''),
        array('name'=>'Small-Animated-jQuery-Notification-Popup-Plugin-Notifier','dir'=>'Small-Animated-jQuery-Notification-Popup-Plugin-Notifier','des'=>''),
        array('name'=>'Classic-Growl-like-Notification-Plugin-For-jQuery-Gritter','dir'=>'Classic-Growl-like-Notification-Plugin-For-jQuery-Gritter','des'=>''),
        array('name'=>'Minimalist-jQuery-Notification-Plugin-rtnotify','dir'=>'Minimalist-jQuery-Notification-Plugin-rtnotify','des'=>''),
        array('name'=>'jQuery-Plugin-To-Create-Fixed-Stackable-Notifications-Notification','dir'=>'jQuery-Plugin-To-Create-Fixed-Stackable-Notifications-Notification','des'=>''),
        array('name'=>'jQuery-Plugin-To-Show-Pretty-Notifications-with-Icons-Notification-Service','dir'=>'jQuery-Plugin-To-Show-Pretty-Notifications-with-Icons-Notification-Service','des'=>''),
        array('name'=>'Animated-Notification-Plugin-with-jQuery-Animate-css-sticky','dir'=>'Animated-Notification-Plugin-with-jQuery-Animate-css-sticky','des'=>''),
        array('name'=>'Versatile-jQuery-Popup-Window-Plugin-jBox','dir'=>'Versatile-jQuery-Popup-Window-Plugin-jBox','des'=>''),
        array('name'=>'Simple-Growl-Notification-Plugin-with-jQuery-Notifyr','dir'=>'Simple-Growl-Notification-Plugin-with-jQuery-Notifyr','des'=>''),
        array('name'=>'Easy-Customizable-jQuery-Notification-Plugin-cosyAlert','dir'=>'Easy-Customizable-jQuery-Notification-Plugin-cosyAlert','des'=>''),
        array('name'=>'','dir'=>'','des'=>''),
        array('name'=>'','dir'=>'','des'=>''),
        array('name'=>'','dir'=>'','des'=>''),
        array('name'=>'','dir'=>'','des'=>''),
        array('name'=>'','dir'=>'','des'=>''),
        array('name'=>'','dir'=>'','des'=>''),
        array('name'=>'','dir'=>'','des'=>''),
    )
?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript" src="../../jquery/js/jquery-1.11.3.min.js"></script>
    <style type="text/css">
        .demo_selected{
            background-color: #FF9E3B;
            color: #ffffff;
        }
    </style>
</head>
<body>
<iframe name="show_demo" src="" width="100%" height="600px" marginheight="0" marginwidth="0" frameborder="0">

</iframe>
<ol style="z-index: 100;position: relative; padding-bottom: 100px;">
    <? foreach($arr as $k=>$v){
        if(!$v['name']){
            continue;
        }?>
        <li style="width: 400px; float: left;"><a class="demo_link" href="<?=$v['dir']?>" target="show_demo"><?=$v['name']?></a></li>
    <? } ?>
</ol>
<script type="text/javascript">
    $('.demo_link').click(function(){
        $('.demo_link').removeClass('demo_selected');
        $(this).addClass('demo_selected');
    })
</script>
<div style="margin-bottom: 50px;clear: both;"></div>
</body>
</html>