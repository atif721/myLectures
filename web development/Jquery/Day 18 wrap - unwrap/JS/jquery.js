$(document).ready(function(){

    $("#wrapBtn").click(function(){ 

        $('#box p').wrap("<h2></h2>");
       
    });
    
    $("#unwrapBtn").click(function(){ 

        $('#box p').unwrap();
       
    });


});

