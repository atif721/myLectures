$(document).ready(function () {
    
    $('#childC').siblings().css('background','blue')

    $('#childC').siblings('.test1').css('background','blue')

    $('#childC').prev().css('background','blue')

    $('#childC').prevAll().css('background','blue')

    $('#childC').prevUntil('.test1').css('background','blue')

    $('.A').next().css('background','blue')

    $('.A').nextAll().css('background','blue')

    $('.A').nextUntil('.test').css('background','blue')

});