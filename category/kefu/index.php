<?php
    $arr = array(
        array('name'=>'简洁大气设计风格的网页右侧扁平化滑动在线客服代码','dir'=>'简洁大气设计风格的网页右侧扁平化滑动在线客服代码'),
        array('name'=>'网页右侧支持上下滑动展开折叠qq在线客服代码','dir'=>'网页右侧支持上下滑动展开折叠qq在线客服代码'),
        array('name'=>'右侧可展开折叠的在线客服代码','dir'=>'右侧可展开折叠的在线客服代码'),
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