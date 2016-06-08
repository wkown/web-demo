<?php
    $arr = array(
        array('name'=>'DAD – jQuery拖拽/拖放插件','dir'=>'DAD.js','des'=>''),
        array('name'=>'Nestable','dir'=>'Nestable','des'=>''),
        array('name'=>'jQuery Gridly','dir'=>'jQuery-Gridly','des'=>''),
        array('name'=>'nestedSortable','dir'=>'nestedSortable','des'=>''),
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