/**
 * Created by Owner on 5/28/2015.
 */

var myCenter=new google.maps.LatLng(18.628560, -72.264195);
var marker;

var commi=new google.maps.LatLng(18.62596,-72.27058);
var kafou1=new google.maps.LatLng(18.62534, -72.26500);
var igeco=new google.maps.LatLng(18.628529, -72.264170);

function initialize()
{
    var mapProp = {
        center:myCenter,
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker=new google.maps.Marker({
        position:myCenter,
        animation:google.maps.Animation.BOUNCE
    });


    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content:"IGECO HAITI!"
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    var myTrip=[commi,kafou1,igeco];
    var flightPath=new google.maps.Polyline({
        path:myTrip,
        strokeColor:"#0000FF",
        strokeOpacity:0.8,
        strokeWeight:1
    });

    flightPath.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


