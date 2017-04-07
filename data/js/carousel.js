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
                $("#img-container").append('<div class="thumbnail" style="background-image: url(data/img/sales/' + imagenes[i] + ')"></div>')
            }
        }
    });
});
