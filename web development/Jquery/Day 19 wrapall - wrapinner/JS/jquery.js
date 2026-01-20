$(document).ready(function(){

    $("#wrapAllebtn").click(function(){ 

        $('#box p').wrapAll('<div id ="div23"></div>');
       
    });
    
    $("#wrapInnerbtn").click(function(){ 

        $('#box h1').wrapInner('<span class ="red" ></span>');
       
    });


});

