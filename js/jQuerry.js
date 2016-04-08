jQuery(function ($) {
    //restarting scroll
    $.scrollTo(0);
    $('#link1').click(function () { $.scrollTo($('#link1-scroll'), 800); });
    $('#link2').click(function () { $.scrollTo($('#link2-scroll'), 800); });
    $('#link3').click(function () { $.scrollTo($('#link3-scroll'), 800); });
    $('#link4').click(function () { $.scrollTo($('#link4-scroll'), 800); });
    $('.scrollup').click(function () { $.scrollTo($('body'), 1200); });
}
     );

//show while moving

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();



}
);

jQuery(function ($) {
    //restarting scroll
    $.scrollTo(0);
    $('#link11').click(function () { $.scrollTo($('#link1-scroll'), 800); });
    $('#link22').click(function () { $.scrollTo($('#link2-scroll'), 800); });
    $('#link33').click(function () { $.scrollTo($('#link3-scroll'), 800); });
    $('#link44').click(function () { $.scrollTo($('#link4-scroll'), 800); });
    $('.scrollup').click(function () { $.scrollTo($('body'), 1200); });
}
     );