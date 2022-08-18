window.onload = function(){
           setInterval("toggleSound()",100);
}
function toggleSound() {
             var music = document.getElementById("background-music");
             
             if (music.paused) {
                music.paused=false;
                music.play();
             }
}
function sayHello() {
	         var d = new Date();
             var h = d.getHours();
             var x = ' ';
             if(h<8) {
             x = '早上好';
             }
             else if(h>=8 && h<11) {
             x = '上午好';
             }
             else if(h>=11 && h<15) {
             x = '中午好';
             }
             else if(h>=15 && h<18) {
             x = '下午好';
             }
             else if(h>=18 && h<20) {
             x = '傍晚好';
             }
             else {
             x = '晚上好';
             }
             document.getElementById("hi").innerHTML=x;
}
function autoClick(clickId) {
    // IE
    if (document.all) {
        document.getElementById(clickId).click();
    }
    // 其它浏览器
    else {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        document.getElementById(clickId).dispatchEvent(e);
    }
}
