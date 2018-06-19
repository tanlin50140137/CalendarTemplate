<?php
/*
 * 首页面
 * */
require 'appliction/lunar.php';
require 'returnRiLiInfo.php';

function index()
{
	$a = get_ylshouwei(2018,1);
	
	print_r($a);
	
	require 'index.html';
}


$act = $_REQUEST['act']==''?'index':$_REQUEST['act'];
if( $act!=null && function_exists( $act ) )
{
	$act();
}
else 
{
	echo json_encode(array('error'=>$act.' - Interface does not exist'));
}