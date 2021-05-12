/*TMODJS:{"version":4,"md5":"7d75e103f54ea400c719bace445a2ab1"}*/
template('mobile/onecode/mer/error',function($data,$filename
) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,respMsg=$data.respMsg,$out='';$out+='<div class="errorInfo"> <div class="title">付款失败</div> <div class="cause ellipsis">';
$out+=$escape(respMsg);
$out+='</div> <div class="goOnButton"> <span class="buttonTips" style="color: #ffffff;">确定</span> <span class="time"></span> </div> </div> ';
return new String($out);
});