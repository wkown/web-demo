<?php
/**
 * Created by PhpStorm.
 * User: zwj
 * Date: 2016/6/8
 * Time: 14:26
 */

function renderTpl($name='index',$data=[],$return=false){
    extract($data);
    include TPL_PATH.DS.$name.'.php';
    exit();
}