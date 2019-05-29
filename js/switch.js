//TAB选项
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"news_hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}

//控制子导航固
window.onscroll=function(){
	if ($(document).scrollTop() > 350) 
	{
		$(".gdt_kz").addClass('floata');
		$(".gdt_zl").addClass('floata1');
		
	}else{
		$(".gdt_kz").removeClass('floata'); 
		$(".gdt_zl").removeClass('floata1'); 
	}
	
}

//展开收缩
function getObject(objectId){
	if(document.getElementById && document.getElementById(objectId)){
		return document.getElementById(objectId);
	}else if(document.all && document.all(objectId)){
		return document.all(objectId);
	}else if(document.layers && document.layers[objectId]){
		return document.layers[objectId];
	}else{
		return false;
	}
}

function showHide(e,objname){
	var obj = getObject(objname);
	if(obj.style.display == "none"){
		obj.style.display = "block";
		e.className="plus1 clearfix";
	}else{
		obj.style.display = "none";
		e.className="minus1 clearfix";
	}
}