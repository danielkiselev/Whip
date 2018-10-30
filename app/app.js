var map;
var lat = 43;
var lon = -77;

// check for Geolocation support
if (navigator.geolocation) {
	console.log('Geolocation is supported!');
  	window.onload = function() {
  		var startPos;
  		var geoSuccess = function(position) {
    		startPos = position;
    		lat = parseFloat(startPos.coords.latitude);
    		lon = parseFloat(startPos.coords.longitude);
    		document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    		document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    		initMap();
  		};
  		navigator.geolocation.getCurrentPosition(geoSuccess);
 	};
} else {
  console.log('Geolocation is not supported for this Browser/OS.');
}

function initMap() {
	var pyrmont = {lat: lat, lng: lon};
	map = new google.maps.Map(document.getElementById('map'), {
		center: pyrmont,
		zoom: 12});

	infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: pyrmont,
        radius: 10000,
        type: ['airport']
    }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
    	for (var i = 0; i < results.length; i++) {
    	    createMarker(results[i]);
        }
    }
}

function createMarker(place) {
	var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
    	map: map,
    	position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
   		infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}
