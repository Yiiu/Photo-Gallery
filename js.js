window.onload = function(){
	photo(9)
}

function photo(num){
	img(num);
	ini();
	Array();
	opa();
}

//大图预览
function ini(){
	var oCon = document.getElementById('content');
	var aImg = getClass("div","img");
	var oC = document.getElementById('content');
	var oCimg = oC.getElementsByTagName('img');
	var oBimg = document.getElementById('big-img');
	var oBon = document.getElementById('button-on');
	var iBimg = document.getElementById('big-img-i');
	var Bimg = iBimg.getElementsByTagName('img')[0];
	var num = -1;
	var opacity = 0;
	warp = true;
	for(var i=0;i<aImg.length;i++){
		num++;
		aImg[i].index = num+1;
		aImg[i].warp = warp;
		aImg[num].onclick = function(){
			var oCimg = document.getElementById('imgs');
			Bimg.src = "img/" + this.index + ".jpg";
			oBimg.className = "block";
			timer = setInterval(function(){
				if (opacity == 100){
					clearInterval(timer);
				}
				else {
					opacity+=10;
					oBimg.style.opacity = opacity / 100;
				}
			},15);
			warp = false;
		}
		if(warp){
			oBon.onclick = function (){
				timer = setInterval(function(){
					if (opacity == 0){
						oBimg.className = "none";
						warp = true;
						oBimg.style.opacity = 0;
						clearInterval(timer);
					}
					else {
						opacity-=10;
						oBimg.style.opacity = opacity / 100;
		           	}
				},15);
			}
		}
	}
}
/* 生成图片 */
function img(num){
	var oimg = document.getElementById('content');
	var aimg = oimg.getElementsByTagName('div');
	var cimg = oimg.getElementsByTagName('img');
	var iHtml = oimg.innerHTML;
	var index = 0;
	for(var i = 1;i<num;i++){
		oimg.innerHTML += iHtml;
	}
	for(var i = 0;i<num;i++){
		cimg[i].src = "img/"+ (i+1) + ".jpg";
	}
}
//遍历数组
function Array(my){
	var biaoti = getClass("div","biaoti");
	var riqi = getClass("div","riqi");
	var my = [
	{name:"1",year:"2015-1-1"},
	{name:"2",year:"2015-1-2"},
	{name:"3",year:"2015-1-3"},
	{name:"4",year:"2015-1-4"},
	{name:"5",year:"2015-1-5"},
	{name:"6",year:"2015-1-6"},
	{name:"7",year:"2015-1-7"},
	{name:"8",year:"2015-1-8"},
	{name:"9",year:"2015-1-9"}
	]
	for(var i = 0;i<biaoti.length;i++){
		biaoti[i].innerHTML = my[i].name;
		riqi[i].innerHTML = my[i].year;
	}
}
//图片简介
function opa(){
	var chakan = getClass("div","chakan");
	var oimg = getClass("div","img");
	for(var i = 0;i<oimg.length;i++){
		chakan[i].index = i;
		chakan[i].onmouseover = function(){
			this.style.opacity = "0.5";
		};
		chakan[i].onmouseout = function(){
			this.style.opacity = "0";
		};
	};
};
function cc(){
	var opacity = null;
	timer = setInterval(function(){
				if (opacity == 50){
					clearInterval(timer);
				}
	            else {
	            	opacity+=5;
	            	this.style.opacity = opacity / 100;
	            }
			},30);
}
function getClass(obj,className) {
	//tagname指元素，className指class的值
	//判断浏览器是否支持getElementsByClassName，如果支持就直接的用
	if (document.getElementsByClassName) {
    	return document.getElementsByClassName(className);
	}
	else { //当浏览器不支持getElementsByClassName的时候用下面的方法
	    var obj = document.getElementsByTagName(obj);  //获取指定元素
	    var tagnameAll = [];     //这个数组用于存储所有符合条件的元素
	    for (var i = 0; i < obj.length; i++) {     //遍历获得的元素
	        if (obj[i].className == obj) {     //如果获得的元素中的class的值等于指定的类名，就赋值给tagnameAll
	            objAll[objAll.length] = obj[i];
	        }
	    }
    return objAll;
	}
}
