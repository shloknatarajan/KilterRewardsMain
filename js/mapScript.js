
       var myCenter=new google.maps.LatLng(41.759814,-74.594048);

        function initialize()
        {
        var mapProp = {
        center:myCenter,
        scrollwheel: false,
        zoom:10,    
        zoomControl:false,
        mapTypeControl:false,
        streetViewControl:false,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
		styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{ "color": "#f9bf3b" },{"visibility":"off"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{ "color": "#f9bf3b" }]},{"featureType":"water","elementType":"geometry","stylers":[{ "color": "#1d1d1d" }, {"visibility": "on"} ]}]
          };

        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

        
        }
		
        google.maps.event.addDomListener(window, 'load', initialize);
   