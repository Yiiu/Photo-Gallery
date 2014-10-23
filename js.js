
window.onload = function(){
    var oCon    = document.getElementById('content');
    var aImg    = oCon.getElementsByTagName('div');
    var oCc     = document.getElementById('cc');
    var oZz     = document.getElementById('zz');
    var wrapper =document.getElementById('wrapper');
    var oC      = document.getElementById('c');
    var num     = -1;
    warp    = true;
    for(var i=0;i<aImg.length;i++){
        num++
        aImg[i].index = i;
        if(warp == true){
            aImg[num].onclick = function(){
                oZz.className = "black";
                oCc.className = "black opacity";
                wrapper.className = "blur hidden";
                window.onresize =function(){wrapHeight()};
                wrapHeight()
                warp = false;
            }
        }else {
        oCc.onclick = function (){
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