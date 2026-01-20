$(document).ready(function () {


    // $('#inner').parent('#main-outer').css('background','green');


    // $('#inner').parents('#main-outer').css('background','green');


    // $('#inner').parentsUntil('#main-outer').css('background','green');
    
    // $('#childC').offsetParent().css('background','green');

    $('#childC').closest('ul').css('background','green');


});