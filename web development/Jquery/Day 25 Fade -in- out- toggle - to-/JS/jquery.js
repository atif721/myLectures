$(document).ready(function () {
    
    $('#fadeOut').click(function (e) { 
        e.preventDefault();

        $('#box').fadeOut(1000);
        
    });

    $('#fadeIn').click(function (e) { 
        e.preventDefault();

        $('#box').fadeIn(1000);
        
    });

    $('#fadeToggle').click(function (e) { 
        e.preventDefault();

        $('#box').fadeToggle(500);
        
    });

    $('#fadeTo').click(function (e) { 
        e.preventDefault();

        $('#box').fadeTo(500,0.2);
        
    });
});