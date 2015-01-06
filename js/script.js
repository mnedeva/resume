$(document).ready(function(){
    var _bTabsHidden = true;
    $("#content").prepend(htmlTabs).tabs();
    if (typeof biography !== "undefined") {
        biography.display();
    } else {
        $("#header").remove();
        $("#intro").remove();        
    }
    if (typeof work !== "undefined"){
        work.display();
        _bTabsHidden = false;
    } else {
        $("#work").remove();
        $("#anchorWork").remove();
    }
    if (typeof education !== "undefined") {
        education.display();
        _bTabsHidden = false;
    } else {
        $("#education").remove();
        $("#anchorEducation").remove();
    }
    if (typeof projects !== "undefined") {
        projects.display();
        _bTabsHidden = false;
    } else {
        $("#projects").remove();
        $("#anchorProjects").remove();
    }
    if (typeof certificates !== "undefined") {
        _bTabsHidden = false;
        certificates.display();
    } else {
        $("#certificates").remove();
        $("#anchorCertificates").remove();
    }
    if (_bTabsHidden) {
        $("#tabs").remove();
    }
    addMarkers();
});


function addMarkers(){
   var markers = [];
   if (typeof education !== "undefined") {
       for(i in education.schools){
           markers.push({
               "location": education.schools[i].location, 
               "info": "<b>"+education.schools[i].school + "</b>"
                        + "<br />" + education.schools[i].year
           });           
       }       
   } 
   if (typeof work !== "undefined"){
       for (i in work.positions) {
           markers.push({
               "location":work.positions[i].location, 
               "info": "<b>" + work.positions[i].company + "</b>"
                        + "<br />" + work.positions[i].year
           });
       }
   } 
   
   if (markers.length) {
       $("#main").append("<div class='map-title'><h2>Where I studied and worked</h2></div>");
        $("#main").append("<div id='map'></div>");
        var options = {
            zoom: 9,
            //center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map"), options);
        var geocoder = new google.maps.Geocoder();
        var bounds = new google.maps.LatLngBounds();
        var coords = [];
        for(i in markers) {
            geocoder.geocode( { 'address': markers[i].location}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var latLng = results[0].geometry.location;
                    for (i in coords){
                        if (latLng.toString() == coords[i]){
                            latLng = new google.maps.LatLng(latLng.lat() + 0.1, latLng.lng()+0.1); 
                        }
                    }
                    coords.push(latLng.toString());
                    map.setCenter(latLng);
                    bounds.extend(latLng);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: latLng,
                    });
                    marker.info = new google.maps.InfoWindow({
                        content: "<div class='info-window'>" + markers[i].info + "</div>"
                    });
                } 
                google.maps.event.addListener(marker, 'click', function() {
                   marker.info.open(map, marker);
                });
            });   
        }
        map.fitBounds(bounds);
   }
}