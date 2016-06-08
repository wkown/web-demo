<?php
    $arr = array(
        array('name'=>'仿iphone软键盘输入文本框','dir'=>'仿iphone软键盘输入文本框',),
        array('name'=>'','dir'=>''),
        array('name'=>'','dir'=>''),
        array('name'=>'','dir'=>''),

    )
?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ol>
    <? foreach($arr as $k=>$v){ ?>
        <li><a href="<?=$v['dir']?>" target="_blank"><?=$v['name']?></a></li>
    <? } ?>
</ol>
</body>
</html>