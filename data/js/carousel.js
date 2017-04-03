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
});

function runCarousel() {
    // if ($(window).height() >)
    $('.slider').slick({
        infinite: true,
        dots: false,
        speed: 1000,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
}
