<?php
/**
 * Created by PhpStorm.
 * User: zwj
 * Date: 2016/6/8
 * Time: 14:58
 */
?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ol>
    <? foreach($demoRootConfig as $k=>$v){ ?>
        <li><a href="/?cate=<?=$k?>"><?=$v['name']?></a></li>
    <? } ?>
</ol>
</body>
</html>