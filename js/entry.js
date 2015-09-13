//require("../css/style.css");
$(function () {
    // initialize scrollable
    $(".scrollable").scrollable();
    $('.play-btn').overlay({mask: '#000', effect: 'apple'});
    $('.cancel-btn').click(function () {
        $('.play-btn').overlay().close();
    })

});