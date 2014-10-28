
window.onload = function(){
	var oCon = document.getElementById('content');
	var aImg = oCon.getElementsByTagName('div');
	var oCc = document.getElementById('cc');
	var oZz = document.getElementById('zz');
	var wrapper =document.getElementById('wrapper');
    var oC = document.getElementById('c');
    var oCimg = oC.getElementsByTagName('img');
    var oX = document.getElementById('x');
	var num = -1;
	warp = true;
	for(var i=0;i<aImg.length;i++){
		num++
		aImg[i].index = num+1;
		aImg[i].warp = warp;
		aImg[num].onclick = function(){
			var oCimg = document.getElementById('imgs');
			oCimg.src = "img/" + this.index + ".jpg";
			warp = false;
			oZz.className = "black";
			oCc.className = "black opacity";
			wrapper.className = "blur hidden";
			window.onresize =function(){wrapHeight()};
			wrapHeight()
		}
		if(warp){
			oX.onclick = function (){
				oZz.className = "none";
				oCc.className = "none";
				wrapper.className = "";
				warp = true;
			}
		}
	}
}
function wrapHeight(){
	document.getElementById('wrapper').style.height = document.documentElement.clientHeight + 'px';
	document.getElementById('cc').style.height = document.documentElement.clientHeight + 'px';
}

