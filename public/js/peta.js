function initialize() { 
    var propertiPeta = {
        center:new google.maps.LatLng(-8.5830695,116.3202515),
        zoom:9,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    
    var peta = new google.maps.Map(document.getElementById("map"), propertiPeta);
}

google.maps.event.addDomListener(window, 'load', initialize);