
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.header__navbar').addClass("sticky-navbar");
        } else {
            $('nav').removeClass('sticky-navbar');
        }
    })
})