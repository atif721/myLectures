$(document).ready(function () {
    
    // $('li').has('b,span').css('background','red')

    $('p').click(function (e) { 
        e.preventDefault();

        if($(this).parent().is('div')){
            $(this).css('background','tan')
        };
    });
    
});