<?php
    $arr = array(
        array('name'=>'搜狐快站','dir'=>'搜狐快站'),
        array('name'=>'百度史记','dir'=>'百度史记'),
        array('name'=>'网易邮箱','dir'=>'网易邮箱'),
        array('name'=>'苹果5c','dir'=>'苹果5c'),
        array('name'=>'证券时报网移动产品','dir'=>'证券时报网移动产品'),
        array('name'=>'allyes.com_fullpage','dir'=>'allyes.com_fullpage'),
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
