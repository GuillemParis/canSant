$(document).ready(function() {
    $("#inicio").show();
    $("#galeria").hide();
    $("#contacto").hide();

    $("#galeriaBTN").click(function(){
      $("#inicioBTN").prop('disabled', true);
      $("#contactoBTN").prop('disabled', true);
      $("#inicio").fadeOut(250);
      $("#contacto").fadeOut(250);
      setTimeout(function() {
          $("#galeria").fadeIn(250);
          $("#inicioBTN").prop('disabled', false);
          $("#contactoBTN").prop('disabled', false);
      }, 250)
    });

    $("#inicioBTN").click(function(){
      $("#galeriaBTN").prop('disabled', true);
      $("#contactoBTN").prop('disabled', true);
      $("#galeria").fadeOut(250);
      $("#contacto").fadeOut(250);
      setTimeout(function() {
          $("#inicio").fadeIn(250);
          $("#galeriaBTN").prop('disabled', false);
          $("#contactoBTN").prop('disabled', false);
      }, 250)
    });

    $("#contactoBTN").click(function(){
      $("#inicioBTN").prop('disabled', true);
      $("#galeriaBTN").prop('disabled', true);
      $("#inicio").fadeOut(250);
      $("#galeria").fadeOut(250);
      setTimeout(function() {
          $("#contacto").fadeIn(250);
          $("#inicioBTN").prop('disabled', false);
          $("#galeriaBTN").prop('disabled', false);
          myMap();
      }, 250)
    });
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
