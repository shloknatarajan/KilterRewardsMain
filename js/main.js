$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 500) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});

let count = 0;
var over = document.getElementById("overlay");    
function expandoverlay() {
    count++;
    if (count % 2 == 0) {
        over.style.visibility = "hidden";        
        over.style.opacity = 0;
    } else {
        over.style.visibility = "visible";         
        over.style.opacity = 1;
    }
}