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
                $(".slider").append('<div><img src="data/img/sales/' + imagenes[i] + '"/></div>')
            }
        }
    });

        $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        });
});
