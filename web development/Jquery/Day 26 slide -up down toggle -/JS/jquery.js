$(document).ready(function () {
    
    $('#slideUp').click(function (e) { 
        e.preventDefault();

        $('#box').slideUp("fast");
        
    });

    $('#slideDown').click(function (e) { 
        e.preventDefault();
        
        $('#box').slideDown("slow");
        
    });

    $('#slideToggle').click(function (e) { 
        e.preventDefault();
        
        $('#box').slideToggle(700);
        
    });
});