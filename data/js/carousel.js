$(document).ready(function() {

    $.ajax({
        url: './php/caroussel.php',
        data: {
            action: 'getImages'
        },
        type: 'post',
        success: function(result) {
            var imagenes = eval(result);
            for (var i = 2; i < imagenes.length; i++) {
                $(".slider-for").append('<div><img src="./img/sales/' + imagenes[i] + '"/></div>')
                $(".slider-nav").append('<div><img src="./img/sales/' + imagenes[i] + '"/></div>')
            }
        }
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});
