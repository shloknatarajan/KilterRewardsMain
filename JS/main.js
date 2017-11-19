var preloader = document.getElementById("preloader");
window.addEventListener('load', function() {
    setTimeout(function() {
        preloader.style.display = "none";        
    }, (1000));

});

var count = 0;
var over = document.getElementById("overlay");    
function expandoverlay() {
    count++;
    if (count % 2 == 0) {
        over.style.visibility = "hidden";        
        //over.style.display = "none";
        //over.style.width = "0vw";
        over.style.opacity = 0;
    } else {
        //over.style.display = "block";
        over.style.visibility = "visible";        
        //over.style.width = "100vw"; 
        over.style.opacity = 1;
    }
}


