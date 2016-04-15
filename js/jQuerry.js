jQuery(function ($) {
    //restarting scroll (upper navigation)
    $.scrollTo(0);
    $('#link1').click(function () { $.scrollTo($('#link1-scroll'), 800); });
    $('#link2').click(function () { $.scrollTo($('#link2-scroll'), 500); });
    $('#link3').click(function () { $.scrollTo($('#link3-scroll'), 1000); });
    $('#link4').click(function () { $.scrollTo($('#link4-scroll'), 1400); });
    $('.scrollup').click(function () { $.scrollTo($('.page-header'), 1400); });
}
     );

//speed of scrolling of scrollup button

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();



}
);

jQuery(function ($) {
    //restarting scroll (lower navigation)
    $.scrollTo(0);
    $('#link11').click(function () { $.scrollTo($('#link1-scroll'), 800); });
    $('#link22').click(function () { $.scrollTo($('#link2-scroll'), 1400); });
    $('#link33').click(function () { $.scrollTo($('#link3-scroll'), 1000); });
    $('#link44').click(function () { $.scrollTo($('#link4-scroll'), 500); });
    $('.scrollup').click(function () { $.scrollTo($('.page-header'), 1400); });
}
     );