$(document).ready(function(){

	myMap();

	function myMap() {
		var center = new google.maps.LatLng(39.57250958154583,3.2014614364820773);
		var mapProp= {
		    center:center,
		    zoom:19
		};
		var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
		var marker = new google.maps.Marker({position:center});
		marker.setMap(map);
		google.maps.event.trigger(map, 'resize');
	}
});