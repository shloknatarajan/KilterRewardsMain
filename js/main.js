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
        over.style.opacity = 0;
    } else {
        over.style.visibility = "visible";         
        over.style.opacity = 1;
    }
}

window.addEventListener('resize', function() {
    over.style.visibility = "hidden";
});

$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });


  
  


  