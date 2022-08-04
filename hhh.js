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
