$(document).ready(function() {
    $("#inicio").show();

    $("#galeriaBTN").click(function(){
      $("#inicio").fadeOut(250);
      $("#contacto").fadeOut(250);
      setTimeout(function() {
          $("#galeria").fadeIn(250);
      }, 250)
    });

    $("#inicioBTN").click(function(){
      $("#galeria").fadeOut(250);
      $("#contacto").fadeOut(250);
      setTimeout(function() {
          $("#inicio").fadeIn(250);
      }, 250)
    });

    $("#contactoBTN").click(function(){
      $("#inicio").fadeOut(250);
      $("#galeria").fadeOut(250);
      setTimeout(function() {
          $("#contacto").fadeIn(250);
      }, 250)
    });

});
