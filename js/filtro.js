$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let carabaya = $('#carabaya').offset().top,
        turismo = $('#turismo').offset().top,
        otros = $('#otros').offset().top,
        video = $('#video').offset().top;

    window.addEventListener('resize', function(){
        let carabaya = $('#carabaya').offset().top,
        turismo = $('#turismo').offset().top,
        otros = $('#otros').offset().top,
        video = $('#video').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-carabaya').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: carabaya -100
        },600);
    });

    $('#enlace-turismo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: turismo -100
        },600);
    });

    $('#enlace-otros').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: otros -100
        },600);
    });
    
    $('#enlace-video').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: video -100
        },600);
    });
});