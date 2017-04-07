$(document).ready(function() {
    $.ajax({
        url: './data/php/carousel.php',
        data: {
            action: 'getImages'
        },
        type: 'post',
        success: function(result) {
            var imagenes = eval(result);
            for (var i = 2; i < imagenes.length; i++) {
                $("#img-container").append('<div class="thumbnail" onclick="goToSlide(' + (i - 2) + ')" style="background-image: url(data/img/sales/' + imagenes[i] + ')"></div>');
                if (i == 2){
                  $(".carousel-inner").append('<div class="item active"><img src="data/img/sales/' + imagenes[i] + '" alt=""><div class="carousel-caption"></div></div>');
                }else{
                  $(".carousel-inner").append('<div class="item"><img src="data/img/sales/' + imagenes[i] + '" alt=""><div class="carousel-caption"></div></div>');
                }
            }
        }
    });

});

function goToSlide(number) {
  $("#myModal").modal("toggle");
  $("#").carousel(number);
}
