<?php
/**
 * Created by PhpStorm.
 * User: zwj
 * Date: 2016/6/8
 * Time: 13:53
 */
require 'lib/init.php';
require 'lib/config.php';
require 'lib/func.php';
if(empty($_GET) || empty($_GET['cate']) || !isset($demoRootConfig[$_GET['cate']])){
    renderTpl('index',['demoRootConfig'=>$demoRootConfig]);
}
$cate = $_GET['cate'];
renderTpl('demo-show',['demoList'=>$demoConfig[$_GET['cate']],'demo_root_url'=>'/category/'.$cate]);