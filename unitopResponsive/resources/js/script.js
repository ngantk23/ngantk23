$(document).ready(function () {
    $('.resMenu-btn').click(function () {
        $('.resMenu-horizontal').stop().slideToggle(200);
        $('.store-wrap>ul').css('display', 'none');
        $('.hiddenMenu').stop().fadeToggle(150);
    })
    $('.hiddenMenu').click(function () {
        $(this).hide();
        $('.resMenu-horizontal').hide();
        $('.store-wrap>ul').hide();
    })
    $('.store-wrap').click(function () {
        $('.store-wrap>ul').stop().slideToggle(200);
    })
    $(window).resize(function (){
        var widthWin = $(document).width();
        if (widthWin >= 862) {
            $('.resMenu-horizontal').css("display", 'none');
        }
    })
    $(window).scroll(function () {
        $('.resMenu-horizontal').hide();
        $('.hiddenMenu').hide();
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('header').addClass("sticky");
            $('.news-section').css('margin-top', '140px');
            $('.hiddenMenu').css('top', '60px');
        } else {
            $('header').removeClass('sticky');
            $('.news-section').css('margin-top', '45px');
            $('.hiddenMenu').css('top', '74px');
        }
    });
})